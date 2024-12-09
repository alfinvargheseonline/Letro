import React from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params; // Access the product data passed via navigation

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      
      {/* Top Navigation */}
      <View style={styles.Topcontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.Toptext}>LETRO</Text>
        <View style={styles.topRightIcons}>
          <Icon
            name="search"
            size={30}
            color="#FFFFFF"
            style={styles.icon}
          />
          <Icon 
            name="shopping-cart" 
            size={30} 
            color="#FFFFFF" 
            style={styles.icon}
          />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: product.image }} 
            style={styles.productImage} 
            resizeMode="contain"
          />
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{product.productname}</Text>
          
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ {product.rating}</Text>
            <Text style={styles.reviewsText}> | 137 Reviews</Text>
          </View>
          
          <Text style={styles.priceText}>{product.price}</Text>

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>Connection Type: Wireless</Text>
          <Text style={styles.descriptionText}>Bluetooth Connection: Yes</Text>
          <Text style={styles.descriptionText}>Water Resistance: No</Text>
          <Text style={styles.descriptionText}>
            NFC (Near Field Communication): Yes
          </Text>

          {/* Detailed Description */}
          <Text style={styles.sectionTitle}>Product Details</Text>
          <Text style={styles.descriptionText}>
            {product.description}
          </Text>

          {/* Add to Basket Button */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD TO BASKET</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252837",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    backgroundColor: "#f7f7f7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  Topcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 25,
    paddingTop: 50,
  },
  topRightIcons: {
    flexDirection: 'row',
    alignItems: "center",
  },
  Toptext: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    flex: 1, // Take up available space
    textAlign: "center", // Center the text within its space
  },
  icon: {
    marginLeft: 15,
  },

  imageContainer: {
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    paddingVertical: 20,
  },
  productImage: {
    width: 250,
    height: 250,
    borderRadius: 8,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    marginTop: -20,
    paddingTop: 30,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingText: {
    color: "#f5a623",
    fontWeight: "bold",
  },
  reviewsText: {
    color: "#555",
  },
  priceText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    marginTop: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  addButton: {
    backgroundColor: "#34c759",
    paddingVertical: 20,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 16,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetails;