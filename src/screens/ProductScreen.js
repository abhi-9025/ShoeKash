import React from 'react'
import { StyleSheet, View,Pressable, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductScreen = ({navigation}) => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.products.products)
  return (
    <FlatList
    data={products}
    renderItem={({item}) => 
    <Pressable
    style={styles.itemContainer} 
    onPress={()=>{
      dispatch(productsSlice.actions.setSelectedProduct(item.id))
    navigation.navigate('Product Details')
    }}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      </Pressable>
    }
    numColumns={2}
  />
  )
}
const styles=StyleSheet.create({
     // aspect ratio to match height according to the width of different screen sizes
  // by Default Image component will have 0:0 width and height so image will not show up unless you assign it

    itemContainer:{
        width:"50%",
      },
      image: {
        width: "100%",
        aspectRatio: 1,
      },
})

export default ProductScreen