import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
import s from "../styles/Home.styles";
const quick = [
  ["🏢", "Office", "Office – Tidel Park"],
  ["🚉", "Station", "Chennai Central"],
  ["🏥", "Hospital", "Apollo Hospital"],
];
export default function Home({ go, set }) {
  return (
    <View style={c.screen}>
      <Text style={c.p}>Good morning,</Text>
      <Text style={c.h1}>Arun 👋</Text>
      <View style={s.hero}>
        <Text style={s.heroTitle}>Where would you like to go?</Text>
        <Text style={s.heroText}>
          Book a safe ride for yourself or someone you care about.
        </Text>
      </View>
      <TouchableOpacity
        style={c.btn}
        onPress={() => {
          set({ bookingFor: "self", person: null });
          go("location");
        }}
      >
        <Text style={c.btnText}>＋ Book a cab for myself</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[c.btn, c.btnLight]}
        onPress={() => go("selectPassenger")}
      >
        <Text style={[c.btnText, c.btnLightText]}>♡ Book for family</Text>
      </TouchableOpacity>

      <Text style={c.h2}>Quick destinations</Text>
      <View style={s.quick}>
        {quick.map(([icon, name, dest]) => (
          <TouchableOpacity
            key={name}
            style={s.q}
            onPress={() => {
              set({ drop: dest, bookingFor: "self" });
              go("location");
            }}
          >
            <Text style={{ fontSize: 22 }}>{icon}</Text>
            <Text style={c.strong}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={c.h2}>Next ride</Text>
      <View style={c.card}>
        <Text style={c.pill}>Tomorrow · 9:00 AM</Text>
        <Text style={[c.strong, { marginTop: 10 }]}>Office commute</Text>
        <Text style={c.p}>Home → Tidel Park · Sedan</Text>
        <TouchableOpacity onPress={() => go("rideDetails")}>
          <Text style={{ color: "#3269e8", fontWeight: "800", marginTop: 8 }}>
            Details →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
