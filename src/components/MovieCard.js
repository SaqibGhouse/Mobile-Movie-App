import { View, Text } from "react-native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ moviesData }) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("Details", { moviesData });
  };
  return (
    <View style={{ backgroundColor: "#18202C", marginBottom: 20 }} onPress>
      <TouchableOpacity onPress={handleNavigate}>
        <View
          style={{
            height: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: moviesData.Poster }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View
          style={{
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            {moviesData.Title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
