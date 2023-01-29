import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
} from "@react-navigation/drawer";
import { UserInfo } from "../UserInfo";

import { useWindowDimensions } from "react-native";

export function DrawerContent(props: DrawerContentComponentProps) {
  const { height } = useWindowDimensions();

  return (
    <DrawerContentScrollView {...props} style={{ flex: 1, height }}>
      <UserInfo />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
