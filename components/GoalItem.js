import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderLeftColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
