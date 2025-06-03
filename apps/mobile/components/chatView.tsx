import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.EXPO_PUBLIC_DEEPSEEK_API_KEY,
  baseURL: "https://api.deepseek.com",
  dangerouslyAllowBrowser: true, // This is needed for Expo web
});

export function ChatView() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "嗨！欢迎来到 菜齐了 ，我是你的厨房搭子“小齐”！",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "system",
          avatar: "https://picsum.photos/140/140",
        },
      },
      {
        _id: 2,
        text: "今天想吃点啥\？我来帮你配菜谱、查冰箱、顺便一键买齐食材～",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "system",
          avatar: "https://picsum.photos/140/140",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((sentMessages: IMessage[] = []) => {
    setMessages((previousMessages) => {
      const newMsgs = GiftedChat.append(previousMessages, sentMessages);
      const filteredMsgs = newMsgs.filter(
        (msg) => msg.user.name !== "untracked"
      );

      setIsLoading(true);
      console.log("Sending message:", newMsgs);
      client.chat.completions
        .create({
          model: "deepseek-chat",
          messages: filteredMsgs.reverse().map((msg) => ({
            role: msg.user.name === "system" ? "system" : "user",
            content: msg.text,
          })),
        })
        .then((response) => {
          setIsLoading(false);
          const aiMessage: IMessage = {
            _id: Math.random().toString(36).substring(7),
            text: response.choices[0].message.content ?? "failed to load",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "system",
              avatar: "https://picsum.photos/140/140",
            },
          };
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [aiMessage])
          );
        })
        .catch((error) => {
          console.error("Error from LLM:", error);
          setIsLoading(false);
          const aiMessage: IMessage = {
            _id: Math.random().toString(36).substring(7),
            text: "遇到了错误\，重新问吧",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "system",
              avatar: "https://picsum.photos/140/140",
            },
          };
          setMessages((previousMessages) => {
            const prevMsgs = previousMessages;
            prevMsgs[0].user.name = "untracked";
            console.log("untracked message:", prevMsgs[0]);
            return GiftedChat.append(prevMsgs, [aiMessage]);
          });
        });
      return newMsgs;
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        disableComposer={isLoading}
        onSend={onSend}
        textInputProps={{ styles: styles.input }}
        messagesContainerStyle={{ backgroundColor: "#fff" }}
        user={{
          _id: 1,
        }}
        renderFooter={() => isLoading && <Text>正在思考中...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
  },
});
