import { StatusBar } from "expo-status-bar";

import Navigation from "./navigations/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="dark" />
    </>
  );
};

export default App;
