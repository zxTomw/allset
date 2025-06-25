import { View, Text, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Selections } from "./selections";

export function StartForm() {
  return <View style={styles.bubble}></View>;
}

export function PortionSizeForm() {
  return (
    <View
      style={[
        styles.bubble,
        {
          flexDirection: "row",
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text>👥 用餐人数</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>⏰ 做菜时长</Text>
      </View>
    </View>
  );
}

const rp = {
  tastePreferences: [
    "清淡健康",
    "酱香浓郁",
    "酸甜可口",
    "微辣开胃",
    "麻辣过瘾",
    "口味随意",
  ],
  styles: ["家常菜", "想换换口味", "最近大家都在吃啥"],
};

export function RecipePreferenceForm() {
  const [tastePreference, setTastePreference] = useState<string[]>([]);
  const [recipeStyles, setRecipeStyles] = useState<string[]>([]);
  useEffect(() => {
    console.log("tastePreference", tastePreference);
  }, [tastePreference]);
  useEffect(() => {
    console.log("recipeStyles", recipeStyles);
  }, [recipeStyles]);
  return (
    <View
      style={[
        styles.bubble,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View>
        <Text>👅 口味偏好</Text>
        <Selections
          selections={rp.tastePreferences}
          selectedValues={tastePreference}
          onSelectedValuesChange={setTastePreference}
          multiple={false}
        />
      </View>
      <View>
        <Text>🧑‍🍳 菜谱风格</Text>
        <Selections
          selections={rp.styles}
          selectedValues={recipeStyles}
          onSelectedValuesChange={setRecipeStyles}
          multiple={false}
        />
      </View>
      <View
        style={{
          alignItems: "flex-end",
        }}
      >
        <Pressable
          style={{
            width: "auto",
            backgroundColor: "#F6E49B",
            borderRadius: 23.5,
            padding: 12,
          }}
        >
          <Text>我选好啦</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "#F3F8EE",
    borderRadius: 23.5,
    padding: 20,
    gap: 10,
  },
});
