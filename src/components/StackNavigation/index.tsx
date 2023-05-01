import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/index";
import Profile from "../../screens/Profile/index";
import Favorite from "../../screens/Favorite/index";
const Stack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export const FavoriteStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};

export const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
