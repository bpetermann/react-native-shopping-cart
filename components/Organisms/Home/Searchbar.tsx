import {
  useContext,
  forwardRef,
  SetStateAction,
  Dispatch,
  useState,
  useMemo,
} from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { Recommandation } from '@/components/Molecules/Home';
import { useTranslation } from '@/context/i18n-context';
import { Container } from '@/components/Atoms';
import { useSelector } from 'react-redux';
import { Pressable } from 'react-native';
import { selectUser } from '@/store';
import { Trie } from '@/helper/Trie';

type Props = {
  suggestions: string[];
  setSearch: Dispatch<SetStateAction<string>>;
  focus: () => void;
  search: string;
};

const Searchbar = forwardRef<TextInput, Props>(
  ({ suggestions, setSearch, focus, search }, ref) => {
    const [searchSuggestion, setSearchSuggestion] = useState('');
    //  const { user } = useContext(AuthContext);
    const { t } = useTranslation();
    const user = useSelector(selectUser);

    const userGreeting = t('👋 Welcome') + `${user?.email?.split('@')?.[0]}!`;

    const suggest = useMemo(() => {
      if (suggestions.length) {
        const trie = new Trie();
        suggestions.map((i) => trie.insert(i, i));
        return trie;
      }
    }, [suggestions]);

    const searchproducts = (text: string) => {
      const recommandation = suggest?.findValue(text, 'string');
      setSearchSuggestion('');

      if (recommandation && recommandation !== text) {
        setSearchSuggestion(recommandation);
      }

      setSearch(text);
    };

    return (
      <>
        <Container border>
          <View style={styles.searchbar}>
            <TextInput
              ref={ref}
              value={search}
              style={[styles.input, {}]}
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
        {search && searchSuggestion && (
          <Recommandation
            searchSuggestion={searchSuggestion}
            searchproducts={searchproducts}
            search={search}
          />
        )}
      </>
    );
  }
);

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
