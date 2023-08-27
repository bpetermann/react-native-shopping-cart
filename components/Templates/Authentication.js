import { Login, Register } from '@/components/Organisms/Authentication';
import { Header } from '@/components/Organisms/App';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function ProductDetail({ navigation }) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Login showRegister={showRegister} setShowRegister={setShowRegister} />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#d2d3d5',
            marginVertical: 24,
          }}
        ></View>
        <Register
          showRegister={showRegister}
          setShowRegister={setShowRegister}
        />
      </ScrollView>
    </>
  );
}
