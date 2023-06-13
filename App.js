import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navigation}>
          <Image style={styles.img} source={require('./assets/app/logo.png')} />
          <Image
            style={styles.img}
            source={require('./assets/app/search.png')}
          />
          <Image
            style={styles.img}
            source={require('./assets/app/heart.png')}
          />
          <Image style={styles.img} source={require('./assets/app/cart.png')} />
        </View>
        <Image
          style={styles.img}
          source={require('./assets/app/account.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#efeff0',
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
    shadowColor: 'red',
    padding: 12,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  img: {
    width: 28,
    height: 28,
  },
});
