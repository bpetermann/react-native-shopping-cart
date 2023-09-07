import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  border?: boolean;
  bgColor?: string;
  shadow?: boolean;
};

const Container: React.FC<Props> = ({ children, border, bgColor, shadow }) => {
  return (
    <View
      style={[
        styles.container,
        border && styles.border,
        shadow && styles.shadow,
        { backgroundColor: bgColor ? bgColor : undefined },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#d2d3d5',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
    backgroundColor: '#171717',
  },
});

export default Container;
