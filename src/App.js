import {Component} from "react";
import NavBar from "./components/Nav";
import {Route,Routes} from "react-router-dom";
import Guide from "./components/Guide";
import Highscores from "./components/Highscores";
import MainPage from "./components/MainPage";
class App extends Component {

  render()
  {
    return (
        <div className="App">
            <NavBar/>

            <div className="container">
                <Routes>
                    {/*<Route path="/" element={<MainPage/>}></Route>*/}
                    <Route path="/highscores" element={<Highscores/>}></Route>
                    <Route path="/guide" element={<Guide/>}></Route>
                </Routes>
            </div>
        </div>
    );
  }


}


export default App;
