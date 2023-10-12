import { StyleSheet, View, Text } from 'react-native';
import { SetStateAction, Dispatch } from 'react';
import { Pressable } from 'react-native';

type Props = {
  searchSuggestion: string;
  searchproducts: (text: string) => void;
  search: string;
};

const Recommandation: React.FC<Props> = ({
  searchSuggestion,
  searchproducts,
  search,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.suggestion}>
        <Pressable
          onPress={() => {
            searchproducts(searchSuggestion);
          }}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },

  suggestion: {
    width: '100%',
    maxWidth: 1216,
    height: 52,
    padding: 16,
  },
});

export default Recommandation;
