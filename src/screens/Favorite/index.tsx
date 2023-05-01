import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Suspense, lazy } from "react";
import Loading from "../../components/Loading";
import { Image } from "react-native-elements";

const Product = lazy(() => import("../../components/Product/index"));
import { useSelector } from "react-redux";
import { Cars } from "../../data/cars";

import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { RootState } from "../../redux/root-reducer";

const Favorite = ({ navigation }: any) => {
  const { products, productsTotalPrice } = useSelector(
    (rootReducer: RootState) => rootReducer.cartReducer
  );

  const { currentUser } = useSelector(
    (rootReducer: RootState) => rootReducer.userReducer
  );

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });

  if (!fontsLoaded)
    return (
      <View style={styles.container}>
        <Loading background="#f5f5f5" />
      </View>
    );

  return (
    <Suspense fallback={<Loading background="#f5f5f5" />}>
      <View style={styles.container}>
        <View style={styles.box}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View style={styles.settings}>
                <View>
                  {currentUser !== null ? (
                    <>
                      <Text style={styles.textInfo}>{currentUser.name}</Text>
                      <Text style={styles.textInfo}>{currentUser.email}</Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.textInfo}>Altere seu Perfil!</Text>
                    </>
                  )}
                </View>
                <View>
                  <Button
                    title="Editar Perfil"
                    onPress={() => navigation.navigate("Perfil")}
                  />
                </View>
              </View>
              {products.length === 0 ? (
                <View style={styles.notFound}>
                  <Text style={styles.title}>
                    Adicione um carro aos Favoritos!!!
                  </Text>
                  <Image
                    source={require("../../../assets/noProduct.png")}
                    style={styles.image}
                    transition={true}
                    PlaceholderContent={
                      <View style={styles.image}>
                        <Loading background="#f5f5f5" />
                      </View>
                    }
                  />
                </View>
              ) : (
                <>
                  <Text style={styles.title}>
                    Preço total dos Carros: {productsTotalPrice}
                  </Text>
                  {products.map((car: Cars) => {
                    return (
                      <Product key={car.id} car={car} image={car.images} />
                    );
                  })}
                </>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    width: "100%",
    paddingTop: "1%",
    position: "relative",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: "100%",
    width: "94%",
  },
  title: {
    fontFamily: "Inter_500Medium",
    fontSize: 21,
  },
  settings: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  textInfo: {
    fontFamily: "Inter_900Black",
    fontSize: 18,
  },
  notFound: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  textNotFound: {
    fontFamily: "Inter_900Black",
    fontSize: 23,
  },
  image: {
    height: 200,
    width: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default Favorite;
