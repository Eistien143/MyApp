/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
const SubMovieCart = (props: any) => {
    return (
        <TouchableOpacity onPress={() => props.cardFunction()}>
            <View style={[styles.container,
            props.shouldMarginatedAtEnd
                ? props.isFirst

                    ? { marginLeft: 30 }
                    : props.isLast
                        ? { marginRight: 30 }
                        : {}
                : {},
            props.shouldMarginatedAtAround
                ? { margin: 12 }
                : {},
            { maxWidth: props.cardWidth }]}>
                <Image style={[styles.image, { width: props.cardWidth }]}
                    source={{ uri: props.imagePath }} />
                <Text numberOfLines={1} style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'black',
        borderRadius: 20,

    },
    image: {
        aspectRatio: 2 / 3,
        borderRadius: 20,
    },
    text: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 3,
    },
});
export default SubMovieCart;
