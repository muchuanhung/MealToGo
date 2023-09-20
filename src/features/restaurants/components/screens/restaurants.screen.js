import React from "react";
import { Searchbar } from 'react-native-paper';
// import react native 原生UI套件
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../restaurant-info-card.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

//設定container css
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;

// 把inline style的設定抽出來
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

//卡片外的container容器
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
        <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
        </RestaurantListContainer>
      </SafeArea>
    </>
  )
}