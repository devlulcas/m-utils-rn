import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#324e41",
    rowGap: 10,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  results: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export function BodyMassIndex() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const imc = Number(weight) / (Number(height) * Number(height));
    setResult(`🏋️ ${name} your IMC is ${imc.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC</Text>

      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Input
        label="Weight"
        placeholder="Enter your weight"
        value={weight}
        onChangeText={setWeight}
      />

      <Input
        label="Height"
        placeholder="Enter your height"
        value={height}
        onChangeText={setHeight}
      />

      <Text style={styles.results}>{result}</Text>

      <Button label="Calculate" onPress={calculate} />
    </View>
  );
}
