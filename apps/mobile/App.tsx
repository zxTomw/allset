import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { HomeScreen, HomeStack } from "./Home";
import { FridgeStack } from "./Fridge";
import { PortionSizeForm, RecipePreferenceForm } from "./components/forms";
import { RecipeStack } from "./Recipes";
import { CartScreen } from "./Cart";
import { CartIcon } from "./components/icons/cart";

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
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
    tabBarStyle: {
      borderColor: "white",
    },
    tabBarActiveTintColor: "000",
    tabBarLabelPosition: "beside-icon",
    tabBarIconStyle: {
      display: "none",
    },
    tabBarLabelStyle: {
      fontSize: 16,
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "首页",
        headerTitle: "想做的菜\，一键买齐",
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 24,
          color: "#454545",
        },
      },
    },
    Favorites: {
      screen: RecipeStack,
      options: {
        title: "菜谱",
        headerShown: false,
      },
    },
    Cart: {
      screen: CartScreen,
      options: {
        tabBarIcon: CartIcon,
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarIconStyle: {
          display: "flex",
        },
      },
    },
    Fridge: {
      screen: FridgeStack,
      options: {
        title: "冰箱",
        headerShown: false,
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        title: "我的",
        headerTitle: "我的",
      },
    },
    Test: {
      screen: () => (
        <View style={{ flex: 1, padding: 20, gap: 20 }}>
          <PortionSizeForm />
          <RecipePreferenceForm />
        </View>
      ),
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
