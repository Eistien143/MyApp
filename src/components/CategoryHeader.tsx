import * as React from 'react';
import { Text, StyleSheet } from 'react-native';


const CategoryHeader = (props: any) => {
    return (
        <Text style={styles.text}>{props.title}</Text>
    );
};


const styles = StyleSheet.create({
    text: {
        fontFamily: 'semibold',
        fontWeight: '700',
        fontSize: 15,
        color: '#ffdddd',
        padding: 16,
        paddingVertical: 10,
    },
});
export default CategoryHeader;
