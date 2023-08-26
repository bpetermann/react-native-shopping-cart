import { StyleSheet, View, Text } from 'react-native';
import { Header } from '@/components/Organisms/App';

export default function ProductDetail({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>To do...</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    maxHeight: 450,
    maxWidth: 720,
  },
});
