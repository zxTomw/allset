import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";

interface SelectButtonProps {
  value: string;
  isSelected: boolean;
  onChange: (isSelected: boolean) => void;
}

function SelectButton({ value, isSelected, onChange }: SelectButtonProps) {
  return (
    <Pressable
      style={{
        backgroundColor: isSelected ? "#BAD99B" : "white",
        borderRadius: 23.5,
        padding: 10,
      }}
      onPress={() => {
        onChange(!isSelected);
      }}
    >
      <Text style={{ color: "#000" }}>{value}</Text>
    </Pressable>
  );
}

interface SelectionsProps {
  selectedValues: string[] | Set<string>;
  onSelectedValuesChange: (values: string[]) => void;
  multiple?: boolean;
  selections: string[];
}

export function Selections({
  selectedValues,
  onSelectedValuesChange,
  selections,
  multiple = true,
}: SelectionsProps) {
  const selectedSet = new Set(selectedValues);
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 15,
        rowGap: 10,
        flexWrap: "wrap",
        marginVertical: 10,
      }}
    >
      {selections.map((selection) => (
        <SelectButton
          key={selection}
          value={selection}
          isSelected={selectedSet.has(selection)}
          onChange={(isSelected) => {
            if (!multiple) {
              return onSelectedValuesChange(isSelected ? [selection] : []);
            }
            if (isSelected) {
              return onSelectedValuesChange(
                Array.from(selectedSet.add(selection))
              );
            }
            selectedSet.delete(selection);
            return onSelectedValuesChange(Array.from(selectedSet));
          }}
        />
      ))}
    </View>
  );
}
