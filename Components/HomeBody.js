import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const HomeBody = () => {
  const navigation = useNavigation();

  const [newProducts, setNewProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    // Fetch new products
    axios
      .get("http://192.168.1.78:3000/newproducts")
      .then((response) => {
        console.log("Fetched new products:", response.data);
        setNewProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching new products:", error);
      });

    // Fetch popular products
    axios
      .get("http://192.168.1.78:3000/popular")
      .then((response) => {
        console.log("Fetched popular products:", response.data);
        setPopularProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching popular products:", error);
      });
  }, []);

  const ProductCard = ({ product, navigation }) => {
    const [isFavorite, setIsFavorite] = useState(false);
  
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { product })} // Ensure this matches the screen name
        style={styles.card}
      >
        {/* Card content */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={isFavorite ? "#FF8181" : "#1E222B"}
          />
        </TouchableOpacity>
  
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
  
        <View style={styles.details}>
          <Text style={styles.name}>{product.productname}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  
  const renderSection = (title, data) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Newproducts")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />} // Pass navigation here
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
  

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {renderSection("New Products", newProducts)}
      {renderSection("Popular Products", popularProducts)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
    borderRadius:25,
    marginBottom:15
  },
  scrollContent: {
    paddingBottom: 20, // Add some padding at the bottom for better spacing
  },
  section: {
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "outfit",
    color: "#1E222B",
  },
  seeAll: {
    fontSize: 14,
    color: "#8891A5",
  },
  productList: {
    paddingHorizontal: 16,
  },
  card: {
    width: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginRight: 12,
    padding: 12,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#F5F6F8",
  },
  details: {
    gap: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E222B",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E222B",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  rating: {
    fontSize: 14,
    color: "#1E222B",
  },
});

export default HomeBody;
