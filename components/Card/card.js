import React from 'react';
import {SafeAreaView,View,StyleSheet,Text,Image,Dimensions} from 'react-native';

const CardBox=({product})=>{  
  return (  
    <SafeAreaView style={stil.container}> 
                 <View style={stil.img}>
                <Image style={stil.imgc} source={{ uri: product.imgURL }} />
            </View>
        <View style={stil.box}>  
            <Text style={stil.texth2}>{product.title}</Text>
            <Text style={stil.texth3}>{product.price}</Text> 
            <Text style={stil.texth4}>{product.inStock === 'true' ? '' : 'Stokta Yok'}</Text>
        </View> 
    </SafeAreaView> 
  )
}

export default CardBox;

const stil=StyleSheet.create({
  container:{   
    flex: 1,
        backgroundColor: '#e0e0e0',
        margin: 10,
        padding: 10,
        borderRadius: 10,
  },
  box:{ 
    padding: 10, 
  },
  img:{
    backgroundColor: '#ffffff',
    padding: 5, 
    borderRadius: 10
  }, 
  imgc:{
    height: Dimensions.get('window').height/4,
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