import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { ContactSupport } from "../screens/ContactSupport";
import { Home } from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="login" component={Login} />
      <Screen name="home" component={Home} />
      <Screen name="contact_support" component={ContactSupport} />
    </Navigator>
  );
}
