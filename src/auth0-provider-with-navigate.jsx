import { useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState) => {
    window.location.href = appState?.returnTo || window.location.pathname;
  };

  if (!(domain && clientId && redirectUri && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        // audience: audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Auth0ProviderWrapper>{children}</Auth0ProviderWrapper>
    </Auth0Provider>
  );
};

const Auth0ProviderWrapper = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();

  // Perform your function after successful login
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("user", JSON.stringify(user));
      const performFunctionAfterLogin = async (user) => {
        try {
          // make post request to /customer_account/new and supply with user data
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_SERVER_URL}/customer_account/new`,
            {
              email: user.email,
              name: user.name,
              picture: user.picture,
              auth0_id: user.sub,
            }
          );
        } catch (err) {
          console.error(
            "error making post request to /customer_account/new",
            err
          );
        }
      };

      performFunctionAfterLogin(user);
    }
  }, [isAuthenticated, user]);

  return <>{children}</>;
};
