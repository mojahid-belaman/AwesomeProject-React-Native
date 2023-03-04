import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={() => props.goalDeleteHandler(props.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
