import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const Home = () => {
  const handlePayment = () => {
    // URL de pagamento para a assinatura mensal (substitua pela sua URL real)
    const paymentUrl = 'http://192.168.80.199:8082/TelaAssinatura.html';
    Linking.openURL(paymentUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clique em assinar e escolha seu plano.</Text>
      <View style={{ marginBottom: 30 }} />
      <Button title='Assinar' onPress={handlePayment} />
      <View style={{ marginBottom: 10 }} />
    
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
});

export default Home;
