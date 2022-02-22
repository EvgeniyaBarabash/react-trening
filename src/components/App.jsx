import  Example  from "./Exemple";
import Reader from "./Reader/Reader";
import publication from "../publication.json";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Container from "./Container/Container";
import List from "./List/List";
import { ListItem } from "./ListItem/ListItem";
import AddItemToList from "./AddItemToList/AddItemToList";

export const App = () => {
  return (
    <Container title={'Super Title'}>
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<Example />}/>
    <Route path="reader" element={<Reader items={publication}/>} />
    <Route path="list" element={<List/>} />
    <Route path="list/:itemId" element={<ListItem/>} />
    <Route path="create" element={<AddItemToList/>} />
    <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  </BrowserRouter>
  </Container>
  );
};
