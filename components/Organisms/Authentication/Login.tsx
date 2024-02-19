import {
  FormInput,
  Confirm,
  AuthSwitch,
} from '@/components/Molecules/Authentication';
import { NavigationProp } from '@react-navigation/native';
import { useTranslation } from '@/context/i18n-context';
import { StyleSheet, View, Text } from 'react-native';
import { login, useUserDispatch } from '@/store';
import { validEmail } from '@/helper';
// import { useFail } from '@/hooks';
import { loginAPI } from '@/util';
import { useState } from 'react';

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
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const { t } = useTranslation();
  const dispatch = useUserDispatch();
  // useFail(error);

  const { email, password } = userData;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>
        {t('Welcome back')}
      </Text>
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
            testID={'login-email'}
          />
          <FormInput
            isValid={validate && !(password.trim().length >= 6)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, password: text }));
            }}
            value={password}
            error={'Please enter your password'}
            placer={t('Password')}
            password
            testID={'login-password'}
          />
          <Confirm
            onClick={() => {
              setError(undefined);
              setValidate(true);

              if (!(validEmail(email) && password.length)) {
                return;
              }

              const valid = loginAPI({ email, password });

              if (!valid) {
                setError('Login');
                return;
              }

              dispatch(login({ email, password }));

              setUserData({
                email: '',
                password: '',
              });
              setValidate(false);
              navigation.navigate('Home');
            }}
            testID='login-submit'
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
