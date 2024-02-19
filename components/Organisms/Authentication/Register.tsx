import {
  FormInput,
  Confirm,
  AuthSwitch,
} from '@/components/Molecules/Authentication';
import { NavigationProp } from '@react-navigation/native';
import { useTranslation } from '@/context/i18n-context';
import { StyleSheet, View, Text } from 'react-native';
import { register, useUserDispatch } from '@/store';
import { validEmail } from '@/helper';
import { registerAPI } from '@/util';
import { useFail } from '@/hooks';
import { useState } from 'react';

type Props = {
  navigation: NavigationProp<any, any>;
  showRegister: boolean;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const Register: React.FC<Props> = ({
  navigation,
  showRegister,
  setShowRegister,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { t } = useTranslation();
  const dispatch = useUserDispatch();

  useFail(error);

  const { email, password, confirmPassword } = userData;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>
        {t("I'm new here")}
      </Text>
      {showRegister ? (
        <>
          <FormInput
            isValid={validate && !validEmail(email)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, email: text }));
            }}
            value={email}
            error={'Please enter a valid email address'}
            placer={'Email'}
            testID={'registration-email'}
          />
          <FormInput
            isValid={validate && !(password.trim().length >= 6)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, password: text }));
            }}
            value={password}
            error={'Your password must be at least 6 characters long'}
            placer={t('Password')}
            password
            testID={'registration-password'}
          />
          <FormInput
            isValid={validate && password !== confirmPassword}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, confirmPassword: text }));
            }}
            value={confirmPassword}
            error={'Passwords do not match'}
            placer={t('Confirm password')}
            password
            testID={'registration-confirm'}
          />
          <Confirm
            onClick={() => {
              setError(undefined);
              setValidate(true);

              if (
                !(
                  validEmail(email) &&
                  password.length &&
                  password === confirmPassword
                )
              ) {
                return;
              }

              const isValid = registerAPI({ email, password });

              if (!isValid) {
                setError('Registration');
                setUserData({
                  email: '',
                  password: '',
                  confirmPassword: '',
                });
                return;
              }

              dispatch(register({ email, password }));

              navigation.navigate('Home', {
                success: 'Registration',
              });
              setValidate(false);
            }}
            text={t('Register')}
            testID={'registration-submit'}
          />
        </>
      ) : (
        <AuthSwitch
          text={t('Register')}
          onClick={() => {
            setShowRegister(true);
          }}
          testID={'auth-switch'}
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
    marginTop: 16,
    gap: 32,
  },
});

export default Register;
