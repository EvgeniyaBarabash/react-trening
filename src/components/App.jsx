import  Example  from "./Exemple";
import Reader from "./Reader/Reader";
import publication from "../publication.json";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<Example />}/>
    <Route path="reader" element={<Reader items={publication}/>} />
    </Routes>
  </BrowserRouter>
    </>
  );
};
