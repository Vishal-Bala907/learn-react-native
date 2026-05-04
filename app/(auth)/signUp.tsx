import LinkDark from "@/components/basic/links/LinkDark";
import { sign_in_path } from "@/components/links/links";
import React from "react";
import { Text, View } from "react-native";

const signUp = () => {
  return (
    <View>
      <Text>This is sign-up page</Text>
      <LinkDark url={sign_in_path} text="Sign in" />
    </View>
  );
};

export default signUp;
