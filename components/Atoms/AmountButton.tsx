import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';

type Props = {
  onClick: () => void;
  img: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  amount: number;
  testID?: string;
};

const AmountButton: React.FC<Props> = ({
  img,
  onClick,
  style,
  amount,
  testID,
}) => {
  return (
    <View style={styles.iconButton}>
      <Pressable
        testID={testID}
        onPress={onClick}
        android_ripple={{ color: '#efeff0' }}
      >
        <Image style={[styles.img, style]} source={img} />
      </Pressable>
      {!!amount && (
        <View style={styles.amount} testID={`${testID}-amount`}>
          <Text style={styles.count}>{amount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    position: 'relative',
  },
  amount: {
    backgroundColor: '#ff6900',
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 12,
  },
  img: {
    width: 28,
    height: 28,
  },
});

export default AmountButton;
