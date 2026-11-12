import { StyleSheet } from "react-native";
export default StyleSheet.create({
  hero: {
    backgroundColor: "#1f4270",
    borderRadius: 20,
    padding: 20,
    marginVertical: 14,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    marginVertical: 6,
  },
  heroText: { color: "#d6e1f1", fontSize: 13 },
  quick: { flexDirection: "row", gap: 9 },
  q: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e8edf3",
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
  },
});
