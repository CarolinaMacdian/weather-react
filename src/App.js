import './styles.css';
import Search from './Search';
import City from './City';
import LastUpdate from './LastUpdate';
import Temperature from './Temperature';
import ExtraInfo from './ExtraInfo';
import Footer from './Footer';

export default function App() {
    return (
        <div>
            <div className="App">
                <div className="container text-center">
                    <div className="row">
                        <Search />
                    </div>
                </div>
                <div class="row text-center">
                    <div class="row location">
                        <div className="col-5 text-center">
                            <City />
                            <LastUpdate />
                        </div>
                    </div>
                    <div class="row col-12 d-flex">
                        <Temperature />
                        <ExtraInfo />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
