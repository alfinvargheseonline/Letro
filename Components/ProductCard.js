// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const ProductCard = ({ product }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <View style={styles.card}>
//       <TouchableOpacity
//         style={styles.favoriteButton}
//         onPress={() => setIsFavorite(!isFavorite)}
//       >
//         <Ionicons
//           name={isFavorite ? 'heart' : 'heart-outline'}
//           size={24}
//           color={isFavorite ? '#FF8181' : '#1E222B'}
//         />
//       </TouchableOpacity>

//       <Image 
//         source={{ uri: product.image }} 
//         style={styles.image}
//         resizeMode="contain"
//       />
      
//       <View style={styles.details}>
//         <Text style={styles.name} numberOfLines={2}>
//           {product.productname}
//         </Text>
//         <Text style={styles.price}>
//           {product.price}
//         </Text>
//         <Text style={styles.description} numberOfLines={2}>
//           {product.description}
//         </Text>
//         <View style={styles.ratingContainer}>
//           <Ionicons name="star" size={16} color="#FFD700" />
//           <Text style={styles.rating}>{product.rating}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: 200,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginRight: 12,
//     padding: 12,
//     position: 'relative',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   favoriteButton: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     zIndex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     padding: 4,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   image: {
//     width: '100%',
//     height: 160,
//     borderRadius: 8,
//     marginBottom: 12,
//     backgroundColor: '#F5F6F8',
//   },
//   details: {
//     gap: 6,
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1E222B',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1E222B',
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 12,
//     color: '#8891A5',
//     lineHeight: 16,
//     marginBottom: 4,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   rating: {
//     fontSize: 14,
//     color: '#1E222B',
//   },
// });

// export default ProductCard;