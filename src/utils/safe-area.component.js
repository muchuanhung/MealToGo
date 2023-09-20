import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

//設定container css
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;