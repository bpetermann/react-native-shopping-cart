import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import { categories } from './lib/categories';
import { products, imageMap } from './lib/products';

export default function App() {
  const [category, setCategory] = useState('Shoes');

  const changeCategory = (name) => setCategory(name);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navigation}>
          <Image style={styles.img} source={require('./assets/app/logo.png')} />
          <Image
            style={styles.img}
            source={require('./assets/app/search.png')}
          />
          <Image
            style={styles.img}
            source={require('./assets/app/heart.png')}
          />
          <Image style={styles.img} source={require('./assets/app/cart.png')} />
        </View>
        <Image
          style={styles.img}
          source={require('./assets/app/account.png')}
        />
      </View>

      <ScrollView>
        <View style={styles.searchbar}>
          <Image
            style={styles.img}
            source={require('./assets/app/search.png')}
          />
        </View>

        <View style={styles.categories}>
          {categories.map(({ name, id }) => (
            <Pressable onPress={() => changeCategory(name)} key={id}>
              <Text style={category === name && styles.active}>{name}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>Winter Sale</Text>
          <Text style={styles.text}>Up to -50% off your favorite styles</Text>
          <View style={styles.modelContainer}>
            <Image
              style={styles.model}
              source={require('./assets/app/model.png')}
            />
          </View>
        </View>

        <View style={styles.products}>
          <FlatList
            horizontal
            data={products}
            renderItem={({ item }) => {
              return (
                <View style={styles.product} key={item.id}>
                  <Image
                    style={styles.productImage}
                    source={imageMap[item.name]}
                  />
                  <Text>{item.name}</Text>
                  <Text>{item.price} $</Text>
                  <Button title='Add to Cart' />
                </View>
              );
            }}
          ></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#efeff0',
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
    padding: 12,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  searchbar: {
    alignItems: 'flex-end',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  content: {
    backgroundColor: '#2e5492',
    height: 360,
    paddingTop: 24,
    paddingLeft: 8,
    gap: 4,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
  },
  text: {
    color: '#fff',
  },
  active: {
    borderBottomWidth: 1,
  },
  modelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    height: '80%',
  },
  model: {
    width: '100%',
    height: '100%',
  },
  products: {
    backgroundColor: '#84bce5',
    height: 480,
    padding: 8,
    paddingTop: 24,
  },
  product: {
    alignItems: 'center',
    marginRight: 16,
    gap: 8,
  },
  productImage: {
    width: 144,
    height: 184,
  },
  img: {
    width: 28,
    height: 28,
  },
});
