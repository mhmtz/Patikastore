import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Dimensions} from 'react-native';
import store_data from '../../store.json';

const Banner=()=>{ 
    var lastid = store_data[store_data.length-1];
    function stok(inStock){ 
        if(inStock!='true'){
          return "STOKTA YOK";
        }
      }
    return( 
        <View style={stil.container}> 
        <View style={stil.box}> 
            <View style={stil.img}> 
              <ImageBackground source={{uri:lastid.imgURL}} resizeMode='cover' style={stil.pimg}/> 
            </View>
            <Text style={stil.texth2}>{lastid.title}</Text>
            <Text style={stil.texth3}>{lastid.price}</Text> 
            <Text style={stil.texth4}>{stok(lastid.inStock)}</Text>
        </View> 
      </View>  
    )
}

export default Banner;


const stil=StyleSheet.create({
    container:{     
      padding:5,
      flex:1
    },
    box:{
      backgroundColor:'#EDF0F2',  
      padding:10, 
      marginLeft:2, 
      marginRight:2, 
    }, 
    pimg:{ 
        height: Dimensions.get('window').height / 4,
        width: '100%',
        resizeMode: 'contain',
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