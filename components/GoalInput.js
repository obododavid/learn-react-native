import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [enteredText, setEnteredText] = useState('');

    const handleGetInputText = enteredText => {
        setEnteredText(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter course goal" style={styles.input} onChangeText={handleGetInputText} value={enteredText} />
            <Button title="ADD GOAL" onPress={() => props.onAddGoal(enteredText)} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
})

export default GoalInput