import VideoPlayingScreen from "@app/screens/VideoPlayingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";
import { IRootStackParamList } from "./navigationTypes";

const Stack = createNativeStackNavigator<IRootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="VideoPlaying" component={VideoPlayingScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
