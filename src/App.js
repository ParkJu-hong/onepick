import styled from 'styled-components';
import Card from './components/Card';
import Categorys from './components/Categorys';
import Header from './components/Header';
import PcMenus from './components/PcMenus';

const Main = styled.div`
  background-color: #FAFBFF;
  height: 100vh;

  .card__section {
    display: flex;
    flex-flow: wrap;

    .card__box {
      margin: 30px 0px 0px 30px;
    }
  }
`;

function App() {
  return (
    <Main>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0.19' }}><PcMenus /></div>
        <div style={{ flex: '0.81' }}>
          <Categorys />
          <div className="card__section">
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
            <div className="card__box"><Card /></div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default App;
