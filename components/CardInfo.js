import React from "react";
import { Collapse, Text } from "@nextui-org/react";

export default function CardInfo({ id, name, doc }) {
  return (
    <>
      <Collapse
        key={id}
        title={name}
        subtitle={doc}
        contentLeft={<Text>13:08pm</Text>}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
    </>
  );
}
