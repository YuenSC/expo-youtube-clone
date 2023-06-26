import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import Navigation from "./navigations/Navigation";

const App = () => {
  return (
    <PaperProvider>
      <Navigation />
      <StatusBar style="dark" />
    </PaperProvider>
  );
};

export default App;
