import { getBoolPref, getIntPref, setBoolPref } from "../../dev";
import {
  Box,
  Flex,
  VStack,
  Text,
  Avatar,
  Grid,
  GridItem,
  Progress,
  Link,
  Icon,
} from "@chakra-ui/react";
import Card from "../../components/Card";

export default function Home() {
  return (
    <GridItem display="flex" justifyContent="center">
      <VStack align="stretch" alignItems="center" maxW={"900px"} spacing={6}>
        <Flex alignItems="center" flexDirection={"column"}>
          <Avatar
            size="xl"
            src="chrome://browser/skin/fxa/avatar-color.svg"
            m={4}
          />
          <Text fontSize="3xl">ようこそ、Account Name さん</Text>
        </Flex>
        <Text color="gray.600">
          Noraneko を便利にご利用いただけるよう、アカウント、プライバシー、セキュリティを管理できます。
        </Text>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Card title="セットアップ">
            <Text fontSize="sm" mb={2}>
              Noraneko を最大限にご利用いただくために、セットアップを完了しましょう。
            </Text>
            <Text fontWeight="bold" fontSize="sm" mb={1}>
              進捗
            </Text>
            <Progress value={50} size="sm" colorScheme="blue" mb={1} h={"4px"} />
            <Text fontSize="sm">ステップ 2/4</Text>
          </Card>
          <Card
            title="プライバシーとカスタマイズ"
            icon={<Icon as={"svg"} color="blue.500" />}
          >
            <Text fontSize="sm">
              Noraneko は既定の状態であなたのデータとプライバシーを適切に保護するよう動作しますが、手動で管理することもできます。
            </Text>
            <Link color="blue.500" fontSize="sm" mt={2}>
              データとプライバシーを管理
            </Link>
          </Card>
          <Card
            title="Ablaze アカウントの設定"
            icon={<Icon as={"svg"} color="blue.500" />}
          >
            <Text fontSize="sm">
              Ablaze アカウントの設定を行います。
            </Text>
            <Link color="blue.500" fontSize="sm" mt={2} href="https://security.google.com/settings/security/checkup">
              セキュリティ診断
            </Link>
          </Card>
          <Card
            title="拡張機能を管理"
            icon={<Icon as={"svg"} color="blue.500" />}
          >
            <Text fontSize="sm">
              addons.mozilla.org で入手可能な拡張機能を管理します
            </Text>
            <Link color="blue.500" fontSize="sm" mt={2} href="https://addons.mozilla.org">
              拡張機能を管理
            </Link>
          </Card>
          <Card
            title="Noraneko のサポート"
            icon={<Icon as={"svg"} color="blue.500" />}
          >
            <Text fontSize="sm">
              Noraneko のコントリビューターによって書かれたサポートをご利用いただけます
            </Text>
            <Link color="blue.500" fontSize="sm" mt={2}>
              Noraneko のサポート記事を閲覧
            </Link>
          </Card>

          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
              <Card
                key={v}
                title="Noraneko のサポート"
                icon={<Icon as={"svg"} color="blue.500" />}
              >
                <Text fontSize="sm">
                  Noraneko のコントリビューターによって書かれたサポートをご利用いただけます
                </Text>
                <Link color="blue.500" fontSize="sm" mt={2}>
                  Noraneko のサポート記事を閲覧
                </Link>
              </Card>
            ))
          }
        </Grid>
      </VStack>
    </GridItem>
  );
}
