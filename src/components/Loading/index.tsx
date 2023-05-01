import { ActivityIndicator, View } from "react-native";

export default function Loading({ background }: string | any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background || "#efefef",
      }}
    >
      <ActivityIndicator color="#49a1b8" />
    </View>
  );
}
