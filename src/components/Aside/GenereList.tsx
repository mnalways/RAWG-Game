import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { UseGenre } from "../../Hooks/UseGenere";
import { getImageUrl } from "../../services/image-url";

export const GenereList = () => {
    const {data} = UseGenre();
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