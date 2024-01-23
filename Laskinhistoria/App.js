import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import { useState,} from 'react';

export default function App() {
  

  const buttonPressed = () => {
    num = parseInt(text1)-parseInt(text2)
    setText3(num.toString());
      setData([...data, { key: text1+""+text2+"="+num }]);
      
    
    }



    const buttonPressed2 = () => {
      num = parseInt(text1)+parseInt(text2)
      setText3(num.toString());
        setData([...data, { key: text1+"+"+text2+"="+num }]);
        
      }



      const [text1, setText1] = useState("");
      const [text2, setText2] = useState("");
      const [text3, setText3] = useState("");
      const [data, setData] = useState([]);

  return (
    <View style={styles.container}>

      <Text style={{ fontSize:22 }}>Result: {text3}</Text>

      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text1 => setText1(text1)} value={text1} keyboardType="numeric" />
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text2 => setText2(text2)} value={text2} keyboardType="numeric" />
      
      <View style={styles2.container}>
      <Button onPress={buttonPressed2} title="+" />
      <Button onPress={buttonPressed} title="-" />
      </View>
      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}
       keyExtractor={(item, index) => index.toString()} />
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 100,
    marginTop: 15,
  },
})



const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
