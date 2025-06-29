import { View, Text, Pressable, StyleSheet } from "react-native";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectedChange: (category: string) => void;
}

export function Sidebar({
  categories,
  selectedCategory,
  onSelectedChange,
}: SidebarProps) {
  return (
    <View style={styles.sidebar}>
      {categories.map((category) => (
        <Pressable
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.activeCategoryButton,
          ]}
          onPress={() => onSelectedChange(category)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category && styles.activeCategoryText,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 100,
    backgroundColor: "#F3F8EE",
    paddingVertical: 10,
  },
  categoryButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  activeCategoryButton: {
    backgroundColor: "#FFFFFF",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  activeCategoryText: {
    color: "#000",
    fontWeight: "600",
  },
});
