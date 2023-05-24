import styled from 'styled-components';
import Header from './components/Header';

const Main = styled.div`
  background-color: #FAFBFF;
  height: 100vh;
`;

function App() {
  return (
    <Main>
      <Header />
    </Main>
  );
}

export default App;
