import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { StatusBar, StyleSheet, SafeAreaView, Text, View} from "react-native";
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    // 判斷針對不同的Platform做layout的調整
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusbar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 1,
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "orange",
    padding: 16,
  },
});
