import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Dimensions} from 'react-native';

const CardBox=({news})=>{ 
  function stok(inStock){ 
    if(inStock!='true'){
      return "STOKTA YOK";
    }
  }
  return (  
      <View style={stil.container}> 
        <View style={stil.box}> 
            <View style={stil.img}> 
              <ImageBackground source={{uri:news.imgURL}} resizeMode='cover' style={stil.pimg}/> 
            </View>
            <Text style={stil.texth2}>{news.title}</Text>
            <Text style={stil.texth3}>{news.price}</Text> 
            <Text style={stil.texth4}>{stok(news.inStock)}</Text>
        </View> 
      </View>   
  )
}

export default CardBox;

const stil=StyleSheet.create({
  container:{   
    width:Dimensions.get('window').width/2,
    padding:5,
  },
  box:{
    backgroundColor:'#EDF0F2',  
    padding:10, 
    marginLeft:2, 
    marginRight:2, 
  },
  img:{
    backgroundColor:'white',
    padding:10,
    height:120
  }, 
  pimg:{
    flex: 1,
    justifyContent: "center"
  },
  texth2:{
    marginTop:3,
    fontSize:14,
    fontWeight:'bold',
    color:'black'
  },
   texth3:{ 
    fontSize:11,
    fontWeight:'bold',
    color:'gray'
  },
    texth4:{ 
    fontSize:12,
    fontWeight:'bold',
    color:'red'
  }
})