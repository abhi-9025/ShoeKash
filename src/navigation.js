import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProductDetailsScreen from "./screens/ProductDetailScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Pressable,Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";
const Stack = createNativeStackNavigator();
 const HeaderRight=()=>{
    const navigation=useNavigation();
    const NumberOfItems=useSelector(selectNumberOfItems)

    return (
            <Pressable onPress={()=>navigation.navigate('Cart')} style={{flexDirection:'row'}}>
                <AntDesign name="shoppingcart" size={18} color="gray" />
                <Text style={{marginLeft:5,fontWeight:'500'}}>{NumberOfItems}</Text>
              </Pressable>
    )
 }

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{
        backgroundColor:'white'
      }}}>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{
            headerRight:HeaderRight,
          }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
