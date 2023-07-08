import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { UseGenre, Genre } from "../../Hooks/UseGenere";
import { getImageUrl } from "../../services/image-url";

interface props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenereList = ({ onSelect, selectedGenre }: props) => {
  const { data, loading, error } = UseGenre();

  if (error) return null;
  if (loading) return <Spinner size={"xl"} />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data.map((gen) => {
          return (
            <ListItem key={gen.id}>
              <HStack>
                <Image
                  src={getImageUrl(gen.image_background)}
                  boxSize={"32px"}
                  borderRadius={8}
                  marginY={"5px"}
                  objectFit={"cover"}
                />
                <Button
                  fontWeight={gen.id === selectedGenre?.id ? "bold" : ""}
                  fontSize="lg"
                  variant={"link"}
                  onClick={() => onSelect(gen)}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                >
                  {gen.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
