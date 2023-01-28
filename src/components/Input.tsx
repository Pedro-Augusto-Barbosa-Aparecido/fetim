import {
  Input as NativeInput,
  IInputProps,
  useTheme,
  FormControl,
  Text,
} from "native-base";

interface InputProps extends IInputProps {
  errorMessage?: string;
}

export function Input({ errorMessage, isInvalid, ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
    <FormControl isInvalid={isInvalid}>
      <NativeInput
        borderColor={"ignite.500"}
        borderWidth={1}
        borderRadius={6}
        color={"gray.200"}
        h={"12"}
        w={"full"}
        fontFamily={"roboto"}
        fontSize={"md"}
        placeholderTextColor={colors.gray[500]}
        isInvalid={isInvalid}
        _focus={{
          borderWidth: 2,
          borderColor: "ignite.300",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        <Text fontSize={"sm"}>{errorMessage}</Text>
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
