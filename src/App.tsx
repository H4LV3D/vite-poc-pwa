import React from "react";
import AddToHomeScreen from "./utils/others/pwapopup/AddToHomeScreen";
import useUserAgent from "./hooks/useUserAgent";
import Login from "./pages/login";

type Props = {};

const App = (props: Props) => {
  const { isMobile, userAgentString, userAgent } = useUserAgent();

  return (
    <>
      <Login />
      <AddToHomeScreen />
    </>
  );
};

export default App;
