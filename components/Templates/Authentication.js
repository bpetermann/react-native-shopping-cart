import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { Header } from '@/components/Organisms/App';
import { useState } from 'react';

export default function ProductDetail({ navigation }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>Welcome back</Text>
          <TextInput
            placeholder={'Email'}
            style={styles.input}
            onChangeText={(text) => console.log(`Email: ${text}`)}
          />
          <TextInput
            placeholder={'Password'}
            type={'password'}
            style={styles.input}
            onChangeText={(text) => console.log(`Password: ${text}`)}
          />
          <Pressable
            style={styles.button}
            android_ripple={{ color: '#efeff0' }}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#d2d3d5',
            marginVertical: 24,
          }}
        ></View>
        <View style={styles.signup}>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>I'm new here</Text>
          {showSignUp ? (
            <>
              <TextInput
                placeholder={'Email'}
                style={styles.input}
                onChangeText={(text) => console.log(`Email: ${text}`)}
              />
              <TextInput
                placeholder={'Password'}
                type={'password'}
                style={styles.input}
                onChangeText={(text) => console.log(`Password: ${text}`)}
              />
              <TextInput
                placeholder={'Confirm password'}
                type={'password'}
                style={styles.input}
                onChangeText={(text) => console.log(`Password: ${text}`)}
              />
              <Pressable
                style={styles.button}
                android_ripple={{ color: '#efeff0' }}
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  Sign Up
                </Text>
              </Pressable>
            </>
          ) : (
            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: 'black',
                },
              ]}
              android_ripple={{ color: '#efeff0' }}
            >
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </>
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    width: '100%',
  },
  signup: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    marginBottom: 32,
    gap: 32,
  },
});
