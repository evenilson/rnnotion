import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingRight: 16
  },
  title: {
    color: colors.gray[300],
    fontSize: 16,
    flex: 1
  },
  list: {
    backgroundColor: colors.gray[700],
    borderRadius: 8
  },
  separator: {
    flex: 1,
    height: 1,
    marginLeft: 42,
    backgroundColor: colors.gray[500]
  }

})