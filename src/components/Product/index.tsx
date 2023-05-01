import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import Loading from "../Loading";
import ShowModal from "../ShowModal";
import { RootState } from "../../redux/root-reducer";
import { Cars } from "../../data/cars";

const Product = ({ car, image }: any) => {
  const [indexImage, setIndexImage] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const dispatch = useDispatch();

  const { products } = useSelector(
    (rootReducer: RootState) => rootReducer.cartReducer
  );
  const handleProductClick = () => {
    dispatch(addProductToCart(car));
  };

  useEffect(() => {
    products.some((vehicle: Cars) =>
      vehicle.id === car.id ? setIsLiked(true) : setIsLiked(false)
    );
  }, [car.id, products]);

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
              <Loading background="#fff"  />
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
              size={24}
              color={car.isLiked || isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
          <ShowModal car={car} image={image} />
        </View>
        <Text style={styles.price}>{car.price}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textFooter}>{car.title}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
    paddingTop: 12,
    minHeight: 300,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 17,
    elevation: 6,
    shadowColor: "#171717",
  },
  imageContainer: {
    height: "100%",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    height: 200,
    width: 200,
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
    width: "90%",
  },
  price: {
    fontSize: 18,
    fontFamily: "Inter_900Black",
  },

  textFooter: {
    fontFamily: "Inter_500Medium",
  },
});

export default Product;
