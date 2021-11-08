import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Task from './components/Task';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [id, setId] = useState(0);

  const handleAdd = () => {
    setTodos(todos => [{text: input, id: id}, ...todos]);
    setInput('');
    setId(id + 1);
  };

  const removeTodo = id => setTodos(todos => todos.filter(t => t.id !== id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Yapılacaklar</Text>
          <Text style={styles.headerCounter}>0</Text>
        </View>
        <Task taskText="Çöpler atılacak" complete={true} />
        <Task taskText="Ev temizlenecek" complete={false} />
      </View>
      <AddTodo value={input}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C434D',
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: '#FFDEC9',
    fontSize: 40,
    padding: 10,
  },
  headerCounter: {
    color: '#FFDEC9',
    fontSize: 40,
    padding: 10,
  },
});

export default App;
