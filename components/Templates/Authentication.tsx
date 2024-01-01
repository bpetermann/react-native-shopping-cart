import {
  Login,
  Register,
  LoggedIn,
} from '@/components/Organisms/Authentication';
import { NavigationProp } from '@react-navigation/native';
import { AuthContext } from '@/context/auth-context';
import { Header } from '@/components/Organisms/App';
import { View, ScrollView } from 'react-native';
import { useContext } from 'react';
import { useState } from 'react';

type Props = {
  navigation: NavigationProp<any, any>;
};

const Authentication: React.FC<Props> = ({ navigation }) => {
  const [showRegister, setShowRegister] = useState(false);
  const { user } = useContext(AuthContext);

  const border = (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: '#d2d3d5',
        marginVertical: 24,
      }}
    />
  );

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        {!user ? (
          <>
            <Login
              navigation={navigation}
              showRegister={showRegister}
              setShowRegister={setShowRegister}
            />
            {border}
            <Register
              navigation={navigation}
              showRegister={showRegister}
              setShowRegister={setShowRegister}
            />
          </>
        ) : (
          <LoggedIn />
        )}
      </ScrollView>
    </>
  );
};

export default Authentication;
