import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { UseGenre, Genre } from "../../Hooks/UseGenere";
import { getImageUrl } from "../../services/image-url";

interface props {
    onSelect: (genre: Genre) => void;
}

export const GenereList = ({onSelect}: props) => {
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
                            <Button fontSize="lg" variant={'link'} onClick={() => onSelect(gen)}>{gen.name}</Button>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
}