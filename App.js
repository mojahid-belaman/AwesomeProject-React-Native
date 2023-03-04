import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function goalAddHandler(enteredText, setEnteredText) {
    enteredText &&
      setGoalList((currentGoal) => [
        ...currentGoal,
        { text: enteredText, id: Math.random().toString() },
      ]);
    setEnteredText("");
  }

  function goalDeleteHandler(id) {
    console.log(id);
    setGoalList((currentGoal) => currentGoal.filter((item) => item.id !== id));
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput goalAddHandler={goalAddHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={goalList}
          renderItem={(goal) => (
            <GoalItem item={goal.item} goalDeleteHandler={goalDeleteHandler} />
          )}
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
  goalContainer: {
    flex: 3,
  },
});
