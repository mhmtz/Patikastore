import * as React from 'react';
import {columns ,SafeAreaView, Text, View, StyleSheet,Button,FlatList,TextInput,ScrollView } from 'react-native'; 
import style from './assets/store.style';
import CardBox from './components/Card/card';
import Banner from './components/Card/banner';
import store_data from './store.json'; 

 function App() { 
  const renderCards = ({ item }) => <CardBox product={item} />
  return (
    
    <View style={style.container}>
      <Text style={style.title}>PATIKASTORE</Text>
       <TextInput  placeholder={'Ara...'} style={style.ara}/>
       
           <FlatList 
            data={store_data}
            renderItem={renderCards} numColumns={columns ? 1 : 2} 
            />
             
        
        <Banner />
        </View>
         
  
  )
}
export default App;
 

 