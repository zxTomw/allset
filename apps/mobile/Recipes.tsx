import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Sidebar } from "./components/sidebar";

// Sample recipe data
interface Recipe {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;
}

const sampleRecipes: Recipe[] = [
  {
    id: 1,
    name: "茄汁豆腐",
    image: "https://picsum.photos/200/150?random=1",
    isFavorite: true,
  },
  {
    id: 2,
    name: "口蘑冬瓜汤",
    image: "https://picsum.photos/200/150?random=2",
    isFavorite: false,
  },
  {
    id: 3,
    name: "口蘑豆腐汤",
    image: "https://picsum.photos/200/150?random=3",
    isFavorite: false,
  },
  {
    id: 4,
    name: "口蘑冬瓜汤",
    image: "https://picsum.photos/200/150?random=4",
    isFavorite: false,
  },
  {
    id: 5,
    name: "口蘑冬瓜汤",
    image: "https://picsum.photos/200/150?random=5",
    isFavorite: false,
  },
  {
    id: 6,
    name: "口蘑冬瓜汤",
    image: "https://picsum.photos/200/150?random=6",
    isFavorite: false,
  },
];

const categories = ["常做家常", "异国口味", "快速搞定", "特别日子"];

const mainTabs = ["全部", "做过的菜", "收藏的菜"];

function RecipesHomeScreen() {
  const [activeTab, setActiveTab] = React.useState("全部");
  const [selectedCategory, setSelectedCategory] = React.useState("常做家常");

  const renderRecipeCard = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeCard}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <View style={styles.recipeHeader}>
          <Text style={styles.recipeName}>{item.name}</Text>
        </View>
        <View style={styles.recipeActions}>
          <Pressable style={styles.favoriteButton}>
            <Text style={styles.favoriteIcon}>
              {item.isFavorite ? "★" : "☆"}
            </Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionButtonText}>再次买齐</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="搜索我的菜谱"
          placeholderTextColor="#999"
        />
      </View>

      {/* Main Tabs */}
      <View style={styles.tabsContainer}>
        {mainTabs.map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.contentContainer}>
        {/* Left Sidebar Categories */}
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectedChange={setSelectedCategory}
        />

        {/* Recipe Grid */}
        <View style={styles.recipeGrid}>
          <FlatList
            data={sampleRecipes}
            renderItem={renderRecipeCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.gridContent}
            columnWrapperStyle={styles.row}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export const RecipeStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: RecipesHomeScreen,
      options: {
        title: "我的菜谱",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchContainer: {
    padding: 15,
    backgroundColor: "#FFFFFF",
  },
  searchInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    padding: 12,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  tab: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#F3F8EE",
    borderWidth: 1,
    borderColor: "#9DC970",
    borderRadius: 23.5,
  },
  tabText: {
    fontSize: 15,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "600",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },

  recipeGrid: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  gridContent: {
    padding: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  recipeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "48%",
  },
  recipeImage: {
    height: 120,
    margin: 8,
    borderRadius: 12,
  },
  recipeInfo: {
    padding: 8,
  },
  recipeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  recipeName: {
    fontWeight: "600",
    color: "#000",
    flex: 1,
  },
  favoriteButton: {
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 20,
    color: "#FDD835",
  },
  recipeActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionButton: {
    backgroundColor: "#FDD835",
    borderRadius: 10,
    padding: 6,
  },
  actionButtonText: {
    fontSize: 12,
  },
});
