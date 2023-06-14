import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

export default function Header({ openCart, amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          style={styles.img}
          source={require('../../assets/app/logo.png')}
        />
        <Image
          style={styles.img}
          source={require('../../assets/app/search.png')}
        />
        <Image
          style={styles.img}
          source={require('../../assets/app/heart.png')}
        />
        <Pressable onPress={() => openCart(true)}>
          <Image
            style={styles.img}
            source={require('../../assets/app/cart.png')}
          />
        </Pressable>
        {!!amount && (
          <View style={styles.amount}>
            <Text style={styles.count}>{amount}</Text>
          </View>
        )}
      </View>
      <Image
        style={styles.img}
        source={require('../../assets/app/account.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#efeff0',
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
    padding: 12,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
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
