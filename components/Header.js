import { StyleSheet, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image style={styles.img} source={require('../assets/app/logo.png')} />
        <Image
          style={styles.img}
          source={require('../assets/app/search.png')}
        />
        <Image style={styles.img} source={require('../assets/app/heart.png')} />
        <Image style={styles.img} source={require('../assets/app/cart.png')} />
      </View>
      <Image style={styles.img} source={require('../assets/app/account.png')} />
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
  img: {
    width: 28,
    height: 28,
  },
});
