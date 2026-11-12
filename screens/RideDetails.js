import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function RideDetails({ go, app }) {
  const r = app.viewRide || app.rides[0];
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Ride details</Text>
      <Text style={c.p}>Booking reference {r.id}</Text>
      <View style={[c.card, { marginTop: 14 }]}>
        <Text style={c.pill}>{r.family ? "♡ FAMILY BOOKING" : r.status}</Text>
        <Text style={[c.h2, { marginTop: 10 }]}>{r.passenger}</Text>
        <Text style={c.p}>From: {r.pickup}</Text>
        <Text style={c.p}>To: {r.drop}</Text>
        <Text style={c.p}>
          Vehicle: {r.car} · Fare: ₹{r.fare}
        </Text>
      </View>
      <TouchableOpacity
        style={[c.btn, c.btnLight]}
        onPress={() => go("tracking")}
      >
        <Text style={[c.btnText, c.btnLightText]}>View ride status</Text>
      </TouchableOpacity>
    </View>
  );
}
