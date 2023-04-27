import { ActivityIndicator, View } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#efefef",
      }}
    >
      <ActivityIndicator color="#49a1b8" />
    </View>
  );
}
