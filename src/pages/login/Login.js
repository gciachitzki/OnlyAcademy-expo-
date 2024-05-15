import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const handleLogin = () => {

    navigation.navigate('User');
  };

  return (
    <View style={styles.container}>
      <Ionicons name={"logo-android"} size={100} color={"#1B1B1B"} />
      <Text style={styles.title}>Tela de Login</Text>
      <Text style={styles.subtitle}>Seja bem vindo</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin} // Chame a função handleLogin ao pressionar o botão de login
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText}>
          Ainda não tem cadastro?{" "}
          <Text style={styles.registerLink}>Cadastrar-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBDB",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#1B1B1B",
    fontWeight: "500",
    marginTop: 70,
  },
  subtitle: {
    fontSize: 23,
    color: "black",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#E8E8E8",
    width: "90%",
    color: "#6D6D6D",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#4F2197",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  registerText: {
    fontSize: 15,
    color: "black",
  },
  registerLink: {
    color: "#2974D3",
    fontWeight: "500",
  },
});

export default Login;
