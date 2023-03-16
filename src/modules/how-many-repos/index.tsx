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

export function HowManyRepos() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const getHowManyRepos = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}`
      );

      const data = await response.json();

      const count = data.total_count.toLocaleString();

      setResult(`😺 ${count} repos for ${query.toUpperCase()}`);
    } catch (error) {
      setResult("😿 Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOW MANY REPOS FOR ???</Text>

      <Input
        label="Query"
        placeholder="Enter your query"
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.results}>{result}</Text>

      <Button
        loading={loading}
        label="Search"
        onPress={() => {
          getHowManyRepos(query);
        }}
      />
    </View>
  );
}
