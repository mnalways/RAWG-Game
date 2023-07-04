import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import styles from "./Game.module.scss";
export const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height={'250px'} className={styles.card} width={'510px'}/>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}