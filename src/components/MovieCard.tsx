/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const genre: any = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western' };
const MovieCard = (props: any) => {
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
                <View>
                    <View style={styles.rating}>
                        <Icon name="star" style={styles.starIcon} />
                        <Text style={styles.voteText}>{props.vote_average}({props.vote_count})
                        </Text>
                    </View>
                    <Text numberOfLines={1} style={styles.text}>
                        {props.title}
                    </Text>
                    <View style={styles.genre}>
                        {
                            props.genre.map((item: any) => {
                                return (
                                    <View key={item} style={styles.genreBox}>
                                        <Text style={styles.genreText}>
                                            {genre[item]}
                                        </Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
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
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
    },
    genreText: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: '#CFCACA',
    },
    genreBox: {
        borderColor: '#F4EBEB',
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    rating: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    starIcon: {
        fontSize: 20,
        color: 'yellow',
    },
    genre: {
        flex: 1,
        flexDirection: 'row',
        gap: 18,
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    voteText: {
        fontFamily: 'poppins-medium',
        fontSize: 12,
        color: 'white',
    },
});
export default MovieCard;
