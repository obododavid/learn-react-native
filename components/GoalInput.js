import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredText, setEnteredText] = useState('');

    const handleGetInputText = enteredText => {
        setEnteredText(enteredText)
    }

    const handleOnPress = () => {
        props.onAddGoal(enteredText);
        setEnteredText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter course goal"
                    style={styles.input}
                    onChangeText={handleGetInputText}
                    value={enteredText} />
                <View style={styles.buttonContainer}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    <Button title="ADD" onPress={handleOnPress} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'

    }
})

export default GoalInput