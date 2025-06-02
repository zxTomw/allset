import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";

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
  screenOptions: {
    tabBarLabelPosition: "beside-icon",
    tabBarIconStyle: {
      display: "none",
    },
    tabBarLabelStyle: {
      fontSize: 16,
    },
    headerTitleAlign: "left",
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "首页",
        headerTitle: "想做的菜\，一键买齐",
        headerShadowVisible: false,
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      options: {
        title: "收藏",
        headerTitle: "收藏",
      },
    },
    Fridge: {
      screen: FridgeScreen,
      options: {
        title: "冰箱",
        headerTitle: "冰箱",
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        title: "我的",
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
