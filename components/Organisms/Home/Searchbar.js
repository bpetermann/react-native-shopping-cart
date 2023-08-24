import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Container } from '@/components/Atoms';
import { useRef } from 'react';
import { Pressable } from 'react-native';

export default function Searchbar() {
  const ref = useRef();

  const searchproducts = (text) => {
    search(text.toLowerCase());
  };

  return (
    <Container border>
      <View style={styles.searchbar}>
        <TextInput
          ref={ref}
          style={styles.input}
          onChangeText={searchproducts}
        />
        <Pressable
          onPress={() => {
            ref.current.focus();
          }}
          android_ripple={{ color: '#efeff0' }}
        >
          <Image
            style={styles.img}
            source={require('@/assets/app/search.png')}
          />
        </Pressable>
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
