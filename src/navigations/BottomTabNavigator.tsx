import HomeScreen from "@app/screens/HomeScreen";
import SampleScreen from "@app/screens/SampleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { IRootTabParamList } from "./navigationTypes";

const BottomTab = createBottomTabNavigator<IRootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Profile" component={SampleScreen} />
      <BottomTab.Screen name="Subscription" component={SampleScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
