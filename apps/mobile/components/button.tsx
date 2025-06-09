import { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";

export interface ButtonProps {
  onPress?: () => void;
  children?: string;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
}

export function Button({
  onPress,
  children,
  variant = "primary",
  fullWidth = false,
  style,
}: ButtonProps) {
  const buttonStyle: StyleProp<ViewStyle> = [
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
    fullWidth && styles.fullWidth,
    style,
  ];
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text
        style={[
          styles.text,
          variant === "primary" ? { color: "#fff" } : { color: "#000" },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  buttonPrimary: {
    backgroundColor: "#749550",
    padding: 12,
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#BAD99B75",
    padding: 8,
    borderRadius: 15,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
});
