import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Button,
  Dimensions,
} from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function App() {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [numColumns, setNumColumns] = useState(1); // Default to single column
  const [filterModalVisible, setFilterModalVisible] = useState(false); // State for filter modal
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [filter, setFilter] = useState("all"); // State for selected filter
  const [cart, setCart] = useState([]); // State to manage cart items

  // Fetch product data from API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
      const result = await response.json();
      // Map the API data to match the expected format
      const formattedData = result.map((item) => ({
        id: item.id.toString(),
        productname: item.title,
        price: item.price.toFixed(2),
        image: item.image,
        category: item.category, // Use category for filtering
      }));
      setData(formattedData);
      setFilteredData(formattedData); // Initialize filtered data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Call the API when the component mounts
  }, []);

  // Apply filter to the data
  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === selectedFilter));
    }
    setFilterModalVisible(false); // Close modal after applying filter
  };

  // Add to cart function
  const addToCart = (item) => {
    setCart(prevCart => {
      // Check if item is already in cart
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If item doesn't exist, add it with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Render add to cart action
  const renderRightActions = (item) => {
    return (
      <TouchableOpacity 
        style={styles.addToCartButton} 
        onPress={() => addToCart(item)}
      >
        <Ionicons name="cart-outline" size={24} color="white" />
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item)}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.productname}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={styles.heartIcon}>
          <AntDesign name="hearto" size={20} color="#f00" />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      {/* Header Buttons */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setNumColumns((prev) => (prev === 1 ? 2 : 1))} // Toggle numColumns
        >
          <AntDesign name="appstore-o" size={20} color="#000" />
          <Text style={styles.headerText}>
            {numColumns === 1 ? "Grid View" : "List View"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setFilterModalVisible(true)} // Open filter modal
        >
          <MaterialIcons name="filter-list" size={20} color="#000" />
          <Text style={styles.headerText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <Modal
        visible={filterModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Filter</Text>
            <Button title="All" onPress={() => applyFilter("all")} />
            <Button
              title="Electronics"
              onPress={() => applyFilter("electronics")}
            />
            <Button title="Jewelery" onPress={() => applyFilter("jewelery")} />
            <Button title="Men's Clothing" onPress={() => applyFilter("men's clothing")} />
            <Button
              title="Women's Clothing"
              onPress={() => applyFilter("women's clothing")}
            />
            <Button
              title="Close"
              onPress={() => setFilterModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>

      {/* Cart Summary */}
      <View style={styles.cartSummary}>
        <Text style={styles.cartSummaryText}>
          Cart: {cart.reduce((total, item) => total + item.quantity, 0)} items
        </Text>
      </View>

      {/* Loader while data is fetching */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        // Product List
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          key={numColumns} // Dynamically change key to force re-render
          columnWrapperStyle={numColumns > 1 ? styles.row : null} // Apply row styling for multiple columns
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flex: 1,
    margin: 8,
    padding: 16,
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
    flexDirection: "row",
  },
  addToCartText: {
    color: "white",
    marginLeft: 5,
  },
  cartSummary: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cartSummaryText: {
    fontSize: 16,
    fontWeight: "600",
  },
});