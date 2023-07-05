import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
export const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height={'250px'} width={'510px'}/>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}