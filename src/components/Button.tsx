import { Button as NativeButton, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  text: string;
};

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <NativeButton
      mt={8}
      w="full"
      h={12}

      bgColor={"ignite.500"}

      _pressed={{
        bgColor: "ignite.300"
      }}

      {...rest}
    >
      <Text color={"gray.100"} fontSize={16} fontWeight={"bold"}>
        { text }
      </Text>
    </NativeButton>
  );
}