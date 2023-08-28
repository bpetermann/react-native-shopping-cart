import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Login({
  value,
  isValid,
  onChange,
  error,
  placer,
  password,
}) {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        placeholder={placer}
        secureTextEntry={password ? true : false}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
      {isValid && (
        <Text
          style={{
            color: 'red',
            paddingTop: 16,
          }}
        >
          *{error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
