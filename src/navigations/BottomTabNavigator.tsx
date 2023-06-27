import HomeScreen from "@app/screens/HomeScreen";
import SampleScreen from "@app/screens/SampleScreen";
import IoniconsIcons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";

import { IRootTabParamList } from "./navigationTypes";

const BottomTab = createBottomTabNavigator<IRootTabParamList>();

const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.shadow,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <IoniconsIcons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={SampleScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <IoniconsIcons name={focused ? "person" : "person-outline"} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Subscription"
        component={SampleScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <IoniconsIcons
              name={focused ? "bookmarks" : "bookmarks-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
