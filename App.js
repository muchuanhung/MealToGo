import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/components/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

 export default function App() {
  return (
    // 判斷針對不同的Platform做layout的調整
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}