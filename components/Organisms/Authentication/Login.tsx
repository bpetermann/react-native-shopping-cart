import {
  FormInput,
  Confirm,
  AuthSwitch,
} from '@/components/Molecules/Authentication';
import { NavigationProp } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { AuthContext } from '@/context/auth-context';
import { useContext, useState } from 'react';
import { validEmail } from '@/helper';
import { useFail } from '@/hooks';

type Props = {
  navigation: NavigationProp<any, any>;
  showRegister: boolean;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<Props> = ({
  navigation,
  showRegister,
  setShowRegister,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const { login } = useContext(AuthContext);
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  useFail(error);

  const { email, password } = userData;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Welcome back</Text>
      {!showRegister ? (
        <>
          <FormInput
            isValid={validate && !validEmail(email)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, email: text }));
            }}
            value={email}
            error={'Please enter a valid email address'}
            placer={'Email'}
          />
          <FormInput
            isValid={validate && !(password.trim().length >= 6)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, password: text }));
            }}
            value={password}
            error={'Please enter your password'}
            placer={'Password'}
            password
          />
          <Confirm
            onClick={() => {
              setError(undefined);
              setValidate(true);

              if (!(validEmail(email) && password.length)) {
                return;
              }

              const valid = login({ email, password });

              if (!valid) {
                setError('Login');
                return;
              }

              setUserData({
                email: '',
                password: '',
              });
              setValidate(false);
              navigation.navigate('Home');
            }}
            text={'Login'}
          />
        </>
      ) : (
        <AuthSwitch
          text={'Login'}
          onClick={() => {
            setShowRegister(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    marginTop: 32,
    gap: 32,
  },
});

export default Login;
