import { View } from "react-native";
import { ChatView } from "./components/chatView";

export function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ChatView />
    </View>
  );
}
