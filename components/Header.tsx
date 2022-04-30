import { Text } from "@chakra-ui/react";

export default function Header({ title }) {
  return (
    <Text fontSize={16} color="green.100" fontWeight={"black"}>
      {title}
    </Text>
  );
}
