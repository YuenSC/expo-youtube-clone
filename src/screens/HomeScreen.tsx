import YouTubeIcon from "@app/assets/icons/YoutubeIcon.svg";
import VideoCard from "@app/components/VideoCard";
import { IRootTabScreenProps } from "@app/navigations/navigationTypes";
import { currentUser } from "@app/utils/data/randomUsers";
import { videos } from "@app/utils/data/randomVideoes";
import FeatherIcons from "@expo/vector-icons/Feather";
import FontAwesomeIcons from "@expo/vector-icons/FontAwesome";
import React, { useEffect, useRef } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderOffset = -150;

const HomeScreen = ({ navigation }: IRootTabScreenProps<"Home">) => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const headerHeight = 56 + safeAreaInsets.top;

  const currentOffset = useRef(0);
  const translateY = useSharedValue(0);

  const animatedHeaderStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withTiming(translateY.value) }],
    };
  });
  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      paddingTop: withTiming(headerHeight + translateY.value, {
        duration: 50,
      }),
    };
  });

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      header: () => (
        <Animated.View
          style={[
            {
              paddingTop: safeAreaInsets.top,
              height: headerHeight,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.colors.background,
            },
            animatedHeaderStyles,
          ]}>
          <YouTubeIcon width={120} />
          <View style={{ flexDirection: "row", marginRight: 12 }}>
            <Pressable>
              <FontAwesomeIcons name="bell-o" size={24} style={{ marginRight: 16 }} />
            </Pressable>
            <Pressable>
              <FeatherIcons name="search" size={24} style={{ marginRight: 16 }} />
            </Pressable>
            <Pressable>
              <Image
                source={{ uri: currentUser.avatar }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: theme.colors.shadow,
                }}
              />
            </Pressable>
          </View>
        </Animated.View>
      ),
    });
  }, [
    animatedHeaderStyles,
    headerHeight,
    navigation,
    safeAreaInsets.top,
    theme.colors.background,
    theme.colors.shadow,
  ]);

  return (
    <Animated.View
      style={[styles.container, { paddingTop: safeAreaInsets.top }, animatedViewStyles]}>
      <FlatList
        data={videos}
        style={[{ width: "100%" }]}
        onScroll={(event) => {
          const direction =
            event.nativeEvent.contentOffset.y > currentOffset.current ? "down" : "up";
          currentOffset.current = event.nativeEvent.contentOffset.y;

          const isCloseToTop = currentOffset.current < 50;

          if (direction === "up") {
            translateY.value = withTiming(0, {
              duration: 50,
            });
          } else {
            if (isCloseToTop) return;
            translateY.value = withTiming(HeaderOffset, {
              duration: 50,
            });
          }
        }}
        contentContainerStyle={{
          width: "100%",
        }}
        renderItem={({ item }) => <VideoCard video={item} />}
      />
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
