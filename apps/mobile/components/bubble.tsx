import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";

export function CaiBubble({ ...props }: BubbleProps<IMessage>) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: "#F3F8EE",
          padding: 3,
        },
        right: {
          backgroundColor: "#EBEBEB",
          padding: 3,
        },
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
