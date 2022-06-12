import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import Item from './components/Item'

export default function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const textHandler = (enteredItem) => {
    setNewItem(enteredItem);
  }

  const addItemHandler = () => {
    setItems([...items, newItem]);
  }

  const removeItemHandler = (removedItem) => {
    const newItems = items.filter((item) => item !== removedItem);
    setItems(newItems)
  }

  const renderItem = ({ item }) => (
    <Item title={item} onDelete={removeItemHandler} />
  );

  return (
    // <View style={{padding:50,backgroundColor:'#638ccf'}}>
    <View style={styles.screen}>
      <Text>ToDo list</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={textHandler}
          placeholder="Add item"
        />
        <Button title="Add" onPress={addItemHandler} />
      </View>

      {/* <View>
        {
          items.map((item, idx) => {
            return (
              <Text key={idx}>{item}</Text>
            )
          })
        }
      </View> */}

      {/* <FlatList
        data={items}
        renderItem={(itemData) => (
          <Item title={itemData.item} onDelete={removeItemHandler} />
        )}
      /> */}

      {/* using this way based on the documentation */}
      <FlatList
        data={items}
        renderItem={renderItem} // the function is up at line 23
      />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
