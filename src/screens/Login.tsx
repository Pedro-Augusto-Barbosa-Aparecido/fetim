import { useState } from "react"

import { Button, Center, FormControl, Input, ScrollView, Text, useTheme } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Spinner } from "../components/Loading";
import { useNavigation } from "@react-navigation/native";

import Toast from "react-native-toast-message";


export function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { navigate } = useNavigation()
  const { colors } = useTheme()

  async function handleAuthenticateUser() {
    try {
      setIsSubmitting(true)

      Toast.show({
        text1: "Success",
        text2: "Login efetuado com sucesso"
      })

      navigate("home")
    } catch (err) {
      console.log(err)

      Toast.show({
        text1: "Failed",
        text2: "Não foi possível efetuar o login!",
        type: "error"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Center
      flex={1} 
      p={8}
      bgColor={"gray.900"}

      textAlign={"left"}
    >
      <Text
        fontWeight={900}
        fontFamily={"roboto"}
        fontSize={32}
        fontStyle={"normal"}

        color={"white"}
        mb={10}

      >
        Faça seu login!
      </Text>
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
          
          h={"16"}
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
          mb={2}
          mt={4}
          fontSize={20}
          fontFamily={"roboto"}
          fontWeight={500}
          color={"gray.300"}
        >
          Senha
        </Text>
        <Input 
          borderColor={"ignite.500"}
          borderWidth={1}
          borderRadius={6}

          color={"gray.200"}
          
          h={"16"}
          w={"full"}
        
          fontFamily={"roboto"}
          fontSize={"md"}

          InputLeftElement={
            showPassword ? (
              <Feather 
                name="eye"
                size={24}
                color={colors.gray[200]}
                onPress={() => setShowPassword(false)}
                style={{
                  marginLeft: 12
                }}
              />
            ) : (
              <Feather 
                name="eye-off"
                size={24}
                color={colors.gray[200]}
                onPress={() => setShowPassword(true)}
                style={{
                  marginLeft: 12
                }}
              />
            )
          }

          placeholder="Digite seu senha..."
          placeholderTextColor={colors.gray[500]}

          type={showPassword ? "text" : "password"}

          _focus={{
            borderWidth: 2,
            borderColor: "ignite.300",
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

        onPress={handleAuthenticateUser}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Spinner color={colors.white} />
        ) : (
          <Text color={"gray.100"} fontSize={16} fontWeight={"bold"}>
            Entrar
          </Text>
        )}
      </Button>

      <Text
        color={"gray.300"}
        mt={2}

        p={0}
      >
        Está com problemas para entrar? {' '} 
        <Text 
          color={"blue.800"}
          textDecorationLine={"underline"}

          onPress={() => navigate("contact_support")}
        >
          Entre em contato com o support aqui...
        </Text>
      </Text>
    </Center>
  );
}