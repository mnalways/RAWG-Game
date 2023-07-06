import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
export const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height={300}/>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}