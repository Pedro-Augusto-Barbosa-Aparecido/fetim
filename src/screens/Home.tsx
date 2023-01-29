import { VStack, Text, Center } from "native-base";
import { Header } from "../components/Header";

import { DrawerScreenProps } from "@react-navigation/drawer";

export function Home({ navigation }: DrawerScreenProps<any>) {
  return (
    <VStack paddingX={3} paddingY={6} flex={1} bgColor="gray.900">
      <Header onMenuButtonPress={() => navigation.toggleDrawer()} />
      <Center flex={1}>
        <Text color={"white"}>Home</Text>
      </Center>
    </VStack>
  );
}
