import { View, Modal, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

import ProductModal from "../ProductModal";
import { AntDesign } from "@expo/vector-icons";

const ShowModal = ({ car, image }: any) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <AntDesign name="closecircle" size={35} />
            </Pressable>
          </View>
          <View style={styles.modalContent}>
            <ProductModal car={car} image={image} />
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)} disabled={modalVisible}>
        <AntDesign
          name="infocirlce"
          size={24}
          color={modalVisible ? "lightgray" : "black"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    width: "100%",
    height: "5%",
    alignItems: "flex-end",
  },
  modalContent: {
    width: "100%",
    height: "95%",
  },

  modalView: {
    flex: 1,
    marginTop: 22,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#444",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ShowModal;
