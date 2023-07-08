import { Image, ImageProps } from "@chakra-ui/react";
import bulleye from "../../assets/bullsEye.png";
import meh from "../../assets/meh.png";
import thumbsup from "../../assets/thumbsUp.jpg";
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "Recomended", boxSize: "25px" },
    5: { src: bulleye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
