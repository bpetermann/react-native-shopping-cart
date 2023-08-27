import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function AmountButton({ img, onClick, style, amount }) {
  return (
    <View style={styles.iconButton}>
      <Pressable onPress={onClick} android_ripple={{ color: '#efeff0' }}>
        <Image style={[styles.img, style]} source={img} />
      </Pressable>
      {!!amount && (
        <View style={styles.amount}>
          <Text style={styles.count}>{amount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    position: 'relative',
  },
  amount: {
    backgroundColor: '#ff6900',
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 12,
  },
  img: {
    width: 28,
    height: 28,
  },
});
