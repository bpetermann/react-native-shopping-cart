import { toggleFavorite, selectFavoriteItems, addCartItem } from '@/store';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useTranslation } from '@/context/i18n-context';
import { useSelector, useDispatch } from 'react-redux';
import { Product as ProductType } from '@/util/types';
import { CartContext } from '@/context/cart-context';
import { BaseButton } from '@/components/Atoms';
import { imageMap } from '@/lib/products';
import { useContext } from 'react';

type Props = {
  item: ProductType;
  navigate?: (item: ProductType) => void;
};

const Product: React.FC<Props> = ({ item, navigate }) => {
  // const { addCartItem: add } = useContext(CartContext);
  const favoriteItems = useSelector(selectFavoriteItems);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isFavorite = favoriteItems.find((i) => i.id === item.id);

  return (
    <View style={styles.product}>
      <Pressable
        onPress={() => {
          navigate && navigate(item);
        }}
        android_ripple={{ color: '#efeff0' }}
      >
        <Image style={styles.img} source={imageMap[item.name]} testID={`img`} />
      </Pressable>
      <Text>{item.name}</Text>
      <Text>{item.price} $</Text>
      <BaseButton
        testID={`add-${item.id}`}
        onClick={() => dispatch(addCartItem(item))}
        title={t('Add to Cart')}
      />
      <Pressable
        style={styles.favoriteButton}
        onPress={() => dispatch(toggleFavorite(item))}
        android_ripple={{ color: '#efeff0' }}
      >
        <Image
          style={[styles.icon, isFavorite && styles.favorite]}
          source={require('@/assets/app/heart.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    marginRight: 16,
    paddingBottom: 16,
    gap: 8,
    position: 'relative',
  },
  img: {
    width: 144,
    height: 184,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  favorite: {
    tintColor: 'orange',
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default Product;
