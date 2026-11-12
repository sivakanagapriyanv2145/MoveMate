import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import c from "../styles/common";
import s from "../styles/Login.styles";
export default function Login({ go }) {
  const [phone, setPhone] = useState("+91 ");
  return (
    <View style={c.screen}>
      <View style={s.logo}>
        <Text style={{ fontSize: 50 }}>🚕</Text>
        <Text style={c.h1}>movemate</Text>
      </View>
      <Text style={c.h1}>Sign in to continue</Text>
      <Text style={c.p}>Enter your mobile number to access your rides.</Text>
      <Text style={c.label}>Mobile number</Text>
      <TextInput
        style={c.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={c.btn} onPress={() => go("otp")}>
        <Text style={c.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
