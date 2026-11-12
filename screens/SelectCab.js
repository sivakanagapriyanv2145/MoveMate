import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
const cars = [
  ["🚕", "Mini", 220, "3 seats"],
  ["🚘", "Sedan", 350, "4 seats"],
  ["🚙", "SUV", 520, "6 seats"],
];
export default function SelectCab({ go, app, set }) {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Choose your ride</Text>
      {cars.map(([icon, name, price, seats]) => (
        <TouchableOpacity
          key={name}
          style={[c.card, c.row, app.car.name === name && c.selected]}
          onPress={() => set({ car: { name, price } })}
        >
          <Text style={{ fontSize: 30 }}>{icon}</Text>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={c.strong}>{name}</Text>
            <Text style={c.p}>{seats}</Text>
          </View>
          <Text style={c.strong}>₹{price}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={c.btn} onPress={() => go("confirm")}>
        <Text style={c.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
