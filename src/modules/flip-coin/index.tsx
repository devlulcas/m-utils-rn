import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import heheImage from "./hehe.png";
import notHeheImage from "./not-hehe.png";

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

export function FlipCoin() {
  const [result, setResult] = useState(false);

  const [counter, setCounter] = useState(0);

  const flipCoin = () => {
    setResult(Math.random() > 0.5);
    setCounter((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FLIP A COIN - {counter} TRIES</Text>

      <Text style={styles.results}>
        {counter > 0
          ? `You flipped ${result ? "Heads" : "Tails"}!`
          : "Press the button to flip a coin."}
      </Text>

      <Image source={result ? heheImage : notHeheImage} />

      <Button delayLongPress={1000} onPress={flipCoin} label="Flip" />
    </View>
  );
}
