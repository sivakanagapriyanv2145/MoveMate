import React from "react";
import { View, Text, TouchableOpacity, Alert, Linking } from "react-native";
import c from "../styles/common";
import s from "../styles/Tracking.styles";

export default function Tracking({ go, toast }) {
  const onSOS = () => {
    Alert.alert(
      "🚨 Emergency SOS",
      "Do you want to call emergency services (112)?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Call 112",
          style: "destructive",
          onPress: () => Linking.openURL("tel:112"),
        },
      ]
    );
  };

  return (
    <View style={c.screen}>
      <Text style={c.pill}>DRIVER ASSIGNED</Text>
      <Text style={c.h1}>Your cab is on its way</Text>

      <View style={s.map}>
        <Text style={{ fontSize: 40 }}>🚕</Text>
      </View>

      <View style={c.card}>
        <Text style={c.strong}>Vijay Kumar · 4.9 ★</Text>
        <Text style={c.p}>
          Verified driver · TN 09 AB 1234 · Arrives in 6 min
        </Text>
        <View style={[c.row, { marginTop: 10 }]}>
          <TouchableOpacity
            style={[c.btn, c.btnLight, { flex: 1, marginRight: 6 }]}
            onPress={() => toast("Calling driver (demo)")}
          >
            <Text style={[c.btnText, c.btnLightText]}>☎ Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[c.btn, c.btnLight, { flex: 1 }]}
            onPress={() => toast("Messaging driver (demo)")}
          >
            <Text style={[c.btnText, c.btnLightText]}>✉ Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SOS button */}
      <TouchableOpacity style={s.sos} onPress={onSOS} activeOpacity={0.85}>
        <Text style={s.sosText}>🚨 SOS · Emergency</Text>
      </TouchableOpacity>

      <TouchableOpacity style={c.btn} onPress={() => go("complete")}>
        <Text style={c.btnText}>Simulate ride completed</Text>
      </TouchableOpacity>
    </View>
  );
}