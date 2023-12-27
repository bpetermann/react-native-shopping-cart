import {
  Container,
  IconButton,
  NavigationButton,
  AmountButton,
} from '@/components/Atoms';
import { NavigationProp } from '@react-navigation/native';
import {
  showFavorites,
  selectFavoriteItems,
  openCart,
  selectCartAmount,
} from '@/store';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

type Props = {
  navigation: NavigationProp<any, any>;
  focus?: () => void;
};

const Header: React.FC<Props> = ({ navigation, focus }) => {
  const favoriteItems = useSelector(selectFavoriteItems);
  const amount = useSelector(selectCartAmount);

  const dispatch = useDispatch();

  const route = useRoute();

  return (
    <Container bgColor={'#efeff0'} border shadow>
      <View style={styles.header}>
        <View style={styles.nav}>
          <NavigationButton
            onClick={() => navigation.navigate('Home')}
            img={require('@/assets/app/logo.png')}
            isActive={route.name === 'Home'}
          />
          <IconButton
            onClick={async () => focus && focus()}
            img={require('@/assets/app/search.png')}
          />
          <AmountButton
            testID='favorites'
            onClick={() => dispatch(showFavorites(true))}
            img={require('@/assets/app/heart.png')}
            amount={favoriteItems.length}
          />
          <AmountButton
            testID='cart'
            onClick={() => dispatch(openCart(true))}
            img={require('@/assets/app/cart.png')}
            amount={amount}
          />
        </View>
        <NavigationButton
          onClick={() => navigation.navigate('Authentication')}
          img={require('@/assets/app/account.png')}
          isActive={route.name === 'Authentication'}
          testID={'auth-link'}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
    paddingHorizontal: 16,
    maxWidth: 1216,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    maxWidth: 320,
  },
});

export default Header;
