import Form from "../components/form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Create() {
  let router = useRouter();
  const addHome = (data) => axios.post("/api/homes", data);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
    },
  });

  if (status === "loading") {
    router?.push("/api/auth/signin");
  }
  return (
    <>
      <Form onSubmit={addHome} />
    </>
  );
}
