import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isVisible, setIsVisisble] = useState(false);

  function startAddGoal() {
    setIsVisisble(true);
  }

  function endAddGoal() {
    setIsVisisble(false);
  }

  function goalAddHandler(enteredText, setEnteredText) {
    enteredText &&
      setGoalList((currentGoal) => [
        ...currentGoal,
        { text: enteredText, id: Math.random().toString() },
      ]);
    setEnteredText("");
    setIsVisisble(false);
  }

  function goalDeleteHandler(id) {
    setGoalList((currentGoal) => currentGoal.filter((item) => item.id !== id));
  }
  return (
    <View style={styles.appContainer}>
      <Button title={"Add New Goal"} onPress={startAddGoal} />
      {isVisible && (
        <GoalInput
          visisble={isVisible}
          onEndAddGoal={endAddGoal}
          goalAddHandler={goalAddHandler}
        />
      )}
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
  goalButton: {
    backgroundColor: "1e90ff",
    color: "#FFFFFF",
  },
});
