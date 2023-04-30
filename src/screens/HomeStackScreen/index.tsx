import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home/index";
import Profile from "../Profile/index";
const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
