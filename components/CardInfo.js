import React from "react";

// Material UI
import { Button, Collapse, Divider, Text } from "@nextui-org/react";

export default function CardInfo({ id, name, doc, description }) {
  return (
    <>
      <Collapse key={id} title={name} subtitle={doc}>
        {/* <p>{description}</p> */}
        <Text h5>Hora: 13:08pm</Text>
        <Divider css={{ m: "10px 0" }} />
        <Text>{description}</Text>
        <Divider css={{ m: "10px 0" }} />
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
