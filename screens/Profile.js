import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function Profile({ go, reset }) {
  const menu = [
    ["♡ Family members", "family"],
    ["⌖ Saved locations", "saved"],
    ["▣ Payment methods", "payment"],
    ["ⓘ Help & support", "help"],
  ];
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Arun Kumar</Text>
      <Text style={c.p}>arun@example.com · EMP102</Text>
      <View style={[c.card, { marginTop: 14 }]}>
        <View style={c.row}>
          <Text style={c.p}>Mobile</Text>
          <Text style={c.strong}>+91 98765 43210</Text>
        </View>
        <View style={c.row}>
          <Text style={c.p}>Department</Text>
          <Text style={c.strong}>Technology</Text>
        </View>
      </View>
      {menu.map(([label, to]) => (
        <TouchableOpacity key={to} style={c.card} onPress={() => go(to)}>
          <Text style={c.strong}>{label} ›</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[c.btn, c.btnOutline]}
        onPress={() => reset("login")}
      >
        <Text style={[c.btnText, c.btnOutlineText]}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
