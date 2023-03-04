import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function goalAddHandler() {
    setGoalList((currentGoal) => [
      ...currentGoal,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goals!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={goalAddHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={goalList}
          renderItem={(goal) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, idx) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#87cefa",
    borderRadius: 5,
    width: "70%",
    marginRight: 10,
    padding: 8,
  },
  goalContainer: {
    flex: 3,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#1e90ff",
  },
  goalText: {
    color: "#FFF",
  },
});
