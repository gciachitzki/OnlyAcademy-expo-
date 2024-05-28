import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TelaPagamento = ({ route }) => {
  const { paymentUrl } = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: paymentUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TelaPagamento;
