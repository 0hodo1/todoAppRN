import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  taskContainer: {
    backgroundColor: '#A8A899',
    padding: 15,
    borderRadius: 5,
    margin: 5,
  },
  taskText: {
    fontSize: 18,
    color: 'white',
  },
  completeTask: {
    backgroundColor: '#5F6E6C',
    padding: 15,
    borderRadius: 5,
    margin: 5,

  },
  completeTaskText: {
    color: '#FFDEC9',
    fontSize: 18,
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
});
