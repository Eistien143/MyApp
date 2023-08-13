/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, StatusBar, ImageBackground, Image, FlatList } from 'react-native';
import { baseImagePath, movieCastDetails, movieDetails } from '../api/apiCalls';
import { useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import CategoryHeader from '../components/CategoryHeader';
import CastCard from '../components/CastCard';
import Icon from 'react-native-vector-icons/FontAwesome';


const getMovieDetails = async (id: number) => {
    try {
        const res = await fetch(movieDetails(id));
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('something went wrong', err);
    }
};

const getMovieCastDetails = async (id: number) => {
    try {
        const res = await fetch(movieCastDetails(id));
        const data = await res.json();
        return data;
    } catch (err) {
        console.error('something went wrong', err);
    }
};
const MovieDetails = ({ navigation, route }: any) => {
    const [movieData, setMovieData] = React.useState<any>(undefined);
    const [castData, setCastData] = React.useState<any>(undefined);
    useEffect(() => {
        (async () => {
            let movieD = await getMovieDetails(route.params.movieId);
            setMovieData(movieD);
        })();
        (async () => {
            let castD = await getMovieCastDetails(route.params.movieId);
            setCastData(castD.cast);
        })();
    }, []);

    if (movieData === undefined && castData === undefined) {
        return (
            <ScrollView style={styles.container} bounces={false} contentContainerStyle={styles.scrollViewController} showsVerticalScrollIndicator={false}>
                <View style={styles.appheader}>
                    <AppHeader name="close" header={'Movie Details'} action={() => navigation.goBack()} />
                </View>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={'large'} color={'#ff0000'} />
                </View>
            </ScrollView>
        );
    }
    return (
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <StatusBar hidden />
            <View>
                <ImageBackground source={{ uri: baseImagePath('w780', movieData?.backdrop_path) }} style={styles.image}>
                    <LinearGradient colors={['rgba(0,0,0,0.1)', 'black']} style={styles.linearGradient}>
                        <View style={styles.appheader}>
                            <AppHeader name="close" header={''} action={() => navigation.goBack()} />
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <View style={styles.image} />
                <Image
                    source={{ uri: baseImagePath('w342', movieData?.poster_path) }} style={styles.cardImage} />
            </View>
            <View style={styles.timeContainer}>
                <Icon name="clock-o" style={styles.icon} />
                <Text style={styles.runTime}>{Math.floor(movieData?.runtime / 60)}h{Math.floor(movieData?.runtime % 60)}m</Text>
            </View>
            <View>
                <Text style={styles.title}>{movieData?.title}</Text>
                <View style={styles.genreContainer}>
                    {
                        movieData?.genres.map((item: any) => {
                            return (
                                <View key={item.id} style={styles.genreBox} >
                                    <Text style={styles.genresText}>{item.name}</Text>
                                </View>
                            );
                        })
                    }
                </View>
                <Text style={styles.tagline}>{movieData?.tagline}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.rateContainer}>
                    <Icon name="star" style={styles.Icon} />
                    <Text style={styles.runTimeText}>{movieData?.vote_average.toFixed(1)}({movieData?.vote_count})</Text>
                    <Text style={styles.runTimeText}>{movieData?.release_date.substring(8, 10)}{' '} {new Date(movieData?.release_date).toLocaleString('default', { month: 'long' })}{''}{movieData.release_date.substring(0, 4)}</Text>
                </View>
                <Text style={styles.description}>{movieData?.overview}</Text>
            </View>
            <View>
                <CategoryHeader title={'Top Cast'} />
                <FlatList data={castData} keyExtractor={(item: any) => item.id}
                    horizontal contentContainerStyle={styles.containerGap}
                    renderItem={({ item, index }) => (
                        <CastCard
                            shouldMarginatedAtEnd={true}
                            cardWidth={50}
                            isFirst={index === 0 ? true : false}
                            isLast={index === castData?.length - 1 ? true : false}
                            imagePath={baseImagePath('w185', item.profile_path)}
                            title={item.original_name}
                            subtitle={item.character}
                        />
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'black',
        flex: 1,

    },
    containerGap: {
        gap: 25,
    },
    runTimeText: {
        fontFamily: 'poppins-medium',
        fontSize: 12,
        color: 'white',
    },
    infoContainer: {
        marginHorizontal: 24,
    },
    rateContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    Icon: {
        fontSize: 20,
        color: 'yellow',
    },
    description: {
        fontFamily: 'poppins-light',
        fontSize: 14,
        color: 'white',

    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
    },
    genreBox: {
        borderColor: 'white',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    genresText: {
        fontFamily: 'poppins-medium',
        fontSize: 12,
        color: 'white',
    },
    tagline: {
        fontFamily: 'poppins-regular',
        fontSize: 14,
        fontStyle: 'italic',
        color: 'white',
        marginHorizontal: 30,
        marginVertical: 15,
        textAlign: 'center',
    },
    title: {
        fontFamily: 'poppins-regular',
        fontSize: 20,
        color: 'white',
        marginHorizontal: 30,
        marginVertical: 15,
        textAlign: 'center',
    },
    runTime: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        color: 'white',
    },
    timeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    icon: {
        fontSize: 20,
        color: 'white',
        margin: 8,
    },
    linearGradient: {
        height: '100%',
    },
    cardImage: {
        width: '60%',
        aspectRatio: 2 / 3,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    appheader: {
        marginHorizontal: 30,
        marginTop: 40,

    },
    image: {
        width: '100%',
        aspectRatio: 3072 / 1727,
    },
    scrollViewController: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default MovieDetails;

