import {
  FormInput,
  Confirm,
  AuthSwitch,
} from '@/components/Molecules/Authentication';
import { StyleSheet, View, Text } from 'react-native';
import { validEmail } from '@/helper';
import { useState } from 'react';

export default function Register({ showRegister, setShowRegister }) {
  const [validate, setValidate] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

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
            error={'Please enter a valid email address'}
            placer={'Email'}
          />
          <FormInput
            isValid={validate && !(password.trim().length >= 6)}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, password: text }));
            }}
            error={'Your password must be at least 6 characters long'}
            placer={'Password'}
            password
          />
          <FormInput
            isValid={validate && password !== confirmPassword}
            onChange={(text) => {
              setUserData((prev) => ({ ...prev, confirmPassword: text }));
            }}
            error={'Passwords do not match'}
            placer={'Confirm password'}
            password
          />
          <Confirm
            onClick={() => {
              setValidate(true);
              if (
                validEmail(email) &&
                password.length &&
                password === confirmPassword
              ) {
                console.log(userData);
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
