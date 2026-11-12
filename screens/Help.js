import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function Help({ toast }) {
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Help & support</Text>
      <View style={c.card}>
        <Text style={c.strong}>How do I book for a family member?</Text>
        <Text style={c.p}>
          Choose “Book for family” on the home screen, select a passenger, and
          complete the booking.
        </Text>
      </View>
      <TouchableOpacity
        style={[c.btn, c.btnLight]}
        onPress={() => toast("Support: support@movemate.demo")}
      >
        <Text style={[c.btnText, c.btnLightText]}>Contact support</Text>
      </TouchableOpacity>
    </View>
  );
}
