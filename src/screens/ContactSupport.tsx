import { useState } from "react";

import { HStack, Center, FormControl, Text, useTheme } from "native-base";
import { Feather } from "@expo/vector-icons"

import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";

export function ContactSupport() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { colors } = useTheme()
  const { goBack } = useNavigation()

  async function handleSendMessageToSupport() {
    try {
      setIsSubmitting(true)

      Toast.show({
        text1: "Success",
        text2: "Suporte enviado com sucesso"
      })
    } catch (err) {
      console.log(err)

      Toast.show({
        text1: "Failed",
        text2: "Não foi possível enviar o suporte!",
        type: "error"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Center
      bgColor={"gray.900"}
      flex={1}

      textAlign={"left"}
      color={"white"}

      p={8}
    >
      <HStack
        alignItems="flex-start"
        justifyContent="space-between"

        w="full"

        position="absolute"

        top={12}
      >
        <Feather 
          name="arrow-left"
          size={36}
          color={colors.gray[500]}

          onPress={goBack}
        />

        <Text
          color={"white"}
          fontWeight={900}
          fontFamily={"roboto"}
          fontSize={24}
          fontStyle={"normal"}
        >
          Support
        </Text>
      </HStack>

      <FormControl>
        <Text
          mb={2}
          fontSize={20}
          fontFamily={"roboto"}
          fontWeight={500}
          color={"gray.300"}
        >
          E-mail
        </Text>
        <Input
          InputLeftElement={
            <Feather 
              name="user"
              size={24}
              color={colors.gray[200]}
              style={{
                marginLeft: 12
              }}
            />
          }

          placeholder="Digite seu email..."

        />

        <Text
          color={"gray.300"}
          fontSize={20}
          mb={2}
          mt={4}
        >
          Descrição do problema
        </Text>
        <TextArea
          placeholder="Descreva seu problema aqui..."
        />
      </FormControl>

      <Button 
        text="Enviar Suporte"
        disabled={isSubmitting}
        isLoading={isSubmitting}

        onPress={handleSendMessageToSupport}
      />
    </Center>
  )
}