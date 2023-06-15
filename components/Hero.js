import { StyleSheet, Text, View, Image } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.heading}>Winter Sale</Text>
      <Text style={styles.text}>Up to -50% off your favorite styles</Text>
      <View style={styles.container}>
        <Image
          style={styles.model}
          source={require('../assets/app/model.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: '#2e5492',
    height: 360,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    gap: 4,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  text: {
    color: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    height: '80%',
  },
  model: {
    width: '100%',
    height: '100%',
  },
});
