import { StyleSheet, Text, Pressable } from 'react-native';

export default function Login({ onClick, text }) {
  return (
    <Pressable
      style={styles.button}
      onPress={onClick}
      android_ripple={{ color: '#efeff0' }}
    >
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 12,
    width: '100%',
  },
});
