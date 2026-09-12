import "./App.css";
import Nav from "./component/nav";
import Banner from "./component/banner";
import { Suspense, useState } from "react";
import Technologies from "./component/technologies";
import type { ITechnology } from "./type/type";

const technologiesPromis = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};


function App() {

  const[technologies]=useState(()=>technologiesPromis)
  return (
    <>
      <Nav />

      <Suspense fallback="Loading....">
        <Technologies technologies={technologies()} />
      </Suspense>

      <Banner />
    </>
  );
}

export default App;