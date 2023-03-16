import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  inputLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    color: "#324e41",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});

type InputProps = React.ComponentProps<typeof TextInput> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}
