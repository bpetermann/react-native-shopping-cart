import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

export default function withLoader(Element, fetch) {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetch();
        setData(data);
      };
      getData();
    }, []);

    if (!data) {
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
