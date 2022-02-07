import React from "react";

// Material UI
import { Button, Collapse, Text } from "@nextui-org/react";

export default function CardInfo({ id, name, doc, description }) {
  return (
    <>
      <Collapse
        key={id}
        title={name}
        subtitle={doc}
        contentLeft={<Text>13:08pm</Text>}
      >
        {/* <p>{description}</p> */}
        <Text>{description}</Text>
        <Text h4 css={{ mt: "1rem" }}>
          Pago: Si <br />
          Metodo: Transferencia
        </Text>
        <Button size="sm" css={{ bg: "#000", mt: "1rem", w: "100%" }}>
          Más info
        </Button>
      </Collapse>
    </>
  );
}
