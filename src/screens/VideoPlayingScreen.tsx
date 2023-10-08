import { IRootStackScreenProps } from "@app/navigations/navigationTypes";
import { AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

const VideoPlayingScreen = ({
  navigation,
  route: {
    params: { videoUrl },
  },
}: IRootStackScreenProps<"VideoPlaying">) => {
  const videoRef = React.useRef<Video>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus | undefined>();

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        isMuted={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <View style={styles.buttons}>
        <Button
          title={(status as AVPlaybackStatusSuccess)?.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            (status as AVPlaybackStatusSuccess)?.isPlaying
              ? videoRef.current?.pauseAsync()
              : videoRef.current?.playAsync()
          }
        />
      </View>

      <Button title="Back" onPress={navigation.goBack} />
    </View>
  );
};

export default VideoPlayingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
  buttons: {},
});
