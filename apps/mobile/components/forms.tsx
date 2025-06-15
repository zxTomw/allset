import { View, Text, Pressable } from "react-native";
import { Bubble } from "react-native-gifted-chat";
import { CaiBubble } from "./bubble";
import { useEffect, useState } from "react";
import { Selections } from "./selections";

export function PortionSizeForm() {
  return (
    <View
      style={{
        backgroundColor: "#F3F8EE",
        flexDirection: "row",
        borderRadius: 23.5,
        padding: 20,
        gap: 10,
      }}
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
      style={{
        backgroundColor: "#F3F8EE",
        flexDirection: "column",
        borderRadius: 23.5,
        gap: 10,
        padding: 20,
      }}
    >
      <View>
        <Text>👅 口味偏好</Text>
        <View
          style={{
            flexDirection: "row",
            rowGap: 10,
            columnGap: 30,
            flexWrap: "wrap",
            marginVertical: 10,
          }}
        >
          {rp.tastePreferences.map((preference) => (
            <Pressable
              key={preference}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text style={{ color: "#000" }}>{preference}</Text>
            </Pressable>
          ))}
        </View>
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
    </View>
  );
}
