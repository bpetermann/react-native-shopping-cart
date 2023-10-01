import { useContext, forwardRef, SetStateAction, Dispatch } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { useTranslation } from '@/context/i18n-context';
import { AuthContext } from '@/context/auth-context';
import { Container } from '@/components/Atoms';
import { Pressable } from 'react-native';

type Props = {
  focus: () => void;
  search: Dispatch<SetStateAction<string>>;
};

const Searchbar = forwardRef<TextInput, Props>(({ focus, search }, ref) => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  const userGreeting = t('👋 Welcome') + `${user?.email?.split('@')?.[0]}!`;

  const searchproducts = (text: string) => {
    search(text.toLowerCase());
  };

  return (
    <Container border>
      <View style={styles.searchbar}>
        <TextInput
          ref={ref}
          style={styles.input}
          onChangeText={searchproducts}
          placeholder={user ? userGreeting : t('Search')}
          placeholderTextColor={'#747474'}
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

export default Searchbar;
