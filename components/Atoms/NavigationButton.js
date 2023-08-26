import { Image, Pressable, View } from 'react-native';

export default function NavigationButton({ isActive, onClick, img }) {
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
}
