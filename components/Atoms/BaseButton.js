import { StyleSheet, Text, Pressable } from 'react-native';

export default function Button({ onClick, title }) {
  return (
    <Pressable onPress={onClick} android_ripple={{ color: '#efeff0' }}>
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
