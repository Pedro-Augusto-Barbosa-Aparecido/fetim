import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import { DrawerContent } from "../components/drawer/DrawerContent";
import { ContactSupport } from "../screens/ContactSupport";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createDrawerNavigator();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerContentContainerStyle: {
          flex: 1,
          justifyContent: "space-between",
        },
        drawerStyle: {
          paddingBottom: 100,
          backgroundColor: colors.gray[600],
        },
        drawerLabelStyle: {
          color: colors.gray[300],
        },
        drawerActiveBackgroundColor: colors.gray[500],
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Support" component={ContactSupport} />
    </Navigator>
  );
}
