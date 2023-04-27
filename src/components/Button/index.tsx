import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  content: string;
  onPress(): void;
}
const Button = ({ content, onPress }: ButtonProps) => {
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
    fontSize: 15.5,
    fontWeight: "bold",
  },
});

export default Button;
