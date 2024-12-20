import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { Text } from "react-native";
type Props = {
  children: React.ReactNode;
} & ButtonProps;

export default function button({ children, ...rest }: Props) {
  return (
    <Button {...rest}>
      <Text className="text-white dark:text-black">{children}</Text>
    </Button>
  );
}
