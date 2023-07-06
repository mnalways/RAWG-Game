import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { UseGenre } from "../../Hooks/UseGenere";
import { getImageUrl } from "../../services/image-url";

export const GenereList = () => {
    const {data, loading, error} = UseGenre();

    if (error) return null;
    if (loading) return <Spinner size={'xl'} />
    return (
        <List>
            {data.map((gen) => {
                return (
                    <ListItem key={gen.id}>
                        <HStack>
                            <Image src={getImageUrl(gen.image_background)} boxSize={"32px"} borderRadius={8} marginY={"5px"}/>
                            <Text fontSize="lg">{gen.name}</Text>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
}