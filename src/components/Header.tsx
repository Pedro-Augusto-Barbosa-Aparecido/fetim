import { Box, useTheme } from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = {
  onMenuButtonPress: () => void;
};

export function Header({ onMenuButtonPress }: Props) {
  const { colors } = useTheme();

  return (
    <Box flexDirection="row" justifyContent="flex-start">
      <Entypo
        name="menu"
        size={40}
        color={colors.gray[500]}
        onPress={onMenuButtonPress}
      />
    </Box>
  );
}
