import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Task = () => {
  return (
    <View style={styles.item}>
      {/* <Text>Task</Text> this is a {props.text} */}
      <View style={styles.itemLeft}>
        <View style={styles.squareIcon}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        {/* ciruclar icon */}
        <View style={styles.circularIcon}></View>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  squareIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginright: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circularIcon: {
    width: 12,
    height: 12,
    borderColor: "#5BCF6",
    borderWidth: 2,
    borderRadius: 6,
  },
});
