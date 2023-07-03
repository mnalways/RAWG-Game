import { Card, CardBody, Heading, Image, } from "@chakra-ui/react";
import { Game } from "./UseGame";
import styles from "./Game.module.scss";
interface props {
    game: Game;
}

export const GameCard = ({game}: props) => {

    return (
        <Card className={styles.card}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading className={styles.heading}>{game.name}</Heading>
            </CardBody>
        </Card>
    );
}