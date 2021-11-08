import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './Task.style';

const Task = props => {
  return (
    <TouchableOpacity onPress={()=>{}}>
      {props.complete && (
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{props.taskText}</Text>
        </View>
      )}
      {!props.complete && (
        <View style={styles.completeTask}>
          <Text style={styles.completeTaskText}>{props.taskText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Task;
