import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default function History({route, navigation}) {
  const {result} = route.params;

    return (
    <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.header}>History</Text>
            <FlatList
            data={result}
            renderItem={({item}) =>
              <Text>{item.key}</Text>
              }
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
    </View>
    );
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          alignContent: "flex-start",
          paddingTop: 50,
        },

        list: {
            paddingTop: 10,
            height: 'auto',
        },

        header: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      });