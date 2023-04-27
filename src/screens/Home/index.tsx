import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import Constants from "expo-constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Voce está na Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Home;
