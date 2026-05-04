import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription {id} Details</Text>
    </View>
  );
};

export default SubscriptionDetails;
