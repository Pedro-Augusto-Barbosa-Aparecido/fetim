import { NativeBaseProvider } from "native-base";
import { theme } from "./src/style/theme";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <NativeBaseProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}

      <StatusBar style="inverted" backgroundColor="transparent" translucent />

      <Toast position="top" topOffset={50} />
    </NativeBaseProvider>
  );
}
