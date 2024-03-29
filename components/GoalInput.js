import react, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    //<Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your Text Here"
        onChangeText={goalInputHandler}
        style={styles.input}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
        <Button title="ADD" color="green" onPress={addGoalHandler} />
        <Button title="CANCEL" color="red" onPress={props.onCancel} />
      </View>
    </View>
    //  </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GoalInput;
