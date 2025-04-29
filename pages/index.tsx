import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");

  function addTask() {
    console.log("Nombre escrito:", nombre);
  }

  return (
    <main className="p-6">
      <Header />
      <div className="max-w-md mx-auto mt-8 space-y-4">
        <Input
          name="nombre"
          label="Nombre"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Button onClick={() => addTask()}>AÑADIR</Button>
      </div>
    </main>
  );
}
