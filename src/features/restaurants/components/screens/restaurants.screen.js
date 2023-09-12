import React from "react";
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView} from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../restaurant-info-card.component";

//設定container css
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: orange;
`;

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeArea>
    </>
  )
}