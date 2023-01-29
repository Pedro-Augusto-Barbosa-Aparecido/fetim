import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.stack.routes";
import { View } from "native-base";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AppRoutes } from "./app.drawer.routes";

export function Routes() {
  const { user } = useContext(AuthContext);

  const userIsAuthenticate = !user;

  return (
    <View flex={1} bgColor={"gray.900"}>
      <NavigationContainer>
        {userIsAuthenticate ? <AuthRoutes /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  );
}
