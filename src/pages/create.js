import Form from "../components/form";
import axios from "axios";

export default function Create() {
  const addHome = (data) => axios.post("/api/homes", data);
  return (
    <>
      <Form onSubmit={addHome} />
    </>
  );
}
