import { StyleSheet } from "react-native";

export const bindStyle = (styles: any, props: any) => StyleSheet.flatten({
    ...styles,
    ...props
  });
  