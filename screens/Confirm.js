import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function Confirm({ go, app, set }) {
  const family = app.bookingFor === "family";
  const confirm = () => {
    const ride = {
      id: "MM-" + Math.floor(2100 + Math.random() * 700),
      passenger: family ? app.person?.name : "Arun Kumar",
      family,
      status: "Upcoming",
      pickup: app.pickup,
      drop: app.drop,
      car: app.car.name,
      fare: app.car.price,
      date: "Today · Just now",
    };
    set({ rides: [ride, ...app.rides] });
    go("tracking");
  };
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Review booking</Text>
      <View style={c.card}>
        <Text style={c.p}>Pickup</Text>
        <Text style={c.strong}>{app.pickup}</Text>
        <Text style={[c.p, { marginTop: 10 }]}>Destination</Text>
        <Text style={c.strong}>{app.drop}</Text>
      </View>
      <View style={c.card}>
        <Text style={c.pill}>
          {family ? "♡ FAMILY BOOKING" : "SELF BOOKING"}
        </Text>
        <Text style={[c.strong, { marginTop: 8 }]}>
          {family ? app.person?.name : "Arun Kumar"}
        </Text>
        {family && <Text style={c.p}>Booked by: Arun Kumar</Text>}
      </View>
      <View style={c.card}>
        <View style={c.row}>
          <Text style={c.p}>{app.car.name} · 12.4 km · 35 min</Text>
          <Text style={c.strong}>₹{app.car.price}</Text>
        </View>
        <View style={c.row}>
          <Text style={c.strong}>Estimated total</Text>
          <Text style={c.strong}>₹{app.car.price}</Text>
        </View>
      </View>
      <TouchableOpacity style={c.btn} onPress={confirm}>
        <Text style={c.btnText}>Confirm booking</Text>
      </TouchableOpacity>
    </View>
  );
}
