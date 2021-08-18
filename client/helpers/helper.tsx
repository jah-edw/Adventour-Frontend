import { Dimensions } from "react-native";

interface DimensionProps {
  ratio: number;
  width: number;
  height: number;
}

export const getWindow = (): DimensionProps => {
  const { width, height } = Dimensions.get("window");
  return {
    ratio: (width * height) / 1000,
    height,
    width,
  };
};
