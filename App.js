import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";

//additional imports
import Task from "./components/task";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";

export default function App() {
  //input area
  const [task, setTask] = useState();

  //to store all tasks
  const [taskItems, setTaskItems] = useState([]);

  //event listener logic
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  //event listener logic for deleting a task
  const completeTask = (index) => {
    let copyItems = [...taskItems];
    //remove the specific task as selected by the user
    copyItems.splice(index, 1);
    //update the original array by rewriting it with the copied array
    setTaskItems(copyItems);
  };

  //another event handler to update tasks
  //logic will be similar to completeTask() function
  //Modal [overlay]

  return (
    <View style={styles.container}>
      {/* list all the to do items */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My to do items</Text>

        {/* container for all tasks to be rendered */}
        <View style={styles.items}>
          {/*<Task text={"this is task 1"} />*/}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* user input for todo tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add your to do item here"}
          value="task"
          onChangeText={(text) => setTask()}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
            {/* <Image source={require('./assets/splash.png')}></Image> */}
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
