import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/components/screens/restaurants.screen";

 export default function App() {
  return (
    // 判斷針對不同的Platform做layout的調整
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}