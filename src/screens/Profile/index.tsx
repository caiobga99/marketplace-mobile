import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";

import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { useForm, Controller } from "react-hook-form";
import validator from "validator";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import Button from "../../components/Button/index";
import Loading from "../../components/Loading/index";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";
import { RootState } from "../../redux/root-reducer";

interface FormData {
  name: string;
  email: string;
  password: string;
  bio: string;
}
const Profile = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: RootState) => state.userReducer);
 
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = ({ name, email, password, bio }: FormData) => {
    dispatch(
      loginUser({ name: name, email: email, password: password, bio: bio })
    );
    reset({
      name: "",
      email: "",
      password: "",
      bio: "",
    });
  };
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageRight}>
          <TouchableOpacity>
            <MaterialIcons
              name="logout"
              size={45}
              color="black"
              onPress={() => dispatch(logoutUser())}
            />
          </TouchableOpacity>
        </View>
        <FontAwesome name="user-circle" size={100} color="black" />
        <Text style={styles.name}>
          {currentUser === null ? "Adicione um Nome" : currentUser.name}
        </Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={
                  currentUser === null ? "Seu Nome" : currentUser.name
                }
                style={[styles.input, errors?.name && styles.inputError]}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="name"
            rules={{
              required: true,
              maxLength: 26,
            }}
          />
          {errors?.name?.type === "required" && (
            <Text style={styles.errorMessage}>Nome não pode estar vazio!</Text>
          )}
          {errors?.name?.type === "maxLength" && (
            <Text style={styles.errorMessage}>
              Nome não pode ter mais de 26 caracteres!
            </Text>
          )}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={
                  currentUser === null ? "Seu E-mail" : currentUser.email
                }
                style={[styles.input, errors?.email && styles.inputError]}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{
              required: true,
              maxLength: 26,
              validate: (value) => validator.isEmail(value),
            }}
          />
          {errors?.email?.type === "required" && (
            <Text style={styles.errorMessage}>
              E-mail não pode estar vazio!
            </Text>
          )}
          {errors?.email?.type === "maxLength" && (
            <Text style={styles.errorMessage}>
              Email não pode ter mais de 26 caracteres!
            </Text>
          )}
          {errors?.email?.type === "validate" && (
            <Text style={styles.errorMessage}>Email não é valido!</Text>
          )}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Senha</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={
                  currentUser === null ? "Sua Senha" : currentUser.password
                }
                style={[styles.input, errors?.password && styles.inputError]}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="password"
            rules={{
              required: true,
              maxLength: 26,
            }}
          />
          {errors?.password?.type === "required" && (
            <Text style={styles.errorMessage}>Senha não pode estar vazia!</Text>
          )}
          {errors?.password?.type === "maxLength" && (
            <Text style={styles.errorMessage}>
              Senha não pode ter mais de 26 caracteres!
            </Text>
          )}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Biografia</Text>
          <View
            style={[
              styles.textAreaContainer,
              errors?.bio && styles.textAreaContainerError,
            ]}
          >
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder={
                    currentUser === null ? "Sua Biografia" : currentUser.bio
                  }
                  style={[
                    styles.textArea,
                    errors?.bio && styles.textAreaContainerError,
                  ]}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  underlineColorAndroid="transparent"
                  placeholderTextColor="gray"
                  numberOfLines={10}
                  multiline={true}
                />
              )}
              name="bio"
              rules={{
                required: true,
                maxLength: 255,
              }}
            />
          </View>
          {errors?.bio?.type === "required" && (
            <Text style={styles.errorMessage}>
              Biografia não pode estar vazia!
            </Text>
          )}
          {errors?.bio?.type === "maxLength" && (
            <Text style={styles.errorMessage}>
              Bio não pode ter mais de 255 caracteres!
            </Text>
          )}
          <View>
            <Button
              content="Atualizar Perfil"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#efefef",
    flexDirection: "column",
    alignItems: "center",
  },
  formGroup: {
    margin: 12,
    width: "90%",
  },
  label: {
    padding: 1,
    fontFamily: "Inter_500Medium",
    fontSize: 17.8,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  inputError: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  errorMessage: {
    color: "red",
  },

  imageRight: {
    padding: "1%",
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
  },
  name: {
    fontSize: 23,
    fontFamily: "Inter_900Black",
  },
  textAreaContainer: {
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
  textAreaContainerError: {
    borderColor: "red",
  },
});
export default Profile;
