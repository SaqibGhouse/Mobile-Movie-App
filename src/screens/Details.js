import { View, Text, SafeAreaView, StyleSheet, Image, Scr } from "react-native";
import React from "react";
import { useGetMovieDetailByIDQuery } from "../redux/api/moviesApi";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const route = useRoute();
  const movieDetail = route.params.moviesData;
  const { data, error, isLoading } = useGetMovieDetailByIDQuery(
    movieDetail.imdbID
  );

  return (
    <SafeAreaView
      style={{ backgroundColor: "#0E151D", marginTop: 30, flex: 1 }}
    >
      <View>
        {error ? (
          <Text style={styles.textColorPrimary}>Oh no, there was an error</Text>
        ) : isLoading ? (
          <Text style={styles.textColorPrimary}>Loading...</Text>
        ) : data ? (
          <View>
            <Text style={styles.moviesTitle}>Movie Details</Text>
            <Image
              style={styles.mainImage}
              source={{
                uri: data.Poster,
              }}
            />
            <Text style={styles.movieTitle}>{data.Title}</Text>
            <Text style={styles.textColorPrimary}>{data.Actors}</Text>
            <Text style={styles.textColorPrimary}>{data.Awards}</Text>
            <Text style={styles.textColorPrimary}>{data.Country}</Text>
            <Text style={styles.textColorPrimary}>{data.Director}</Text>
            <Text style={styles.textColorPrimary}>{data.Genre}</Text>
            <Text style={styles.textColorPrimary}>{data.Language}</Text>
            <Text style={styles.textColorPrimary}>{data.Plot}</Text>
            <Text style={styles.textColorPrimary}>{data.Released}</Text>
            <Text style={styles.textColorPrimary}>{data.BoxOffice}</Text>
            <Text style={styles.textColorPrimary}>{data.imdbRating}</Text>
            <Text style={styles.textColorPrimary}>{data.imdbVotes}</Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textColorPrimary: {
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  mainImage: {
    width: "100%",
    height: "45%",
    marginTop: 20,
    resizeMode: "contain",
    backgroundColor: "#18202C",
  },
  moviesTitle: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  moviePara: {
    flexDirection: "row",
  },
  movieTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default Details;
