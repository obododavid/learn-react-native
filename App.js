import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([])

  const handleAddGoal = enteredText => {
    setAllGoals((allGoals) => [...allGoals, { id: Math.random().toString(), value: enteredText }])
  }

  const handleRemoveGoal = (id) => {
    setAllGoals((allGoals) => {
      return allGoals.filter(goal => goal.id !== id)
    })
  }



  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handleAddGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={handleRemoveGoal} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },


});
