/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}

export type IRootStackParamList = {
  Root: NavigatorScreenParams<IRootTabParamList> | undefined;
  VideoPlaying: { videoId: string; videoUrl: string };
};

export type IRootStackScreenProps<Screen extends keyof IRootStackParamList> =
  NativeStackScreenProps<IRootStackParamList, Screen>;

export type IRootTabParamList = {
  Home?: undefined;
  Subscription?: undefined;
  Profile: undefined;
};

export type IRootTabScreenProps<Screen extends keyof IRootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<IRootTabParamList, Screen>,
  NativeStackScreenProps<IRootStackParamList>
>;
