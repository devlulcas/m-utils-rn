import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { BodyMassIndex } from "./modules/body-mass-index";
import { FlipCoin } from "./modules/flip-coin";
import { HowManyRepos } from "./modules/how-many-repos";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a2c20",
    rowGap: 20,
  },
});

export function Main() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <BodyMassIndex />
        <HowManyRepos />
        <FlipCoin />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
