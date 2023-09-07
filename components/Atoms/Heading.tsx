import { StyleSheet, Text } from 'react-native';
import { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
  return <Text style={styles.heading}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
});
