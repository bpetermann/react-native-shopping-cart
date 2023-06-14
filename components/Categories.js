import { StyleSheet, Text, View, Pressable } from 'react-native';
import { categories } from '../lib/categories';

export default function Categories({ change, category }) {
  const changeCategory = (name) => {
    change(name);
  };

  return (
    <View style={styles.categories}>
      {categories.map(({ name, id }) => (
        <Pressable onPress={() => changeCategory(name)} key={id}>
          <Text style={category === name && styles.active}>{name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 16,
  },

  active: {
    borderBottomWidth: 1,
  },
});
