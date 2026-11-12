import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
const methods = [
  ["🏢", "Company account"],
  ["💳", "Personal card"],
  ["💵", "Cash"],
];
export default function Payment({ toast }) {
  const [sel, setSel] = useState("Company account");
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Payment methods</Text>
      {methods.map(([icon, name]) => (
        <TouchableOpacity
          key={name}
          style={[c.card, sel === name && c.selected]}
          onPress={() => setSel(name)}
        >
          <Text style={c.strong}>
            {icon} {name}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={c.btn}
        onPress={() => toast("Payment preference saved (demo)")}
      >
        <Text style={c.btnText}>Save preference</Text>
      </TouchableOpacity>
    </View>
  );
}
