import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [allGoals, setAllGoals] = useState([])

  const handleGetInputText = enteredText => {
    setEnteredText(enteredText)
  }

  const handleAddGoal = () => {
    setAllGoals((allGoals) => [...allGoals, enteredText])
  }


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter course goal" style={styles.input} onChangeText={handleGetInputText} value={enteredText} />
        <Button title="ADD" onPress={handleAddGoal} />
      </View>
      <View>
        {allGoals.map((goal, i) => <Text key={i}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
