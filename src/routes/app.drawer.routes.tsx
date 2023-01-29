import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import { DrawerContent } from "../components/drawer/DrawerContent";
import { ContactSupport } from "../screens/ContactSupport";
import { Home } from "../screens/Home";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createDrawerNavigator();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.gray[500],
        drawerActiveTintColor: colors.blue[600],
        drawerInactiveTintColor: colors.gray[200],
        drawerStyle: {
          backgroundColor: colors.gray[600],
        },
        drawerLabelStyle: {
          marginLeft: -25,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Support"
        component={ContactSupport}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="contact-support" size={20} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
