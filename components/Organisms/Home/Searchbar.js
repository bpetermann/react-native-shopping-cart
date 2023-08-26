import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Container } from '@/components/Atoms';
import { forwardRef } from 'react';
import { Pressable } from 'react-native';

export default forwardRef(({ focus, search }, ref) => {
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
        <Pressable onPress={focus} android_ripple={{ color: '#efeff0' }}>
          <Image
            style={styles.img}
            source={require('@/assets/app/search.png')}
          />
        </Pressable>
      </View>
    </Container>
  );
});

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
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
