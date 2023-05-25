import styled from 'styled-components';
import Card from '../components/Card';
import Categorys from '../components/Categorys'
import Footer from '../components/Footer';
import Header from '../components/Header';
import PcMenus from '../components/PcMenus';

const Main = styled.div`
  background-color: #FAFBFF;
  height: 110%;

  .main {
      display: flex;
  }

  .menus {
    flex: 0.19;
  }

  .main__contents {
    flex: 0.81;
  }

  .card__section {
    display: flex;
    flex-flow: wrap;

    .card__box {
      margin: 30px 0px 0px 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .menus {
        display: none;
    }
    .main__contents {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;  
    }
    .card__section {
        justify-content: center;
    }
  }
`;

function Home() {
    return (
        <Main>
            <Header />
            <div className="main">
                <div className="menus"><PcMenus /></div>
                <div className="main__contents">
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
            <Footer />
        </Main>
    );
}

export default Home;
