import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
} from "@react-navigation/drawer";
import { UserInfo } from "../UserInfo";

import { Box, Text, useTheme, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function DrawerContent(props: DrawerContentComponentProps) {
  const { colors } = useTheme();
  const { handleSignOut } = useContext(AuthContext);

  return (
    <VStack flex={1}>
      <DrawerContentScrollView {...props}>
        <UserInfo />
        <Box>
          <DrawerItemList {...props} />
        </Box>
      </DrawerContentScrollView>
      <VStack
        borderTopWidth={1}
        p={4}
        justifyContent="flex-end"
        borderTopColor="gray.500"
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          onPress={handleSignOut}
        >
          <MaterialIcons name="logout" size={24} color={colors.gray[200]} />
          <Text ml={4} fontSize="lg" color="gray.200">
            Sair
          </Text>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}
