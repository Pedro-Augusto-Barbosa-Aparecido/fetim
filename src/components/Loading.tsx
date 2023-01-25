import { Center, useTheme } from "native-base";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

interface SpinnerProps extends ActivityIndicatorProps {}

export function Spinner({ ...rest }: SpinnerProps) {
  const { colors } = useTheme();

  return <ActivityIndicator color={colors.ignite[500]} size={20} {...rest} />;
}

export function Loading() {
  return (
    <Center flex={1} bgColor={"gray.900"}>
      <Spinner size={32} />
    </Center>
  );
}
