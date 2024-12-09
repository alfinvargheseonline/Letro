import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Newproducts from "./Newproducts";
import HomeBody from "./HomeBody";
import ProductsDetails from "./ProductsDetails";

// Screens


function CenterButton() {
  return (
    <View style={styles.centerButtonContainer}>
      <Ionicons name="add" size={20} color="white" />
    </View>
  );
}

// Main App
export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {activeTab === 'Home' && <HomeBody />}
        {activeTab === 'Notifications' && <HomeBody />}
        {activeTab === 'Heart' && <Newproducts />}
        {activeTab === 'Profile' && <Newproducts />}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Home' && styles.activeTab]}
          onPress={() => handleTabPress('Home')}
        >
          <Ionicons name="home" size={24} color={activeTab === 'Home' ? 'black' : 'gray'} />
          <Text style={[styles.tabLabel, activeTab === 'Home' && styles.activeTabLabel]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Notifications' && styles.activeTab]}
          onPress={() => handleTabPress('Notifications')}
        >
          <MaterialIcons
            name="notifications"
            size={24}
            color={activeTab === 'Notifications' ? 'black' : 'gray'}
          />
          <Text
            style={[styles.tabLabel, activeTab === 'Notifications' && styles.activeTabLabel]}
          >
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerButtonContainer}
          onPress={() => console.log('Center button pressed!')}
        >
          
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Heart' && styles.activeTab]}
          onPress={() => handleTabPress('Heart')}
        >
          <Ionicons name="heart" size={24} color={activeTab === 'Heart' ? 'black' : 'gray'} />
          <Text style={[styles.tabLabel, activeTab === 'Heart' && styles.activeTabLabel]}>
            Heart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Profile' && styles.activeTab]}
          onPress={() => handleTabPress('Profile')}
        >
          <Ionicons
            name="person"
            size={24}
            color={activeTab === 'Profile' ? 'black' : 'gray'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Profile' && styles.activeTabLabel]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#f2f2f2',
  },
  tabLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  activeTabLabel: {
    color: 'black',
  },
  centerButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -30 }],
    width: 60,
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius: 50,
  },
});