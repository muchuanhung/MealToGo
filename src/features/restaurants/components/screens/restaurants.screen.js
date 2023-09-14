import React from "react";
import { Searchbar } from 'react-native-paper';
import { StatusBar, SafeAreaView} from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../restaurant-info-card.component";

//設定container css
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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