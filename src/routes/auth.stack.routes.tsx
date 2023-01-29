import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/auth/Login";
import { ContactSupport } from "../screens/ContactSupport";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={Login} />
      <Screen name="contact_support" component={ContactSupport} />
    </Navigator>
  );
}
