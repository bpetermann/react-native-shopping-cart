import { useTranslation } from '@/context/i18n-context';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useBreakpoints } from '@/hooks';

const Hero = () => {
  const { isM } = useBreakpoints();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={isM ? styles.hero : styles.web}>
        <View>
          <Text style={styles.heading}>Winter Sale</Text>
          <Text style={styles.text}>
            {t('Up to -50% off your favorite styles')}
          </Text>
        </View>
        <View style={styles.image}>
          <Image
            style={styles.model}
            source={require('@/assets/app/model.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2e5492',
    overflow: 'hidden',
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
  web: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 360,
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    width: '100%',
    maxWidth: 1216,
    gap: 8,
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
    height: '100%',
    width: '100%',
    maxWidth: 480,
  },
  model: {
    width: '100%',
    height: '100%',
  },
});

export default Hero;
