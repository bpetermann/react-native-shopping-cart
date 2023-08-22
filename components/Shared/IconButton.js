import { StyleSheet, Image, Pressable } from 'react-native';

export default function Button({ onClick,img }) {
  return (
    <Pressable onPress={onClick} android_ripple={{ color: '#efeff0' }}>
      <Image
        style={styles.img}
        source={img}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 28,
    height: 28,
  },
});
