import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  return (
    <Modal visible={props.visisble} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.img}
          source={require("../assets/Images/target.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goals!"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="Close"
              onPress={() => props.onEndAddGoal()}
              color={"#ff1493"}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="Add Goal"
              onPress={() => props.goalAddHandler(enteredText, setEnteredText)}
              color={"#4169e1"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#87cefa",
    borderRadius: 5,
    width: "100%",
    padding: 8,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btn: {
    width: 100,
    marginHorizontal: 16,
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
