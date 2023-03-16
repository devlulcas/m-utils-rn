import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1dad6a",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

type ButtonProps = React.ComponentProps<typeof Pressable> & {
  label: string;
  loading?: boolean;
};

export function Button({ label, loading, ...props }: ButtonProps) {
  return (
    <Pressable style={styles.button} {...props}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonLabel}>{label}</Text>
      )}
    </Pressable>
  );
}
