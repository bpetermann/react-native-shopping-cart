import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useState, useEffect, ComponentType } from 'react';
import { Product } from '@/util/types';

export default function withLoader<P extends object>(
  Element: ComponentType<P>,
  fetch: () => Promise<Product[]>
) {
  return (props: P) => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetch();
        setData(data);
      };
      getData();
    }, []);

    if (!data.length) {
      return (
        <View style={styles.spinner}>
          <ActivityIndicator size='large' color='black' />
        </View>
      );
    }

    return <Element {...props} data={data} />;
  };
}

const styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    padding: 48,
  },
});
