import { Input as NativeInput, IInputProps, useTheme } from "native-base";

interface InputProps extends IInputProps {};

export function Input({ ...rest }: InputProps) {
  const { colors } = useTheme();

  return (
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
  );
}
