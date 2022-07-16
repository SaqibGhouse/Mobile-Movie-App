import React from "react";
import { View, Text } from "react-native";
import { useGetMoviesListQuery } from "../redux/api/moviesApi";
import { FlatList, SafeAreaView } from "react-native";
import MovieCard from "../components/MovieCard";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const {
    data: moviesData,
    error: moviesError,
    isLoading: moviesLoading,
  } = useGetMoviesListQuery("tom");

  return (
    <SafeAreaView
      style={{ backgroundColor: "#0E151D", marginTop: 30, flex: 1 }}
    >
      <View style={{ flex: 6 }}>
        {moviesError ? (
          <Text>Oh no, there was an error</Text>
        ) : moviesLoading ? (
          <Text>Loading...</Text>
        ) : moviesData ? (
          <>
            <View>
              <FlatList
                data={moviesData.Search}
                renderItem={({ item }) => <MovieCard moviesData={item} />}
                keyExtractor={(item) => item.imdbID}
                showsVerticalScrollIndicator={false}
                style={{ padding: 14 }}
                // ListHeaderComponent={<HomeHeader />}
              />
            </View>
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
