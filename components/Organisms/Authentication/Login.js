import {
  FormInput,
  Confirm,
  AuthSwitch,
} from '@/components/Molecules/Authentication';
import { StyleSheet, View, Text } from 'react-native';
import { AuthContext } from '@/context/auth-context';
import { validEmail } from '@/helper';
import { useContext } from 'react';
import { useState } from 'react';

export default function Login({ showRegister, setShowRegister }) {
  const { login } = useContext(AuthContext);
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

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
            error={'Please enter a valid email address'}
            placer={'Email'}
          />
          <FormInput
            isValid={validate && !password.length}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, password: text }));
            }}
            error={'Please enter your password'}
            placer={'Password'}
            password
          />
          <Confirm
            onClick={() => {
              setValidate(true);
              if (validEmail(email) && password.length) {
                login(userData);
              }
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
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    marginTop: 32,
    gap: 32,
  },
});
