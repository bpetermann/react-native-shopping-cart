import { useTranslation } from '@/context/i18n-context';
import { View, Pressable, Text } from 'react-native';
import { logout, useUserDispatch } from '@/store';

const LoggedIn = () => {
  const { t } = useTranslation();
  const dispatch = useUserDispatch();

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
      <Text style={{ fontSize: 24, fontWeight: '600' }}>
        {t('Until next time')}
      </Text>
      <Pressable
        style={{
          backgroundColor: '#000',
          padding: 12,
          width: '100%',
        }}
        onPress={() => dispatch(logout())}
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
};

export default LoggedIn;
