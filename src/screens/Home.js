import React, { useState } from "react";
import { View, Text } from "react-native";
import { useGetMoviesListQuery } from "../redux/api/moviesApi";
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MovieCard from "../components/MovieCard";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState();

  const {
    data: moviesData,
    error: moviesError,
    isLoading: moviesLoading,
  } = useGetMoviesListQuery(searchTerm);
  return (
    <SafeAreaView
      style={{ backgroundColor: "#0E151D", marginTop: 30, flex: 1 }}
    >
      <View>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: 15,
            paddingBottom: 9,
            fontSize: 18,
          }}
        >
          Search your favourite Movie/Show
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 8,
            backgroundColor: "white",
            width: "93%",
            marginBottom: 10,
          }}
          onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
          placeholder="Search Query"
          value={searchTerm}
        />
        {/* <TouchableOpacity>
          <Text
            style={{
              color: "black",
              backgroundColor: "#6C8CB9",
              padding: 10,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Search
          </Text>
        </TouchableOpacity> */}
      </View>
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
