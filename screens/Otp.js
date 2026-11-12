import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import c from "../styles/common";
import s from "../styles/Otp.styles";
export default function Otp({ reset, toast }) {
  const [otp, setOtp] = useState("1234");
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Verify your number</Text>
      <Text style={c.p}>
        We've sent a demo verification code to your mobile.
      </Text>
      <Text style={c.label}>Enter 4-digit OTP</Text>
      <TextInput
        style={[c.input, s.otp]}
        value={otp}
        onChangeText={setOtp}
        maxLength={4}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={c.btn} onPress={() => reset("home")}>
        <Text style={c.btnText}>Verify & continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[c.btn, c.btnLight]}
        onPress={() => toast("Demo OTP: 1234")}
      >
        <Text style={[c.btnText, c.btnLightText]}>Resend code</Text>
      </TouchableOpacity>
    </View>
  );
}
