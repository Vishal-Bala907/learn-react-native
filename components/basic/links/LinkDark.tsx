import { Link, RelativePathString } from "expo-router";
import { Text } from "react-native";

type Props = {
  url: RelativePathString;
  text: string;
};

const LinkDark: React.FC<Props> = ({ url, text }) => {
  return (
    <Link
      href={url}
      className="mt-4 bg-primary text-white font-bold text-center w-fit py-4 px-2"
    >
      <Text>{text}</Text>
    </Link>
  );
};

export default LinkDark;
