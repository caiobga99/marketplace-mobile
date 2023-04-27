import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>123</Text>
      </View>
      <View>
        <Text>123</Text>
      </View>
      <View>
        <Text>123</Text>
      </View>
      <View>
        <Text>123</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#444',
  },
});

export default Header;
