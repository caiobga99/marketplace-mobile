import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import HomeStackScreen from "../../screens/HomeStackScreen/index";
import Profile from "../../screens/Profile/index";

const NavigationBar = () => {
  const Tab = createBottomTabNavigator();

  interface ScreenNavigationValue {
    name: string;
    component: React.FC;
    options: {
      title: string;
      tabBarIcon(params: { size: number; color: string }): JSX.Element;
      toBarLabel: string;
    };
  }

  interface ScreenNavigationValues extends Array<ScreenNavigationValue> {}

  const screensNavigations: ScreenNavigationValues = [
    {
      name: "Shopping",
      component: HomeStackScreen,
      options: {
        title: "Shop",
        toBarLabel: "Shop",
        tabBarIcon: ({ size, color }) => {
          return <AntDesign name="shoppingcart" size={size} color={color} />;
        },
      },
    },
    {
      name: "Perfil",
      component: Profile,
      options: {
        title: "Perfil",
        toBarLabel: "Perfil",
        tabBarIcon: ({ size, color }) => {
          return <AntDesign name="user" size={size} color={color} />;
        },
      },
    },
    {
      name: "Home",
      component: HomeStackScreen,
      options: {
        title: "Favorite",
        toBarLabel: "Cart",
        tabBarIcon: ({ size, color }) => {
          return (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          );
        },
      },
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {screensNavigations.map(
          ({ name, component, options }, index: number) => {
            return (
              <Tab.Screen
                name={name}
                key={index}
                component={component}
                options={options}
              />
            );
          }
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default NavigationBar;
