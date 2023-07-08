import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./UseGame";
import styles from "./Game.module.scss";
import { PlatformIconList } from "./PlatformIconList";
import { Critic } from "./Critic";
import { getImageUrl } from "../../services/image-url";
import Emoji from "./Emoji";
interface props {
  game: Game;
}

export const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map(({ platform }) => platform)}
          />
          <Critic score={game.metacritic} />
        </HStack>
        <Heading className={styles.heading}>
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};
