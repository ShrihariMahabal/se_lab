import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Community = () => {
  const discussions = [
    {
      id: 1,
      author: 'Sarah Miller',
      avatar: 'https://picsum.photos/100',
      title: 'Best travel destinations in 2024',
      content: 'Looking for recommendations on must-visit places this year...',
      likes: 24,
      comments: 8,
      time: '2h ago',
      tags: ['Travel', 'Discussion']
    },
    {
      id: 2,
      author: 'John Doe',
      avatar: 'https://picsum.photos/101',
      title: 'Hidden gems in Southeast Asia',
      content: 'Recently discovered some amazing spots that are not tourist-heavy...',
      likes: 45,
      comments: 12,
      time: '4h ago',
      tags: ['Tips', 'Asia']
    },
    {
      id: 3,
      author: 'Emma Wilson',
      avatar: 'https://picsum.photos/102',
      title: 'Solo traveling safety tips',
      content: 'Sharing my experience and essential safety tips for solo travelers...',
      likes: 56,
      comments: 15,
      time: '6h ago',
      tags: ['Safety', 'Solo Travel']
    }
  ]

  return (
    <SafeAreaView className="flex-1 bg-background pt-4">
      <View className="px-4 py-4 flex-row items-center justify-between mb-2">
        <Text className="text-2xl font-bold text-primary">Community</Text>
        <TouchableOpacity className="bg-primary/20 p-2 rounded-full">
          <Ionicons name="create-outline" size={24} color="#00ffcc" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="px-4 mb-6"
        >
          {['All', 'Popular', 'Travel Tips', 'Questions', 'Meetups'].map((topic, index) => (
            <TouchableOpacity 
              key={index}
              className={`mr-3 px-4 py-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-card'}`}
            >
              <Text className={index === 0 ? 'text-background' : 'text-primary'}>
                {topic}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="px-4">
          {discussions.map((discussion) => (
            <TouchableOpacity 
              key={discussion.id}
              className="bg-card rounded-xl mb-4 p-4 shadow-lg border border-border/10"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <View className="flex-row items-center mb-3">
                <Image 
                  source={{ uri: discussion.avatar }}
                  className="w-10 h-10 rounded-full"
                />
                <View className="ml-3 flex-1">
                  <Text className="text-primary font-medium">{discussion.author}</Text>
                  <Text className="text-secondary text-sm">{discussion.time}</Text>
                </View>
              </View>

              <Text className="text-primary font-semibold text-lg mb-2">
                {discussion.title}
              </Text>
              <Text className="text-secondary mb-3">{discussion.content}</Text>

              <View className="flex-row mb-3">
                {discussion.tags.map((tag, index) => (
                  <View key={index} className="bg-primary/10 rounded-full px-3 py-1 mr-2">
                    <Text className="text-primary text-sm">{tag}</Text>
                  </View>
                ))}
              </View>

              <View className="flex-row items-center justify-between pt-3 border-t border-border">
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="heart-outline" size={20} color="#00ffcc" />
                  <Text className="text-primary ml-2">{discussion.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="chatbubble-outline" size={20} color="#00ffcc" />
                  <Text className="text-primary ml-2">{discussion.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                  <Ionicons name="share-outline" size={20} color="#00ffcc" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Community