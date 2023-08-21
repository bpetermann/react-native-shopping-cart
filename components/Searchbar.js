import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Container } from '@/components/Shared';

export default function Searchbar({ search }) {
  const searchproducts = (text) => {
    search(text.toLowerCase());
  };

  return (
    <Container border>
      <View style={styles.searchbar}>
        <TextInput style={styles.input} onChangeText={searchproducts} />
        <Image
          style={styles.img}
          source={require('../assets/app/search.png')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    width: '100%',
    maxWidth: 1216,
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
