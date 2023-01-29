import { useState } from "react";

import { Center, ScrollView, Text, View, useTheme } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Toast from "react-native-toast-message";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as zod from "zod";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import auth from "@react-native-firebase/auth";

const loginSchema = zod.object({
  email: zod
    .string({ required_error: "E-mail precisa ser informado." })
    .email({ message: "Você precisa inserir um e-mail válido!" })
    // .regex(
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
    //   { message: "Você precisa inserir um e-mail válido!" }
    // )
    .min(5, { message: "O e-mail precisa ter no mínimo 5 caracteres!" }),
  password: zod
    .string({ required_error: "Informe uma senha!" })
    .trim()
    .min(5, { message: "A senha precisa ter no mínimo 5 caracteres!" }),
});

type LoginFormData = zod.output<typeof loginSchema>;

export function Login() {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function handleAuthenticateUser(data: LoginFormData) {
    const { email, password } = data;

    try {
      await auth().signInWithEmailAndPassword(email, password);

      Toast.show({
        text1: "Success",
        text2: "Login efetuado com sucesso",
      });

      // navigate("home");
    } catch (err) {
      console.log(err);
      Toast.show({
        text1: "Failed",
        text2: "Não foi possível efetuar o login!",
        type: "error",
      });
    }
  }

  return (
    <ScrollView
      // flex={1}
      contentContainerStyle={{
        // flex: 1,
        flexGrow: 1,
      }}
    >
      <Center flex={1} p={8} bgColor={"gray.900"} textAlign={"left"}>
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
        <View>
          <Text
            mb={2}
            fontSize={20}
            fontFamily={"roboto"}
            fontWeight={500}
            color={"gray.300"}
          >
            E-mail
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                h={16}
                InputLeftElement={
                  <Feather
                    name="user"
                    size={24}
                    color={colors.gray[200]}
                    style={{
                      marginLeft: 12,
                    }}
                  />
                }
                placeholder="Digite seu email..."
                onChangeText={onChange}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
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
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                h={16}
                InputLeftElement={
                  hidePassword ? (
                    <Feather
                      name="eye-off"
                      size={24}
                      color={colors.gray[200]}
                      onPress={() => setHidePassword(false)}
                      style={{
                        marginLeft: 12,
                      }}
                    />
                  ) : (
                    <Feather
                      name="eye"
                      size={24}
                      color={colors.gray[200]}
                      onPress={() => setHidePassword(true)}
                      style={{
                        marginLeft: 12,
                      }}
                    />
                  )
                }
                placeholder="Digite seu senha..."
                secureTextEntry={hidePassword}
                onChangeText={onChange}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </View>

        <Button
          text="Entrar"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          onPress={handleSubmit(handleAuthenticateUser)}
        />

        {/* <Text color="gray.400">Esqueci minha senha?</Text> */}
        <Text color={"gray.300"} mt={2} p={0}>
          Está com problemas para entrar?{" "}
          <Text
            color={"blue.800"}
            textDecorationLine={"underline"}
            onPress={() => navigate("contact_support")}
          >
            Entre em contato com o support aqui...
          </Text>
        </Text>
      </Center>
    </ScrollView>
  );
}
