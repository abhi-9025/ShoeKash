import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "./src/data/products";

export default function App() {
  
  // const renderItem=({item})=>{
  //   <View style={styles.itemContainer}>
  //         <Image
  //           source={{
  //             uri: item.image,
  //           }}
  //           style={styles.image}
  //         />
  //         </View>
  // }
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => 
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
          </View>
        }
        numColumns={2}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // aspect ratio to match height according to the width of different screen sizes
  // by Default Image component will have 0:0 width and height so image will not show up unless you assign it
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer:{
    width:"50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
