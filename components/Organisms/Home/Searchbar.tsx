import {
  useContext,
  forwardRef,
  SetStateAction,
  Dispatch,
  useState,
  useMemo,
} from 'react';
import { StyleSheet, View, Image, TextInput, Text } from 'react-native';
import { useTranslation } from '@/context/i18n-context';
import { AuthContext } from '@/context/auth-context';
import { Container } from '@/components/Atoms';
import { Pressable } from 'react-native';
import { Trie } from '@/helper/Trie';

type Props = {
  suggestions: string[];
  setSearch: Dispatch<SetStateAction<string>>;
  focus: () => void;
  search: string;
};

const Searchbar = forwardRef<TextInput, Props>(
  ({ suggestions, setSearch, focus, search }, ref) => {
    const { t } = useTranslation();
    const { user } = useContext(AuthContext);
    const [searchSuggestion, setSearchSuggestion] = useState('');

    const userGreeting = t('👋 Welcome') + `${user?.email?.split('@')?.[0]}!`;

    const searchproducts = (text: string) => {
      setSearchSuggestion('');
      if (suggest && text) {
        const productSuggestion = suggest.find(text);
        if (productSuggestion) {
          setSearchSuggestion(productSuggestion.value);
        }
      }
      setSearch(text);
    };

    const suggest = useMemo(() => {
      if (suggestions.length) {
        const trie = new Trie();
        suggestions.map((i) => trie.insert(i, i));
        return trie;
      }
    }, [suggestions]);

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
        {searchSuggestion && (
          <View style={styles.suggestion}>
            <Pressable
              onPress={() => searchproducts(searchSuggestion)}
              android_ripple={{ color: '#efeff0' }}
            >
              <Text>
                {search}
                <Text style={{ color: '#747474' }}>
                  {searchSuggestion.slice(search.length)}
                </Text>
              </Text>
            </Pressable>
          </View>
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
  suggestion: {
    height: 52,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
});

export default Searchbar;
