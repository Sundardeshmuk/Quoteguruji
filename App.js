import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const [color, setcolor] = useState('#98fb98');
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState("Loading...");
  const randomeQuote = () => {

    fetch('https://api.quotable.io/quotes/random')
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setQuote(result[0].content);
          setAuthor(result[0].author);
        }
      })
  }
  useEffect(() => {
    randomeQuote();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.quotecontainer} >Quote of the day</Text>
        <FontAwesome5 name="quote-left" style={{ fontSize: 20, marginBottom: -18 }} color='#000' />
        <Text style={styles.quoteMessagecontainer} >{Quote}</Text>
        <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right', marginTop: -28 }} color='#000' />

        <Text style={styles.Author} >{Author}</Text>
        <TouchableOpacity onPress={randomeQuote} style={styles.button}>
          <Text style={styles.buttonText} >New Quote</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#533721f0', borderRadius: 50, padding: 50 }}>
            <FontAwesome5 name="volume-up" Size={20} color='#533721f0' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#533721f0', borderRadius: 50, padding: 50 }}>
            <FontAwesome name="copy" Size={20} color='#533721f0' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#533721f0', borderRadius: 50, padding: 50 }}>
            <FontAwesome5 name="twitter" Size={20} color='#533721f0' />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
      <Text><h1>
        he;llow jfhvj  fugv iu
      </h1>
        <p>backgroundColor of hues,display app logo in left side,,ability to use
          images as iso widget,share it on various platform,and save images for
          personal use
        </p>
      </Text>
    </View>
  );
}
// setTimeout(() => {

// }, 1000);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    width: '90%',
    backgroundColor: '#fff', borderRadius: 20, padding: 20,
    justifyContent: 'center',
  },

  quotecontainer: {
    textAlign: 'center', fontSize: 26,
    fontWeight: '600', color: '#333', marginBottom: 20,
  },
  quoteMessagecontainer: {
    color: '#000',
    fontSize: 16,
    lineHeight: 26, letterSpacing: 1.1, fontWeight: '400',
    textAlign: 'center', marginBottom: 10, marginHorizontal: 18,
  },
  button: {
    backgroundColor: '#5372fe',
    padding: 20, borderRadius: 30, marginVertical: 20,
  },
  buttonText: {
    color: '#fff', fontSize: 10, textAlign: 'center',
    backgroundColor: '#5372fe',
    padding: 10, borderRadius: 30, marginVertical: 10,
  },
  Author: {
    color: '#000', fontSize: 16, textAlign: 'right', fontWeight: '300', fontStyle: 'italic'

  },

});
