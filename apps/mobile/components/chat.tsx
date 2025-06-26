import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PortionSizeForm, RecipePreferenceForm, StartingForm } from "./forms";
import { SendIcon } from "./icons/send";
import { SendBig } from "./icons/sendBig";

interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  contentType:
    | "text"
    | "startingForm"
    | "portionSizeForm"
    | "recipePreferenceForm";
  content?: string;
}

export interface ChatProps {}

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    contentType: "startingForm",
  },
  {
    id: "2",
    role: "user",
    contentType: "text",
    content: "不知道吃什么，帮我推荐！",
  },
  {
    id: "3",
    role: "assistant",
    contentType: "portionSizeForm",
  },
  {
    id: "4",
    role: "assistant",
    contentType: "recipePreferenceForm",
  },
];

const startingQuickReplies = [
  "👉 不知道吃什么，帮我推荐！",
  "🧊 我冰箱里还有些食材...",
  "🛒 照着菜谱去买菜",
];

export function ChatMessageItem({ message }: { message: ChatMessage }) {
  const style =
    message.role === "user" ? styles.rightBubble : styles.leftBubble;
  if (message.contentType === "startingForm") {
    return (
      <View style={style}>
        <StartingForm
          quickReplies={startingQuickReplies}
          onQuickReply={(reply) => {
            console.log("Quick reply selected:", reply);
          }}
        />
      </View>
    );
  }
  if (message.contentType === "portionSizeForm") {
    return (
      <View style={style}>
        <PortionSizeForm />
      </View>
    );
  }
  if (message.contentType === "recipePreferenceForm") {
    return (
      <View style={style}>
        <RecipePreferenceForm />
      </View>
    );
  }
  return (
    <View style={style}>
      <Text>{message.content}</Text>
    </View>
  );
}

export function Chat() {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <FlashList
        data={sampleMessages.slice().reverse()}
        contentContainerStyle={styles.chatContainer}
        renderItem={({ item }) => <ChatMessageItem message={item} />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={80}
        showsVerticalScrollIndicator={false}
        inverted
        style={{ paddingTop: insets.top }}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            placeholder="输入消息..."
            placeholderTextColor="#999"
          />
          <Pressable
            style={styles.sendButton}
            onPress={() => {
              console.log("Send button pressed");
              // Add send functionality here
            }}
          >
            <SendBig />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  leftBubble: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#F3F8EE",
    padding: 10,
    fontSize: 14,
    borderRadius: 23.5,
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  rightBubble: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#EBEBEB",
    padding: 10,
    fontSize: 14,
    borderRadius: 23.5,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  chatContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopLeftRadius: 23.5,
    borderTopRightRadius: 23.5,
    borderColor: "#E0E0E0",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android shadow
    elevation: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#F7F7F7",
    fontSize: 16,
    minHeight: 44,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
