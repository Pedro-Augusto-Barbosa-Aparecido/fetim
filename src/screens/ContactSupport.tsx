import { useState } from "react";

import { HStack, Button, Center, FormControl, Input, Text, TextArea, useTheme } from "native-base";
import { Feather } from "@expo/vector-icons"
import { Spinner } from "../components/Loading";

import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

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
          borderColor={"ignite.500"}
          borderWidth={1}
          borderRadius={6}

          color={"gray.200"}
          
          h={"12"}
          w={"full"}
        
          fontFamily={"roboto"}
          fontSize={"md"}

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
          placeholderTextColor={colors.gray[500]}

          _focus={{
            borderWidth: 2,
            borderColor: "ignite.300",
          }}
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
          totalLines={9}
          autoCorrect={false} 
          autoCompleteType={undefined}       
          color={"gray.300"}

          placeholder="Descreva seu problema aqui..."
          placeholderTextColor={colors.gray[500]}

          fontSize={16}

          borderColor={"ignite.500"}
          borderWidth={1}
          borderRadius={4}
          h={32}

          _focus={{
            borderColor: "ignite.300",
            color: "gray.200"
          }}
        />
      </FormControl>

      <Button
        mt={8}
        w="full"
        h={12}

        bgColor={"ignite.500"}

        _pressed={{
          bgColor: "ignite.300"
        }}

        onPress={handleSendMessageToSupport}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Spinner color={colors.white} />
        ) : (
          <Text color={"gray.100"} fontSize={16} fontWeight={"bold"}>
            Enviar Suporte
          </Text>
        )}
      </Button>
    </Center>
  )
}