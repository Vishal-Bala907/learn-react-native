import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { clsx } from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { components, theme } from "@/constants/theme";

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <View className="tabs-icon">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image source={icon} resizeMode="contain" className="tabs-glyph" />
      </View>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, components.tabBar.horizontalInset),
          height: components.tabBar.height,
          marginHorizontal: components.tabBar.horizontalInset,
          borderRadius: components.tabBar.radius,
          backgroundColor: theme.colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical:
            components.tabBar.height / 2 - components.tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: components.tabBar.iconFrame,
          height: components.tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => {
        return (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={tab.icon} />
              ),
            }}
          />
        );
      })}
      {/* <Tabs.Screen name="subscription" options={{ title: "Subscription" }} /> */}
      {/* <Tabs.Screen name="insigts" options={{ title: "Insights" }} /> */}
      {/* <Tabs.Screen name="settings" options={{ title: "Settings" }} /> */}
      <Tabs.Screen name="subscription/[id]" options={{ href: null }} />
    </Tabs>
  );
};

export default TabLayout;
