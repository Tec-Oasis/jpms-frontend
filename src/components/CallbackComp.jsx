import { useEffect } from "react";

const CallbackComp = () => {
  useEffect(() => {
    console.log("CallbackComp");
  }, []);

  return <></>;
};

export default CallbackComp;
