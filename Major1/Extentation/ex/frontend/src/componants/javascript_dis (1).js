import React, { Component } from "react";
import {StyleSheet, View, WebView } from "react-native";

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <WebView          
          source={{ uri: 'https://www.google.com' }}
          javaScriptEnabled={false}
          domStorageEnabled={true} />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  
});