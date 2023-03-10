import { Box, HStack, Text, useTheme } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function UserInfo() {
  const { colors } = useTheme();
  const { user } = useContext(AuthContext);

  return (
    <Box p={3} flexDirection="column">
      <HStack flex={1} justifyContent="space-between" alignItems="flex-start">
        <FontAwesome
          name="user-circle"
          size={64}
          color={colors.warmGray[900]}
          onPress={() => {}}
        />
      </HStack>

      <Text color={colors.gray[200]} marginY={4}>
        {user?.email}
      </Text>
      {user?.displayName && (
        <Text color={colors.gray[200]} marginY={4}>
          {user?.displayName}
        </Text>
      )}
    </Box>
  );
}
