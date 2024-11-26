import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeBody from "./HomeBody";

const { width } = Dimensions.get("window"); 


const images = [
  {
    source: require("../assets/Images/beats.png"), 
    text: "Beats Solo3\nWireless\n€319.90", 
    textPosition: "right", 
  },
  {
    source: require("../assets/Images/sony.png"), 
    text: "Sony Headphones\n€299.90", 
    textPosition: "left", 
  },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      {item.textPosition === "left" && (
        <Text style={styles.carouselText1}>{item.text}</Text>
      )}
      <Image source={item.source} style={styles.carouselImage} />
      {item.textPosition === "right" && (
        <Text style={styles.carouselText}>{item.text}</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <View style={styles.Topcontainer}>
          <Icon name="menu" size={30} color="#FFFFFF" />
          <Text style={styles.Toptext}>LETRO</Text>
          <Icon
            name="search"
            size={30}
            color="#FFFFFF"
            style={{ marginLeft: 80 }}
          />
          <Icon name="shopping-cart" size={30} color="#FFFFFF" />
        </View>

        <FlatList
          data={images}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.carouselContainer}
        />

        <View>

        </View>

       
      </View>
      <HomeBody />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#252837",
  },
  container: {
    
    marginVertical:15,
    backgroundColor: "#252837",
  },
  Topcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: "absolute",
    top: 0,
    width: "100%",
    paddingTop: 50, 
  },
  Toptext: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 100,
  },
  carouselContainer: {
    marginTop: 100, 
  },
  carouselItem: {
    width: width, 
    height: 250, 
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  carouselImage: {
    width: "90%", 
    height: "80%",
    resizeMode: "contain",
  },
  carouselText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    marginRight: 100,
    textAlign: "center",
    width: "45%",
  },
  carouselText1: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 150,
    textAlign: "center",
    width: "45%", 
  },
});

export default Home;
