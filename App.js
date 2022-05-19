import * as React from 'react';
import {StatusBar,SafeAreaView, Text, View, StyleSheet,Button,FlatList,TextInput,ScrollView } from 'react-native'; 
import style from './assets/store.style';
import CardBox from './components/Card/card';
import Banner from './components/Card/banner';
import store_data from './store.json'; 

 function App() { 
  return (
    <SafeAreaView>
    <View style={style.container}>
      <Text style={style.title}>PATIKASTORE</Text>
       <TextInput  placeholder={'Ara...'} style={style.ara}/>
       
           <FlatList numColumns={2} 
            data={store_data}
            renderItem={({item}) =><CardBox news={item} /> }
            />
             
        </View>
        <Banner />
     </SafeAreaView>
         
  
  )
}
export default App;
 

 