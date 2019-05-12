import { PixelRatio } from "react-native";

export function fit(size: number) {
    return PixelRatio.get() * size;
}