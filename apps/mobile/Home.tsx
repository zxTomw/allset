import { View } from "react-native";
import { ChatView } from "./components/chatView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat } from "./components/chat";

export const HomeStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "首页",
        headerTitle: "想做的菜，一键买齐",
        headerShadowVisible: false,
        headerLargeTitle: true,
        headerLargeTitleStyle: {
          fontSize: 24,
        },
        headerBlurEffect: "light",
      },
    },
  },
});

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Chat />
    </View>
  );
}
