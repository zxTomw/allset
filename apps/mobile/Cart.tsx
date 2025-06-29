import { View, Text } from "react-native";

export function CartScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#F3F8EE",
          borderRadius: 10,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>购物车</Text>
      </View>
      <View style={{ width: "100%", padding: 20 }}>
        <Text>当前没有商品</Text>
      </View>
    </View>
  );
}
