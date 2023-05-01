import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Loading from "../Loading";

const ProductModal = ({ car, image }: any) => {
  const [indexImage, setIndexImage] = useState<number>(0);
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(car));
  };

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });

  if (!fontsLoaded)
    return (
      <View style={styles.container}>
        <Loading background="#fff" />
      </View>
    );
  return (
    <View style={styles.container}>
      <ScrollView>
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          onPress={() => {
            indexImage <= 0
              ? setIndexImage(image.length - 1)
              : setIndexImage(indexImage - 1);
          }}
          name="left"
          color="#d3d3d3"
          size={26}
          style={{ position: "absolute", left: 1, zIndex: 1 }}
        />
        <Image
          source={{ uri: image[indexImage] }}
          style={styles.image}
          transition={true}
          PlaceholderContent={
            <View style={styles.image}>
              <Loading page="Product" />
            </View>
          }
        />
        <AntDesign
          onPress={() => {
            indexImage >= image.length - 1
              ? setIndexImage(0)
              : setIndexImage(indexImage + 1);
          }}
          name="right"
          color="#d3d3d3"
          size={26}
          style={{ position: "absolute", right: 1 }}
        />
      </View>
      <View style={styles.row}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "30%",
          }}
        >
          <TouchableOpacity onPress={() => handleProductClick()}>
            <AntDesign
              name="heart"
              size={33}
              color={car.isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>{car.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textTitle}>{car.title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textFooter}>{car.author}</Text>
      </View>
      <View style={styles.separetor}></View>
      <View style={styles.row}>
        <Text style={styles.textFooter}>{car.year}</Text>
        <Text style={styles.textFooter}>{car.km}</Text>
        <Text style={styles.textFooter}>{car.fuel}</Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  imageContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    height: 300,
    width: 350,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footer: {
    height: "100%",
    width: "100%",
  },
  separetor: {
    borderWidth: 1,
    borderColor: "#1212",
    backgroundColor: "#1212",
    width: "100%",
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  price: {
    fontSize: 23,
    fontFamily: "Inter_900Black",
  },

  textFooter: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
  },
  textTitle: {
    fontFamily: "Inter_500Medium",
    fontSize: 21,
  },
});

export default ProductModal;
