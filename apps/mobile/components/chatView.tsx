import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
});

export function ChatView() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "ai",
          avatar: "https://picsum.photos/140/140",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    client.responses
      .create({
        model: "gpt-4.1",
        input: messages[0].text,
      })
      .then((response) => {
        const aiMessage: IMessage = {
          _id: Math.random().toString(36).substring(7),
          text: response.output_text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "ai",
            avatar: "https://picsum.photos/140/140",
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [aiMessage])
        );
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        textInputProps={{ styles: styles.input }}
        messagesContainerStyle={{ backgroundColor: "#fff" }}
        user={{
          _id: 1,
        }}
        renderFooter={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
  },
});
