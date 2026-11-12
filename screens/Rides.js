import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
import s from "../styles/Rides.styles";
export default function Rides({ go, app, set }) {
  const [filter, setFilter] = useState("all");
  const list = app.rides.filter(
    (r) => filter === "all" || r.status.toLowerCase() === filter,
  );
  return (
    <View style={c.screen}>
      <Text style={c.h1}>My rides</Text>
      <View style={s.tabs}>
        {["all", "upcoming", "completed"].map((f) => (
          <TouchableOpacity
            key={f}
            style={[s.t, filter === f && s.tOn]}
            onPress={() => setFilter(f)}
          >
            <Text style={c.strong}>{f.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {list.length === 0 && <Text style={c.p}>No rides found.</Text>}
      {list.map((r) => (
        <View key={r.id} style={c.card}>
          <View style={c.row}>
            <Text style={c.pill}>{r.status}</Text>
            <Text style={c.p}>{r.id}</Text>
          </View>
          {r.family && (
            <Text style={[c.pill, { marginTop: 8 }]}>♡ FAMILY BOOKING</Text>
          )}
          <Text style={[c.strong, { marginTop: 8 }]}>{r.passenger}</Text>
          <Text style={c.p}>
            {r.pickup} → {r.drop}
          </Text>
          <View style={c.row}>
            <Text style={c.p}>
              {r.date} · {r.car}
            </Text>
            <Text style={c.strong}>₹{r.fare}</Text>
          </View>
          <TouchableOpacity
            style={[c.btn, c.btnLight]}
            onPress={() => {
              set({ viewRide: r });
              go("rideDetails");
            }}
          >
            <Text style={[c.btnText, c.btnLightText]}>View details</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
