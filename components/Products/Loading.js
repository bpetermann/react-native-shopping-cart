import { StyleSheet, View, ActivityIndicator } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size='large' color='black' />
    </View>
  );
}

const styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    paddingTop: 24,
  },
});
