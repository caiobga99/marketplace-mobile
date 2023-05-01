import { StyleSheet, TouchableOpacity, Text } from "react-native";

import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Loading from "../Loading";

interface ButtonProps {
  content: string;
  onPress(): void;
}

const Button = ({ content, onPress }: ButtonProps) => {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });

  if (!fontsLoaded)
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Loading background="#61dbfb" />
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonContent}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 23,
    backgroundColor: "#61dbfb",
  },
  buttonContent: {
    fontFamily: "Inter_900Black",
    fontSize: 17,
  },
});

export default Button;
