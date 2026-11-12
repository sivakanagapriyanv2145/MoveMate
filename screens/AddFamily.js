import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import c from "../styles/common";
export default function AddFamily({ back, app, set, toast }) {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("Father");
  const save = () => {
    if (!name.trim()) return toast("Please enter a name");
    set({ family: [...app.family, { name: name.trim(), relation }] });
    toast("Family member added");
    back();
  };
  return (
    <View style={c.screen}>
      <Text style={c.h1}>Add family member</Text>
      <Text style={c.label}>Full name</Text>
      <TextInput
        style={c.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g. Raman Kumar"
      />
      <Text style={c.label}>Relationship</Text>
      <TextInput
        style={c.input}
        value={relation}
        onChangeText={setRelation}
        placeholder="Father, Mother, Spouse…"
      />
      <TouchableOpacity style={c.btn} onPress={save}>
        <Text style={c.btnText}>Save family member</Text>
      </TouchableOpacity>
    </View>
  );
}
