import { StyleSheet, View, Image, TextInput } from 'react-native';

export default function Searchbar({ search }) {
  
  const searchproducts = (text) => {
    search(text.toLowerCase());
  };

  return (
    <View style={styles.searchbar}>
      <TextInput style={styles.input} onChangeText={searchproducts} />
      <Image style={styles.img} source={require('../../assets/app/search.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
  input: {
    height: 52,
    width: '90%',
  },
  img: {
    width: 28,
    height: 28,
  },
});
