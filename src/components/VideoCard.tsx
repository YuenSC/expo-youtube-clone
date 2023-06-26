import { IVideo } from "@app/utils/data/randomVideoes";
import { formatTimeDiff } from "@app/utils/stringRelated/formatTimeDiff";
import { formatViewCount } from "@app/utils/stringRelated/formatViewCount";
import dayjs from "dayjs";
import { memo } from "react";
import { Image, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

const VideoCard = ({ video }: { video: IVideo }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        width: "100%",
        marginBottom: 10,
      }}>
      <Image
        style={{
          width: "100%",
          height: 250,
        }}
        source={{ uri: video.imageUrl }}
      />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          paddingVertical: 8,
          width: "100%",
        }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 16 }}
          source={{ uri: video.authorImageUrl }}
        />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={2}>{video.title}</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 2 }}>
            <Text style={{ marginRight: 8, fontSize: 12, color: theme.colors.tertiary }}>
              {video.author}
            </Text>
            <Text style={{ marginRight: 8, fontSize: 12, color: theme.colors.tertiary }}>
              {"View: " + formatViewCount(video.viewCount)}
            </Text>
            <Text style={{ marginRight: 8, fontSize: 12, color: theme.colors.tertiary }}>
              {formatTimeDiff(dayjs().diff(video.createAt))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(VideoCard);
