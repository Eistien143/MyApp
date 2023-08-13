import * as React from 'react';
import { ActivityIndicator, Alert, ScrollView, StatusBar, StyleSheet, View, FlatList } from 'react-native';
import { upComingMovies, nowPlayingMovies, popularMovies, baseImagePath } from '../api/apiCalls';
import InputHeader from '../components/InputHeader';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCart from '../components/SubMovieCart';
import { Dimensions } from 'react-native';
import MovieCard from '../components/MovieCard';

const getNowPlayingMoviesList = async () => {
  try {
    const res = await fetch(nowPlayingMovies);
    const data = await res.json();
    return data;


  } catch (e: any) {
    Alert.alert('Something went wrong', e);
  }
};
const getPopularMoviesList = async () => {
  try {
    const res = await fetch(popularMovies);
    const data = await res.json();
    return data;
  } catch (e: any) {
    Alert.alert('Something went wrong', e);
  }
};
const getUpComingMoviesList = async () => {
  try {
    const res = await fetch(upComingMovies);
    const data = await res.json();
    return data;
  } catch (e: any) {
    Alert.alert('Something went wrong', e);
  }
};
const HomeScreen = ({ navigation }: any) => {
  const [popularMoviesList, setPopularMoviesList] = React.useState<any>(undefined);
  const [upComingMoviesList, setUpComingMoviesList] = React.useState<any>(undefined);
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = React.useState<any>(undefined);
  const { width } = Dimensions.get('window');
  React.useEffect(() => {
    (async () => {
      let tempnowPlayingMoviesList = await getNowPlayingMoviesList();
      setNowPlayingMoviesList([{ id: 'dummy1' }, ...tempnowPlayingMoviesList.results, { id: 'dummy2' }]);
      let temppopularMoviesList = await getPopularMoviesList();
      setPopularMoviesList(temppopularMoviesList.results);
      let tempupComingMoviesList = await getUpComingMoviesList();
      setUpComingMoviesList(tempupComingMoviesList.results);
    })();
  }, []);
  const searchMoviesFunction = () => {
    navigation.navigate('Search');
  };
  if (nowPlayingMoviesList === undefined &&
    popularMoviesList === undefined &&
    upComingMoviesList === undefined
  ) {
    return (
      <ScrollView style={styles.container} bounces={false} contentContainerStyle={styles.scrollViewController}>
        <StatusBar hidden />
        <View style={styles.InputHeaderContainer}>
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={'#ff0000'} />
        </View>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.container} bounces={false}  >
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View>
      <CategoryHeader title={'Now Playing'} />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.5}
        snapToInterval={width * 0.7 + 36}
        contentContainerStyle={styles.containerGap}
        renderItem={({ item, index }) => {
          if (!item.original_title) {
            return (
              <View style={{
                width: (width - (width * 0.7 + 36 * 2)) / 2,
              }} />
            );
          }
          return (
            <MovieCard
              shouldMarginatedAtEnd={true}
              shouldMarginatedAtAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {
                  movieId: item.id,
                });
              }}
              cardWidth={width * 0.7}
              isFirst={index === 0 ? true : false}
              isLast={index === upComingMoviesList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w780', item.poster_path)}
              genre={item.genre_ids.slice(1, 4)}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          );
        }}
      />
      <CategoryHeader title={'Popular'} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap}
        renderItem={({ item, index }) => (
          <SubMovieCart
            shouldMarginatedAtEnd={true}
            shouldMarginatedAtAround={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {
                movieId: item.id,
              });
            }}
            cardWidth={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === upComingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)} />

        )}
      />
      <CategoryHeader title={'Up Coming'} />
      <FlatList
        data={upComingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap}
        renderItem={({ item, index }) => (
          <SubMovieCart
            shouldMarginatedAtEnd={true}
            shouldMarginatedAtAround={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {
                movieId: item.id,
              });
            }}
            cardWidth={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === upComingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)} />

        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewController: {
    flex: 1,
  },
  InputHeaderContainer: {
    marginHorizontal: 30,
    marginTop: 15,
  },
  containerGap: {
    gap: 15,
  },
});

export default HomeScreen;

