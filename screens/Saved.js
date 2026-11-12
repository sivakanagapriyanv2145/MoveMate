import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function Saved({ toast }) {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Saved locations</Text>
      {[
        ["🏠 Home", "12, Lake View Road, Chennai"],
        ["🏢 Office", "Tidel Park, Tharamani"],
        ["🏥 Apollo Hospital", "Greams Road, Chennai"],
      ].map(([t, d]) => (
        <View key={t} style={c.card}>
          <Text style={c.strong}>{t}</Text>
          <Text style={c.p}>{d}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={[c.btn, c.btnOutline]}
        onPress={() => toast("Add location (demo)")}
      >
        <Text style={[c.btnText, c.btnOutlineText]}>＋ Add a location</Text>
      </TouchableOpacity>
    </View>
  );
}
