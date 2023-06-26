import VideoCard from "@app/components/VideoCard";
import { videos } from "@app/utils/data/randomVideoes";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        style={{ width: "100%" }}
        contentContainerStyle={{
          width: "100%",
        }}
        renderItem={({ item }) => <VideoCard video={item} />}
      />
    </View>
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
