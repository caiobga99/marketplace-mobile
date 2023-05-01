import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";
import { Suspense, lazy, useState, useMemo } from "react";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { Image } from "react-native-elements";
import Loading from "../../components/Loading/index";
import cars from "../../data/cars";
import { FontAwesome } from "@expo/vector-icons";
const Product = lazy(() => import("../../components/Product/index"));

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const filteredCars = useMemo(() => {
    return cars.filter(({ title }) =>
      title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search]);

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
    <Suspense fallback={<Loading />}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.filterContainer}>
            <TextInput
              value={search}
              onChangeText={setSearch}
              style={styles.input}
              placeholder="Digite uma marca ou modelo"
            />
            <FontAwesome
              style={styles.iconSearch}
              name="search"
              size={24}
              color="black"
            />
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {filteredCars.length === 0 ? (
                <View style={styles.notFound}>
                  <Text style={styles.textNotFound}>
                    Produto não encontrado!
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
                filteredCars.map((car) => {
                  return <Product key={car.id} car={car} image={car.images} />;
                })
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
    flex: 1,
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
  filterContainer: {
    height: 50,
    flexDirection: "row",
    // height: "6%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "100%",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#efefef",
    fontSize: 16,
    fontFamily: "Inter_900Black"
  },
  iconSearch: {
    position: "absolute",
    left: "10%",
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

export default Home;
