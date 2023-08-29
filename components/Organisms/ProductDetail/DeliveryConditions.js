import { StyleSheet, Text, Image, View } from 'react-native';
import { Heading } from '@/components/Atoms';

export default function DeliveryConditions() {
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
        <Heading>2 -4 Working days</Heading>
        <Text>Standard delivery</Text>
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
        <Text>Free Shipping & Returns</Text>
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
        <Text>30 days return policy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
