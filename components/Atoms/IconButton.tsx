import {
  StyleSheet,
  Image,
  Pressable,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

type Props = {
  onClick: () => {};
  img: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
};

const IconButton: React.FC<Props> = ({ onClick, img, style }) => {
  return (
    <Pressable onPress={onClick} android_ripple={{ color: '#efeff0' }}>
      <Image style={[styles.img, style]} source={img} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 28,
    height: 28,
  },
});

export default IconButton;
