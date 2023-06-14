import { StyleSheet, View, Image } from 'react-native';

export default function Searchbar() {
  return (
    <View style={styles.searchbar}>
      <Image style={styles.img} source={require('../assets/app/search.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    alignItems: 'flex-end',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
  img: {
    width: 28,
    height: 28,
  },
});
