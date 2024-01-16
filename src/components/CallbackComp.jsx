import { useEffect } from "react";

const CallbackComp = () => {
  useEffect(() => {
    console.log("CallbackComp");

    // set local storage item to true
    localStorage.setItem("isLoggedIn", true);
  }, []);

  return <></>;
};

export default CallbackComp;
