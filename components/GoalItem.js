import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#000',
        color: '#fff',
    }
})

export default GoalItem;