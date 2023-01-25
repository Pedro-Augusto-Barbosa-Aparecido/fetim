import {
  TextArea as NativeTextArea,
  ITextAreaProps,
  useTheme,
} from "native-base";

interface TextAreaProps extends ITextAreaProps {}

export function TextArea({ ...rest }: TextAreaProps) {
  const { colors } = useTheme();

  return (
    <NativeTextArea
      totalLines={9}
      autoCorrect={false}
      autoCompleteType={undefined}
      color={"gray.300"}
      placeholderTextColor={colors.gray[500]}
      fontSize={16}
      borderColor={"ignite.500"}
      borderWidth={1}
      borderRadius={4}
      h={32}
      _focus={{
        borderColor: "ignite.300",
        color: "gray.200",
      }}
      {...rest}
    />
  );
}
