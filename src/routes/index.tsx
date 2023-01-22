import { NavigationContainer } from "@react-navigation/native"
import { AuthRoutes } from "./app.stack.routes";
import { View } from "native-base";

export function Routes() {
  return (
    <View
      flex={1}
      bgColor={"gray.900"}
    >
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  )
}
