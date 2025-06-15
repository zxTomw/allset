import { StyleSheet } from "react-native";
import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";

export function CaiBubble({ ...props }: BubbleProps<IMessage>) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: [
          styles.bubble,
          {
            backgroundColor: "#F3F8EE",
          },
        ],
        right: [
          styles.bubble,
          {
            backgroundColor: "#EBEBEB",
          },
        ],
      }}
      textStyle={{
        left: {
          color: "#000",
        },
        right: {
          color: "#000",
        },
      }}
      renderTime={() => null}
      quickReplyTextStyle={{
        color: "#000",
      }}
      quickReplyStyle={{
        backgroundColor: "#FEF6D8",
        borderWidth: 0,
      }}
    />
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 3,
  },
});
