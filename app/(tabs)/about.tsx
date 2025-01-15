import { THEME_BG_COLOR } from "@/constants";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});