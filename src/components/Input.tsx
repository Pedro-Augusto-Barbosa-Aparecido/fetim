import {
  Input as NativeInput,
  IInputProps,
  useTheme,
  FormControl,
} from "native-base";

interface InputProps extends IInputProps {
  errorMessage?: string;
}

export function Input({ errorMessage, ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
    <FormControl>
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
        _focus={{
          borderWidth: 2,
          borderColor: "ignite.300",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
