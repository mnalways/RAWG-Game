import { GameQuery } from "../../App";
import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
