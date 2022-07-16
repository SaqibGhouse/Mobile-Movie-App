import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useGetMoviesListQuery } from "../redux/api/moviesApi";


const HomeHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useGetMoviesListQuery(searchTerm);

  return (
    <SafeAreaView style={{ marginBottom: 10 }}>
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
            width: "66%",
          }}
          onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
          // onChangeText={setSearchTerm}
          value={searchTerm}
        />
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
