import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([])

  const handleAddGoal = enteredText => {
    setAllGoals((allGoals) => [...allGoals, { id: Math.random().toString(), value: enteredText }])
  }


  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handleAddGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },


});
