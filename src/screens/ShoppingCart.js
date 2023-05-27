import React from 'react'
import { FlatList, Text,View ,StyleSheet,Pressable} from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { deliveryCharge, freeDeliveryFromCheck, subTotal } from '../store/cartSlice'
const ShoppingCartTotal=()=>{
  
  const SubTotal =useSelector(subTotal)
  return(
  <View style={styles.totalConatiner}>
          <View style={styles.row}>
             <Text style={styles.text}>Subtotal</Text>
             <Text style={styles.text}>{SubTotal}$</Text>
          </View>
          <View style={styles.row}>
             <Text style={styles.text}>Delivery</Text>
             <Text style={styles.text}>20$</Text>
          </View>
          <View style={styles.row}>
             <Text style={styles.textBold}>Total</Text>
             <Text style={styles.textBold}>{SubTotal+20}$</Text>
          </View>
      </View>
  )
  }

const ShoppingCart = () => {

  const cartItem=useSelector(state=>state.cart.items)

  return (
    <>
    <FlatList 
    data={cartItem}
    renderItem={({item})=><CartListItem cartItem={item}/>}
    ListFooterComponent={ShoppingCartTotal}
    />
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
            Checkout
        </Text>
      </Pressable>
      </>
  )
}

export default ShoppingCart

const styles=StyleSheet.create({
    totalConatiner:{
        margin:20,
        borderTopColor:'gray',
        borderTopWidth:1,
        paddingVertical:10,
    },
    row:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:2,
    },
    text:{
        fontSize:16,
    },
    textBold:{
      fontSize:16,
      fontWeight:'500',

    },
    button:{
        position:'absolute',
       backgroundColor:'black',
       bottom:50,
       width:'90%',
       alignSelf:"center",
       padding:12,
       borderRadius:30,
       alignItems:'center',
       justifyContent:'center',
    
      },
      buttonText:{
        color:"white",
        fontSize:20,
        fontWeight:'500',
    
      }
})