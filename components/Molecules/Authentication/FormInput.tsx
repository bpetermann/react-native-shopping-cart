import { StyleSheet, View, Text, TextInput } from 'react-native';

type Props = {
  value: string;
  isValid: boolean;
  onChange: (text: string) => void;
  error: string;
  placer: string;
  password?: boolean;
  testID?: string;
};

const FormInput: React.FC<Props> = ({
  value,
  isValid,
  onChange,
  error,
  placer,
  password,
  testID,
}) => {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        placeholder={placer}
        placeholderTextColor={'#747474'}
        secureTextEntry={password ? true : false}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        testID={testID}
      />
      {isValid && (
        <Text
          style={{
            color: 'red',
            paddingTop: 16,
          }}
        >
          *{error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default FormInput;
