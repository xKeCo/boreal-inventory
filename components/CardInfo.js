import { useState } from "react";

// Material UI
import {
  Button,
  Collapse,
  Container,
  Divider,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";

export default function CardInfo({
  id,
  name,
  doc,
  description,
  time,
  date,
  image,
  pago,
  metodo,
}) {
  const [visible, setVisible] = useState(false);
  const [visibleImage, setVisibleImage] = useState(false);

  const handler = () => setVisible(true);
  const handlerImage = () => setVisibleImage(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const closeHandlerImage = () => {
    setVisibleImage(false);
  };

  return (
    <>
      <Collapse key={id} title={name} subtitle={doc}>
        {/* <p>{description}</p> */}
        <Text h5>Hora: {time}</Text>
        <Divider css={{ m: "10px 0" }} />
        <Text>{description}</Text>
        <Divider css={{ m: "10px 0" }} />
        {pago === "Si" ? (
          <Text h4 css={{ mt: "1rem" }}>
            Pago: {pago} <br />
            Metodo: {metodo}
          </Text>
        ) : (
          <Text h4 css={{ mt: "1rem" }}>
            Pago: {pago}
          </Text>
        )}

        <Button
          size="sm"
          css={{ bg: "#000", mt: "1rem", w: "100%" }}
          onClick={handler}
        >
          Más info
        </Button>
      </Collapse>

      <Modal
        key={id}
        closeButton
        blur
        scroll
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Row justify="space-between" css={{ ai: "center" }}>
            <Text id="modal-title" size={21} b>
              {name}
            </Text>
            <Text size={14} b>
              {time}
            </Text>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Text size={15} css={{ mb: "1rem" }}>
            {description}
          </Text>
          <Text size={15} css={{ mb: "1rem" }} b>
            Materiales utilizados:
          </Text>

          <Container css={{ d: "flex", gap: "1rem", mb: "10px" }}>
            {description && <Text>Guantes: 1</Text>}
            {description && <Text>Guantes: 1</Text>}
            {description && <Text>Guantes: 1</Text>}
            {description && <Text>Guantes: 1</Text>}
            {description && <Text>Guantes: 1</Text>}
          </Container>

          {pago === "Si" ? (
            <Text size={15} css={{ mb: "1rem" }} b>
              Pago: Si <br />
              Metodo: {metodo}
            </Text>
          ) : (
            <Text size={15} css={{ mb: "1rem" }} b>
              Pago: No
            </Text>
          )}
          <Text size={14}>Evaluado por:</Text>
          <Text size={15} b>
            {doc}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Row css={{ jc: "space-between", ai: "center" }}>
            <Button auto onClick={handlerImage}>
              Ver Imagen
            </Button>
            <Button auto onClick={closeHandler}>
              Cerrar
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>

      <Modal noPadding open={visibleImage} onClose={closeHandlerImage}>
        <Modal.Body>
          <img src={image} width="100%" height="100%" />
        </Modal.Body>
      </Modal>
    </>
  );
}
