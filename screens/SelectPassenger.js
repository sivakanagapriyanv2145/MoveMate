import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function SelectPassenger({ go, app, set }) {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Who is travelling?</Text>
      <Text style={c.p}>
        You can book for a family member even if they don't use this app.
      </Text>
      <TouchableOpacity
        style={[c.card, c.selected, { marginTop: 14 }]}
        onPress={() => {
          set({ bookingFor: "self", person: null });
          go("location");
        }}
      >
        <Text style={c.strong}>👨🏻 Myself</Text>
        <Text style={c.p}>Arun · You</Text>
      </TouchableOpacity>
      <Text style={c.h2}>Family members</Text>
      {app.family.map((f, i) => (
        <TouchableOpacity
          key={i}
          style={c.card}
          onPress={() => {
            set({ bookingFor: "family", person: f });
            go("location");
          }}
        >
          <Text style={c.strong}>{f.name}</Text>
          <Text style={c.p}>{f.relation}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[c.btn, c.btnOutline]}
        onPress={() => go("addFamily")}
      >
        <Text style={[c.btnText, c.btnOutlineText]}>＋ Add family member</Text>
      </TouchableOpacity>
    </View>
  );
}
