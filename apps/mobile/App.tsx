import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function FridgeScreen() {
  return (
    <View style={styles.container}>
      <Text>Fridge Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const RootTab = createBottomTabNavigator({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "首页",
        headerTitleAlign: "left",
        headerTitle: "想做的菜\，一键买齐",
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      options: {
        title: "收藏",
        headerTitleAlign: "left",
        headerTitle: "收藏",
      },
    },
    Fridge: {
      screen: FridgeScreen,
      options: {
        title: "冰箱",
        headerTitleAlign: "left",
        headerTitle: "冰箱",
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        title: "我的",
        headerTitleAlign: "left",
        headerTitle: "我的",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootTab);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
