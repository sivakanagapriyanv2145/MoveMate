import { StyleSheet } from "react-native";
export default StyleSheet.create({
  tabs: { flexDirection: "row", gap: 8, marginVertical: 14 },
  t: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e8edf3",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  tOn: { borderColor: "#3269e8", backgroundColor: "#f7f9ff" },
});
