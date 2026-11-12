import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import s from "../styles/Splash.styles";
export default function Splash({ go }) {
  return (
    <View style={s.wrap}>
      <Text style={{ fontSize: 60 }}>🚕</Text>
      <Text style={s.title}>MoveMate</Text>
      <Text style={s.tag}>Your ride. Your people. Your peace of mind.</Text>
      <TouchableOpacity style={s.btn} onPress={() => go("login")}>
        <Text style={s.btnText}>Get started →</Text>
      </TouchableOpacity>
    </View>
  );
}
