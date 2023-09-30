import { StyleSheet, Text, Pressable } from 'react-native';

type Props = {
  onClick: () => void;
  text: string;
  testID?: string;
};

const AuthSwitch: React.FC<Props> = ({ onClick, text, testID }) => {
  return (
    <Pressable
      onPress={onClick}
      style={[
        styles.button,
        {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: 'black',
        },
      ]}
      android_ripple={{ color: '#efeff0' }}
      testID={testID}
    >
      <Text
        style={{
          color: '#000',
          textAlign: 'center',
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 12,
    width: '100%',
  },
});

export default AuthSwitch;
