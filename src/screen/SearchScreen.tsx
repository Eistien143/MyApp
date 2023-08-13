import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, FlatList } from 'react-native';
import { baseImagePath, searchMovies } from '../api/apiCalls';
import InputHeader from '../components/InputHeader';
import SubMovieCart from '../components/SubMovieCart';



const { width } = Dimensions.get('window');
const SearchScreen = ({ navigation }: any) => {
    const [searchList, setSearchList] = React.useState<any>([]);
    const searchMoviesFunction = async (name: string) => {
        try {
            let res = await fetch(searchMovies(name));
            let data = await res.json();
            setSearchList(data.results);
        } catch (err) {
            console.error('something went wrong', err);
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View>

                <FlatList
                    data={searchList}
                    keyExtractor={(item: any) => item.id}
                    numColumns={2}
                    ListHeaderComponent={
                        <View style={styles.InputHeaderContainer}>
                            <InputHeader searchFunction={searchMoviesFunction} />
                        </View>
                    }
                    bounces={false}
                    contentContainerStyle={styles.centercontainer}
                    renderItem={({ item }) => (
                        <SubMovieCart
                            shouldMarginatedAtEnd={false}
                            shouldMarginatedAtAround={true}
                            cardFunction={() => {
                                navigation.push('MovieDetails', {
                                    movieId: item.id,
                                });
                            }}
                            cardWidth={width / 2 - 12 * 2}
                            title={item.original_title}
                            imagePath={baseImagePath('w342', item.poster_path)} />
                    )}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        width,
    },
    InputHeaderContainer: {
        marginHorizontal: 30,
        margin: 15,
        display: 'flex',
        marginBottom: 28 - 12,

    },
    centercontainer: {
        alignItems: 'center',

    },
});
export default SearchScreen;
