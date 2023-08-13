/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



const CastCard = (props: any) => {
    return (
        <View style={[styles.container, props.shouldMarginatedAtEnd ? props.isFirst ? { marginLeft: 22 } : props.isLast ? { marginRight: 22 } : {} : {}, props.shouldMarginatedAtAround ? { margin: 12 } : {}, { maxWidth: props.cardWidth }]}>
            <Image source={{ uri: props.imagePath }} style={[styles.cardImage, { width: props.cardWidth }]} />
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            <Text style={styles.subTitle} numberOfLines={1}>{props.subtitle}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    cardImage: {
        aspectRatio: 1920 / 2880,
        borderRadius: 50,
    },
    title: {
        alignSelf: 'stretch',
        fontFamily: 'poppins-medium',
        color: 'white',
        fontSize: 15,
    },
    subTitle: {
        alignSelf: 'stretch',
        fontFamily: 'poppins-medium',
        color: 'white',
        fontSize: 10,
    },

});
export default CastCard;
