import { StyleSheet, Text, Image, View } from 'react-native';
import { useTranslation } from '@/context/i18n-context';
import { Heading } from '@/components/Atoms';

const DeliveryConditions = () => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        marginTop: 32,
        marginBottom: 32,
        borderWidth: 1,
        borderColor: '#666',
      }}
    >
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: 12,
        }}
      >
        <Image
          style={[styles.icon]}
          source={require('@/assets/app/shipping.png')}
        />
        <Heading>{t('2 -4 Working days')}</Heading>
        <Text>{t('Standard delivery')}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
          padding: 12,
        }}
      >
        <Image style={[styles.icon]} source={require('@/assets/app/box.png')} />
        <Text>{t('Free Shipping & Returns')}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
          padding: 12,
        }}
      >
        <Image
          style={[styles.icon]}
          source={require('@/assets/app/return.png')}
        />
        <Text>{t('30 days return policy')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});

export default DeliveryConditions;
