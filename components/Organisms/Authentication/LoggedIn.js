import { View, Pressable, Text } from 'react-native';
import { AuthContext } from '@/context/auth-context';
import { useContext } from 'react';

export default function LoggedIn() {
  const { logout } = useContext(AuthContext);

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        gap: 32,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Until next time</Text>
      <Pressable
        style={{
          backgroundColor: '#000',
          padding: 12,
          width: '100%',
        }}
        onPress={logout}
        android_ripple={{ color: '#efeff0' }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
          }}
        >
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
