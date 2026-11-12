import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import c from "../styles/common";
import s from "../styles/Location.styles";
export default function Location({ go, app, set }) {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Set your journey</Text>
      <Text style={c.p}>
        Booking for{" "}
        {app.bookingFor === "self" ? "Arun Kumar" : app.person?.name}.
      </Text>
      <View style={s.map}>
        <Text style={{ fontSize: 30 }}>📍</Text>
      </View>
      <Text style={c.label}>PICKUP LOCATION</Text>
      <TextInput
        style={c.input}
        value={app.pickup}
        onChangeText={(t) => set({ pickup: t })}
      />
      <Text style={c.label}>DROP LOCATION</Text>
      <TextInput
        style={c.input}
        value={app.drop}
        onChangeText={(t) => set({ drop: t })}
      />
      <TouchableOpacity style={c.btn} onPress={() => go("selectCab")}>
        <Text style={c.btnText}>Continue to choose cab</Text>
      </TouchableOpacity>
    </View>
  );
}
