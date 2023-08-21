import { StyleSheet, Text, View, Pressable } from 'react-native';
import { categories } from '@/lib/categories';
import { Container } from '@/components/Shared';

export default function Categories({ change, category }) {
  const changeCategory = (name) => {
    change(name);
  };

  return (
    <Container>
      <View style={styles.categories}>
        {categories.map(({ name, id }) => (
          <Pressable
            android_ripple={{ color: '#efeff0' }}
            onPress={() => changeCategory(name)}
            key={id}
          >
            <Text style={category === name && styles.active}>{name}</Text>
          </Pressable>
        ))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 24,
    width: '100%',
    maxWidth: 480,
  },

  active: {
    borderBottomWidth: 1,
    fontWeight: '600',
  },
});
