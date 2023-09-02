import {
  FormInput,
  Confirm,
  AuthSwitch,
} from '@/components/Molecules/Authentication';
import { AuthContext } from '@/context/auth-context';
import { StyleSheet, View, Text } from 'react-native';
import useFail from '@/hooks/useFail';
import { validEmail } from '@/helper';
import { useContext } from 'react';
import { useState } from 'react';

export default function Register({
  navigation,
  showRegister,
  setShowRegister,
}) {
  const { register } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  useFail(error);

  const { email, password, confirmPassword } = userData;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>I'm new here</Text>
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
          />
          <FormInput
            isValid={validate && !(password.trim().length >= 6)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, password: text }));
            }}
            value={password}
            error={'Your password must be at least 6 characters long'}
            placer={'Password'}
            password
          />
          <FormInput
            isValid={validate && password !== confirmPassword}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, confirmPassword: text }));
            }}
            value={confirmPassword}
            error={'Passwords do not match'}
            placer={'Confirm password'}
            password
          />
          <Confirm
            onClick={() => {
              setError(null);
              setValidate(true);
              if (
                validEmail(email) &&
                password.length &&
                password === confirmPassword
              ) {
                const isSucces = register({
                  email,
                  password,
                });
                if (isSucces) {
                  navigation.navigate('Home', {
                    success: 'Registration',
                  });
                } else {
                  setError('Registration');
                  setUserData({
                    email: '',
                    password: '',
                    confirmPassword: '',
                  });
                }
                setValidate(false);
              }
            }}
            text={'Register'}
          />
        </>
      ) : (
        <AuthSwitch
          text={'Register'}
          onClick={() => {
            setShowRegister(true);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    gap: 32,
  },
});
