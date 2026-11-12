import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import c from "../styles/common";
import s from "../styles/Complete.styles";
export default function Complete({ reset, app, toast }) {
  const [rating, setRating] = useState(0);
  return (
    <View style={c.screen}>
      <Text style={{ fontSize: 50, textAlign: "center" }}>🎉</Text>
      <Text style={[c.h1, { textAlign: "center" }]}>You've arrived!</Text>
      <View style={c.card}>
        <View style={c.row}>
          <Text style={c.p}>Total fare</Text>
          <Text style={c.strong}>₹{app.car.price}</Text>
        </View>
        <View style={c.row}>
          <Text style={c.p}>Distance</Text>
          <Text style={c.strong}>12.4 km</Text>
        </View>
        <View style={c.row}>
          <Text style={c.p}>Driver</Text>
          <Text style={c.strong}>Vijay Kumar</Text>
        </View>
      </View>
      <View style={c.card}>
        <Text style={c.strong}>Rate your experience</Text>
        <View style={s.stars}>
          {[1, 2, 3, 4, 5].map((n) => (
            <TouchableOpacity key={n} onPress={() => setRating(n)}>
              <Text style={s.star}>{n <= rating ? "★" : "☆"}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={c.input}
          placeholder="Share your feedback (optional)"
          multiline
        />
      </View>
      <TouchableOpacity
        style={c.btn}
        onPress={() => {
          toast("Thank you for your feedback!");
          reset("rides");
        }}
      >
        <Text style={c.btnText}>Submit feedback</Text>
      </TouchableOpacity>
    </View>
  );
}
