import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function Family({ go, app, set }) {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Family members</Text>
      <Text style={c.p}>Manage the people you may need to book rides for.</Text>
      <View style={{ marginTop: 14 }}>
        {app.family.map((f, i) => (
          <View key={i} style={[c.card, c.row]}>
            <View>
              <Text style={c.strong}>{f.name}</Text>
              <Text style={c.p}>{f.relation}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                set({ bookingFor: "family", person: f });
                go("location");
              }}
            >
              <Text style={{ color: "#3269e8", fontWeight: "800" }}>Book</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={c.btn} onPress={() => go("addFamily")}>
        <Text style={c.btnText}>＋ Add family member</Text>
      </TouchableOpacity>
    </View>
  );
}
