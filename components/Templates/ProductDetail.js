import { StyleSheet, Text } from 'react-native';
import { Container } from '@/components/Atoms';

export default function ProductDetail() {
  return (
    <>
      <Container>
        <Text style={styles.text}>Product detail</Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 48,
  },
});
