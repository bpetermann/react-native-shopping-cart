import {
  DeliveryConditions,
  ProductDetails,
} from '@/components/Organisms/ProductDetail';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Header } from '@/components/Organisms/App';
import { imageMap } from '@/lib/products';

export default function ProductDetail({ navigation, route }) {
  const { item } = route.params;

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.img} source={imageMap[item.name]} />
        </View>
        <View style={{ padding: 16, maxWidth: 720 }}>
          <ProductDetails item={item} />
          <DeliveryConditions />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    maxHeight: 450,
    maxWidth: 720,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
