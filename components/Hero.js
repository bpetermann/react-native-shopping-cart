import { StyleSheet, Text, View, Image } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heading}>Winter Sale</Text>
        <Text style={styles.text}>Up to -50% off your favorite styles</Text>
        <View style={styles.image}>
          <Image
            style={styles.model}
            source={require('../assets/app/model.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2e5492',
  },
  hero: {
    height: 360,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    gap: 4,
    width: '100%',
    maxWidth: 1216,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  text: {
    color: '#fff',
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    height: '80%',
    maxWidth: 480,

  },
  model: {
    width: '100%',
    height: '100%',
  },
});
