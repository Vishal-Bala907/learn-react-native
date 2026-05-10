import LinkDark from "@/components/basic/links/LinkDark";
import { sign_in_path, sign_up_path } from "@/components/links/links";
import { Link, RelativePathString } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 items-center justify-center px-8">
        {/* Icon/Logo Placeholder */}
        <View className="bg-blue-100 p-6 rounded-full mb-8 shadow-sm">
          <Text className="text-5xl">🚀</Text>
        </View>

        {/* Title */}
        <Text className="text-4xl font-extrabold text-slate-900 text-center">
          Welcome to <Text className="text-blue-600">Nativewind</Text>
        </Text>

        {/* Subtitle */}
        <Text className="text-lg text-slate-600 text-center mt-4">
          Build beautiful, cross-platform apps faster than ever with React
          Native and Tailwind CSS.
        </Text>

        {/* Primary Action Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-blue-600 w-full py-4 rounded-2xl mt-12 shadow-lg shadow-blue-300"
        >
          <Text className="text-white text-center font-bold text-xl">
            Get Started
          </Text>
          <Link
            href={"/onBoarding"}
            className="mt-4 bg-primary text-white font-bold text-center w-fit py-4 px-2"
          >
            Go To On-boarding
          </Link>
        </TouchableOpacity>
        <View>
          <LinkDark url={sign_in_path} text="Sign in" />
          <LinkDark url={sign_up_path} text="Create account" />
          <LinkDark
            url={"/(tabs)/subscription/spotify" as RelativePathString}
            text="Spotify Subscription"
          />
          <Link
            className="mt-4 bg-primary text-white font-bold text-center w-fit py-4 px-2"
            href={{
              pathname: "/(tabs)/subscription/[id]",
              params: { id: "claude" },
            }}
          >
            Clause Max Subscription
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
