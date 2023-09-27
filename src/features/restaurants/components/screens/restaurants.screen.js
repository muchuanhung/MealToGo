import React, { useContext } from "react";
import { Searchbar } from 'react-native-paper';
// import react native 原生UI套件
import { FlatList } from "react-native";
import styled from "styled-components/native";

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


export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};