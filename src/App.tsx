import { AddList } from "./components/AddList";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { GlobalStyle } from "./styles/globals";


function App() {
  return (
    <>      
      <Header/>
      <AddList/>
      <Table/>
      <GlobalStyle />
    </>
  );
}

export default App;
