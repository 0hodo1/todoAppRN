import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './AddTodo.style';

const AddTodo = () => {
  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={styles.addTodoInput}
        placeholder={'Yapılacak...'}
        placeholderTextColor="#FFDEC9"></TextInput>
        <View style={styles.seperator}/>
      <TouchableOpacity style={styles.addTodoButton}>
        <Text style={styles.addTodoButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
