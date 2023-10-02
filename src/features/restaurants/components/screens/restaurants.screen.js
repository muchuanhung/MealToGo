import React, { useContext } from "react";
import { Searchbar } from 'react-native-paper';
// import react native 原生UI套件
import { FlatList } from "react-native";
import styled from "styled-components/native";
// import react loading 原生UI套件
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../restaurant-info-card.component";
import { SafeArea } from "../../../../utils/safe-area.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;

// 把inline style的設定抽出來
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

// loading animation css設定
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};