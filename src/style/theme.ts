import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    gray: {
      100: "#E1E1E6",
      200: "#A9A9B2",
      400: "#7C7C8A",
      500: "#505059",
      600: "#323238",
      700: "#29292E",
      800: "#202024",
      900: "#121214",
    },

    ignite: {
      300: "#00B37E",
      500: "#00875F",
      700: "#015F43",
      900: "#00291D",
    },

    red: {
      600: "#F75A68",
      700: "#dc2626",
      800: "#b91c1c",
      900: "#7f1d1d",
    },
  },
  fontConfig: {
    Roboto: {
      400: {
        normal: "Roboto_400Regular",
      },
      500: {
        normal: "Roboto_500Medium",
      },
      700: {
        normal: "Roboto_700Bold",
      },
      900: {
        normal: "Roboto_900Black",
      },
    },
  },
  fonts: {
    roboto: "Roboto",
  },
});
