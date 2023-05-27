import {
  FlatList,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable
} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const dispatch=useDispatch()
  const product=useSelector(state=>state.products.selectedProduct)
  console.log(product)
  const { width } = useWindowDimensions();
  const addToCart=()=>{
    dispatch(cartSlice.actions.addCartItem({product}))
  }
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        // make sure to center the closest image
        pagingEnabled
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{product.name}</Text>

        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.description}>{product.description}</Text>
      </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>
            Add to Cart
        </Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize:34,
    fontWeight:'500',
    marginVertical:10,

  },
  price: {
    fontWeight:'500',
    fontSize:16,
    letterSpacing:1.5,
  },
  description: {
    marginVertical:10,
    fontSize:18,
    lineHeight:25,
    fontWeight:'300',
  },
  button:{
    position:'absolute',
   backgroundColor:'black',
   bottom:40,
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
});

export default ProductDetailsScreen;
