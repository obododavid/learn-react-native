import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'grey',
    }
})

export default GoalItem;