import { StyleSheet, Text } from 'react-native';

export default function Heading(props) {
  return <Text style={styles.heading}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
});
