import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { CaiButton } from "./components/button";

function FridgeHomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
        }}
      ></View>
      <View style={{ width: "100%", gap: 10 }}>
        <CaiButton variant="secondary" fullWidth>
          制作菜谱
        </CaiButton>
        <CaiButton fullWidth>添加食材</CaiButton>
      </View>
    </View>
  );
}

export const FridgeStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: FridgeHomeScreen,
      options: {
        title: "我的冰箱",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
