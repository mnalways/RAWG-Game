import { Badge } from "@chakra-ui/react";

export const Critic = ({ score }: { score: number }) => {
  const color = score > 90 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2} fontSize={"14px"}>
      {score}
    </Badge>
  );
};
