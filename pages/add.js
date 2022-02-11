import { useState } from "react";
import Head from "next/head";

// Local components
import Layout from "../components/Layout";
import BottomNav from "../components/BottomNav";

// Material UI - Components
import {
  Button,
  Input,
  Modal,
  Progress,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";

// Alerts
import { toast } from "react-hot-toast";
import { errorConfigTop } from "../config/toastConfig";

// Database
import { app } from "../config/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Loader from "../components/Loader";

const Add = () => {
  // Database declarations
  const db = getFirestore(app);
  const storage = getStorage(app);
  // Data actual user
  const { userData } = useAuth();

  // state declarations - Information
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pago, setPago] = useState("");
  const [metodo, setMetodo] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handler for the modal
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  // Handler for uploading the radio buttons
  const handleChangePago = (event) => {
    setPago(event.target.value);
  };
  const handleChangeMetodo = (event) => {
    setMetodo(event.target.value);
  };

  // Handler for uploading the file
  const uploadHandler = async () => {
    const imageRef = ref(storage, file.name);
    try {
      const uploadResult = await uploadBytesResumable(imageRef, file);

      const downloadURL = await getDownloadURL(uploadResult.ref);
      return downloadURL;
    } catch (error) {
      console.log(error);
      // setError(true);
    }
  };

  // Handler for uploading the information
  const handleSubmit = async () => {
    const url = await uploadHandler();
    setLoading(true);

    try {
      if (
        name !== "" &&
        date !== "" &&
        time !== "" &&
        description !== "" &&
        pago !== "" &&
        metodo !== ""
      ) {
        await addDoc(collection(db, "patients"), {
          name: name,
          doc: userData.name,
          date: date,
          time: time,
          description: description,
          image: url || "",
          pago: pago,
          metodo: metodo,
          searchid: name.toLowerCase().trim() || "",
        });
        setLoading(false);
        setVisible(false);
        toast.success(
          "Se ha agregado el paciente correctamente.",
          errorConfigTop
        );
      } else {
        setLoading(false);
        setVisible(false);
        toast.error("Faltan campos por llenar.", errorConfigTop);
      }
    } catch (error) {
      // setError(true);
      console.log(error);
      toast.error(
        "Ocurrió un error al subir la informacion, intenta de nuevo.",
        errorConfigTop
      );
    }
  };

  return (
    <>
      <Head>
        <title>Añadir Paciente | Boreal </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : error ? (
        <>
          <Progress
            size="xs"
            indeterminated
            color="primary"
            status="primary"
            css={{ mb: "1rem" }}
          />
          <Text css={{ mb: "1rem" }}>
            Error al cargar los pacientes, por favor intentalo mas tarde.
          </Text>
        </>
      ) : (
        <Layout>
          <h2>Añadir Paciente</h2>
          <h5>Información paciente</h5>
          <Input
            fullWidth
            label="Nombre del paciente"
            placeholder="Pepito Perez"
            clearable
            onChange={(e) => setName(e.target.value)}
          />
          <Spacer y={0.8} />
          <Textarea
            placeholder="Descripción"
            label="Descripción"
            maxRows={3}
            fullWidth
            clearable
            onChange={(e) => setDescription(e.target.value)}
          />
          <Spacer y={0.8} />
          <Input
            width="186px"
            label="Time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
          />
          <Input
            width="130px"
            label="Date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />

          <Spacer y={0.8} />
          <Text>El paciente hizo el pago?</Text>
          <Spacer y={0.8} />
          <RadioGroup row value={pago} onChange={handleChangePago}>
            <FormControlLabel value="Si" control={<Radio />} label="Si" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          {pago === "Si" && (
            <>
              <Spacer y={0.8} />

              <Text>Metodo de pago</Text>
              <Spacer y={0.8} />
              <RadioGroup row value={metodo} onChange={handleChangeMetodo}>
                <FormControlLabel
                  value="Transferencia"
                  control={<Radio />}
                  label="Transferencia"
                />
                <FormControlLabel
                  value="Bold"
                  control={<Radio />}
                  label="Bold"
                />
                <FormControlLabel
                  value="Efectivo"
                  control={<Radio />}
                  label="Efectivo"
                />
              </RadioGroup>
            </>
          )}

          <h5>Materiales utilizados</h5>

          <Input
            label="Imagen del evento"
            size="large"
            type="file"
            placeholder="Descripcion del evento"
            onChange={(e) => {
              e.target.files[0] && setFile(e.target.files[0]);
            }}
            accept="image/png, image/jpeg"
          />

          <Spacer y={0.8} />
          <Button css={{ w: "100%", mb: "5rem" }} size="sm" onClick={handler}>
            Añadir
          </Button>
          <Spacer y={0} />
        </Layout>
      )}

      <BottomNav />
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b size={18}>
            ¿ La información es Correcta ?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Esta Información no puede ser modificada, por favor asegurate de
            llenar todos los campos y que la información sea correcta. Gracias.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat size="sm" color="error" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto size="sm" onClick={handleSubmit}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
