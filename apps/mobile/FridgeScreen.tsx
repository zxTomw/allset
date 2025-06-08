import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, Pressable, Text, StyleSheet } from "react-native";

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
        <Pressable
          style={{
            backgroundColor: "#BAD99B75",
            padding: 8,
            width: "100%",
            borderRadius: 15,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            制作菜谱
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#749550",
            padding: 12,
            width: "100%",
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            添加食材
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
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
