import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs.Screen
  name="profile"
  options={{
    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
  }}
/>
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
      }} >
      <Tabs.Screen name="search" options={{
        title: 'Search',
        headerShown: true,
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
      }} />
      <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: true,
        tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />
      }} />
        <Tabs.Screen name="inbox" options={{
        title: 'Inbox',
        headerShown: true,
        tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
      }} />
        <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: true,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
      }} />
    </Tabs>
  )
}

export default HomeRootLayout;