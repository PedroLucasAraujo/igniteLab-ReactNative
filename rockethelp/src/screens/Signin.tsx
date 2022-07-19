import { useState } from "react";
import { VStack, Heading, useTheme, Icon } from "native-base";
import Logo from "../assets/logo_primary.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Envelope, Key } from "phosphor-react-native";

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        onChangeText={setName}
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon ml={4} as={<Envelope color={colors.gray[300]} />} />
        }
      />
      <Input
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Senha"
        mb={8}
        InputLeftElement={<Icon color={colors.gray[300]} as={<Key />} />}
      />
      <Button title="Entrar" w="full" />
    </VStack>
  );
}
