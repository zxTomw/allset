import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Menu } from "lucide-react-native";

interface Ingredient {
  id: number;
  name: string;
  price: string;
  image: string;
  inFridge?: boolean;
  hasPurchased?: boolean;
}

const mainIngredients: Ingredient[] = [
  {
    id: 1,
    name: "内脂豆腐 350g/盒",
    price: "¥1.99",
    image: "https://picsum.photos/80/80?random=10",
    hasPurchased: true,
  },
  {
    id: 2,
    name: "粉红西红柿（单果75g起）",
    price: "",
    image: "https://picsum.photos/80/80?random=11",
    inFridge: true,
  },
];

const seasonings: Ingredient[] = [
  {
    id: 3,
    name: "中盐派精致食盐",
    price: "",
    image: "https://picsum.photos/80/80?random=12",
    inFridge: true,
  },
  {
    id: 4,
    name: "古匠马铃薯淀粉 500g/袋",
    price: "¥4.89",
    image: "https://picsum.photos/80/80?random=13",
    hasPurchased: true,
  },
  {
    id: 5,
    name: "海天生抽酱油 500mL/瓶",
    price: "",
    image: "https://picsum.photos/80/80?random=14",
    inFridge: true,
  },
  {
    id: 6,
    name: "葱白段 50g",
    price: "¥0.89",
    image: "https://picsum.photos/80/80?random=15",
  },
];

const addedRecipes = ["茄汁豆腐", "口蘑冬瓜汤", "凉拌手撕鸡"];

function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  return (
    <View style={styles.ingredientCard}>
      <Image
        source={{ uri: ingredient.image }}
        style={styles.ingredientImage}
      />
      <View style={styles.ingredientInfo}>
        <Text style={styles.ingredientName}>{ingredient.name}</Text>

        {ingredient.inFridge && (
          <Text style={styles.fridgeStatus}>冰箱有啦</Text>
        )}
      </View>
      <View style={styles.ingredientFooter}>
        {ingredient.price && (
          <Text style={styles.ingredientPrice}>{ingredient.price}</Text>
        )}
        {ingredient.hasPurchased && (
          <Image
            style={styles.checkmark}
            source={require("./assets/checkmark.png")}
          />
        )}
      </View>
    </View>
  );
}

export function CartHomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Recipe Header */}
        <View style={styles.recipeHeader}>
          <View style={styles.recipeNavigation}>
            <Pressable style={styles.menuButton}>
              <Menu />
            </Pressable>
            <View style={styles.navigationItems}>
              {addedRecipes.map((recipe) => (
                <Text key={recipe} style={styles.navItemActive}>
                  {recipe}
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.recipeDetails}>
            <Image
              source={{ uri: "https://picsum.photos/80/80?random=20" }}
              style={styles.recipeImage}
            />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>茄汁豆腐</Text>
              <View style={styles.recipeMetadata}>
                <View style={styles.metadataItem}>
                  <Text style={styles.metadataIcon}>👨‍🍳</Text>
                  <Text style={styles.metadataText}>难度：新手小白</Text>
                </View>
                <View style={styles.metadataItem}>
                  <Text style={styles.metadataIcon}>⏰</Text>
                  <Text style={styles.metadataText}>时长：10-30分钟</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Main Ingredients */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>主料</Text>
            </View>
          </View>
          <ScrollView horizontal>
            {mainIngredients.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))}
          </ScrollView>
        </View>

        {/* Seasonings */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View
              style={[
                styles.sectionTitleContainer,
                styles.secondaryTitleContainer,
              ]}
            >
              <Text style={styles.sectionTitle}>辅料</Text>
            </View>
          </View>
          <ScrollView horizontal>
            {seasonings.map((ingredient) => (
              <IngredientCard key={ingredient.id} ingredient={ingredient} />
            ))}
          </ScrollView>
        </View>

        {/* Purchase Button */}
        <View style={styles.purchaseContainer}>
          <Pressable style={styles.purchaseButton}>
            <Text style={styles.purchaseButtonText}>一键买齐</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const CartStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: CartHomeScreen,
      options: {
        title: "菜篮子",
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
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Recipe Header Styles
  recipeHeader: {
    marginTop: 20,
    marginBottom: 24,
  },
  recipeNavigation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  menuButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuIcon: {
    fontSize: 20,
    color: "#333",
  },
  navigationItems: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  navItem: {
    fontSize: 14,
    color: "#999",
    marginRight: 8,
  },
  navItemActive: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginRight: 8,
  },
  recipeDetails: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  recipeInfo: {
    flex: 1,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  recipeMetadata: {
    gap: 8,
  },
  metadataItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metadataIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  metadataText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },

  ingredientFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "space-between",
    width: "100%",
  },

  // Section Styles
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitleContainer: {
    backgroundColor: "#F3F8EE",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#9DC970",
  },
  secondaryTitleContainer: {
    backgroundColor: "#FEF6D8",
    borderColor: "#FCC917",
  },
  sectionTitle: {
    fontSize: 14,
  },

  // Ingredient Card Styles
  ingredientCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    width: 140,
  },
  ingredientImage: {
    width: 89,
    height: 64,
    borderRadius: 5,
    marginRight: 16,
    backgroundColor: "#f8f9fa",
  },
  ingredientInfo: {
    flex: 1,
  },
  ingredientName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    lineHeight: 20,
  },
  ingredientPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff6b35",
    marginBottom: 6,
  },
  fridgeStatus: {
    fontSize: 12,
    color: "#4caf50",
    fontWeight: "600",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  checkmark: {
    width: 20,
    height: 20,
  },

  // Purchase Button Styles
  purchaseContainer: {
    paddingBottom: 12,
    paddingHorizontal: 4,
  },
  purchaseButton: {
    position: "static",
    backgroundColor: "#ffd54f",
    borderRadius: 28,
    padding: 12,
    flexDirection: "row",
    width: "auto",
    alignSelf: "flex-end",
    shadowColor: "#ffd54f",
    borderWidth: 1,
    borderColor: "#ffcc02",
    justifyContent: "center",
    alignItems: "center",
  },
  purchaseButtonText: {
    marginRight: 12,
    letterSpacing: 0.5,
  },
  purchaseIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  purchaseArrow: {
    fontSize: 18,
  },
});
