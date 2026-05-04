import LinkDark from "@/components/basic/links/LinkDark";
import { sign_up_path } from "@/components/links/links";
import { Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>This is sign-in page</Text>
      <LinkDark url={sign_up_path} text="Create account" />
    </View>
  );
};

export default signIn;
