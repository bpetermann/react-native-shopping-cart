import { StyleSheet, Text, Pressable } from 'react-native';

type Props = {
  title: string;
  onClick: () => void;
  testID?: string;
};

const BaseButton: React.FC<Props> = ({ onClick, title, testID }) => {
  return (
    <Pressable
      testID={testID}
      onPress={onClick}
      android_ripple={{ color: '#efeff0' }}
    >
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 10,
    maxWidth: 126,
    textAlign: 'center',
  },
});

export default BaseButton;
