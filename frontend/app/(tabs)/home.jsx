import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Premium Headphones', price: '$299', image: 'https://picsum.photos/200' },
    { id: 2, name: 'Smart Watch', price: '$199', image: 'https://picsum.photos/201' },
    { id: 3, name: 'Wireless Earbuds', price: '$159', image: 'https://picsum.photos/202' },
  ]

  const categories = [
    'Electronics', 'Fashion', 'Home', 'Beauty'
  ]

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="px-4 py-3">
          <TouchableOpacity className="bg-card rounded-full px-4 py-3 flex-row items-center">
            <Text className="text-secondary flex-1">Search products...</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Banner */}
        <View className="px-4 mb-6">
          <View className="bg-primary rounded-2xl p-6 overflow-hidden">
            <View className="w-2/3">
              <Text className="text-white text-xs mb-2">Special Offer</Text>
              <Text className="text-white text-xl font-semibold mb-2">
                Get 20% off on your first purchase
              </Text>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2 self-start">
                <Text className="text-primary font-medium">Shop Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Categories */}
        <View className="mb-6">
          <View className="px-4 flex-row justify-between items-center mb-4">
            <Text className="text-primary text-lg font-semibold">Categories</Text>
            <TouchableOpacity>
              <Text className="text-secondary">See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                className="mr-3 bg-card rounded-full px-4 py-2"
              >
                <Text className="text-primary">{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View className="px-4 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-primary text-lg font-semibold">Featured Products</Text>
            <TouchableOpacity>
              <Text className="text-secondary">See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                className="mr-4 bg-card rounded-2xl overflow-hidden w-40"
              >
                <Image
                  source={{ uri: product.image }}
                  className="w-full h-40"
                  resizeMode="cover"
                />
                <View className="p-3">
                  <Text className="text-primary font-medium mb-1">{product.name}</Text>
                  <Text className="text-accent font-semibold">{product.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* New Arrivals */}
        <View className="px-4 mb-6">
          <Text className="text-primary text-lg font-semibold mb-4">New Arrivals</Text>
          {featuredProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              className="flex-row bg-card rounded-xl mb-3 overflow-hidden"
            >
              <Image
                source={{ uri: product.image }}
                className="w-24 h-24"
                resizeMode="cover"
              />
              <View className="flex-1 p-3 justify-center">
                <Text className="text-primary font-medium mb-1">{product.name}</Text>
                <Text className="text-accent font-semibold">{product.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home