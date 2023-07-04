import { Card, CardBody, HStack, Heading, Image, } from "@chakra-ui/react";
import { Game } from "./UseGame";
import styles from "./Game.module.scss";
import { PlatformIconList } from "./PlatformIconList";
import { Critic } from "./Critic";
interface props {
    game: Game;
}

export const GameCard = ({game}: props) => {

    return (
        <Card className={styles.card}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading className={styles.heading}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms?.map(({platform}) => platform)}/>
                <Critic score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}