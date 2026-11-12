import React from "react";
import { View, Text } from "react-native";
import c from "../styles/common";
const items = [
  [
    "Family ride booked",
    "Your booking for Raman Kumar is confirmed.",
    "Today · 10:32 AM",
  ],
  ["Driver assigned", "Vijay Kumar is on the way.", "Yesterday · 5:10 PM"],
  [
    "Trip receipt available",
    "Receipt for MM-1982 is ready.",
    "Yesterday · 4:00 PM",
  ],
];
export default function Notifications() {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Notifications</Text>
      {items.map(([t, d, time]) => (
        <View key={t} style={c.card}>
          <Text style={c.strong}>{t}</Text>
          <Text style={c.p}>{d}</Text>
          <Text style={c.p}>{time}</Text>
        </View>
      ))}
    </View>
  );
}
