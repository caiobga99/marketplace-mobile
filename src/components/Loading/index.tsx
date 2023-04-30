import { ActivityIndicator, View } from "react-native";

export default function Loading({ page }: string | any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: page === "Product" ? "#fff" : "#efefef",
      }}
    >
      <ActivityIndicator color="#49a1b8" />
    </View>
  );
}
