import { View } from 'react-native';

export default function Heading({ children, border, bgColor }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: border ? 1 : undefined,
        borderColor: border ? '#d2d3d5' : undefined,
        backgroundColor: bgColor ? bgColor : undefined,
      }}
    >
      {children}
    </View>
  );
}
