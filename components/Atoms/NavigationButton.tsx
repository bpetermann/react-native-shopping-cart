import { Image, ImageSourcePropType, Pressable, View } from 'react-native';

type Props = {
  isActive: boolean;
  onClick: () => void;
  img: ImageSourcePropType;
};

const NavigationButton: React.FC<Props> = ({ isActive, onClick, img }) => {
  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <Pressable onPress={onClick} android_ripple={{ color: '#efeff0' }}>
        <Image style={{ width: 28, height: 28 }} source={img} />
      </Pressable>
      {isActive && (
        <View
          style={{
            position: 'absolute',
            width: 28,
            height: 4,
            backgroundColor: 'darkorange',
            bottom: -12,
          }}
        ></View>
      )}
    </View>
  );
};

export default NavigationButton;
