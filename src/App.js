import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhotoList from "./components/photos/PhotoList";

function App() {
   return (
      <Router>
         <div className="App">
            <div className="wrap">
               <Navbar />
               <Switch>
                  <Route exact path="/">
                     <UserList />
                  </Route>
                  <Route exact path="/photos/:page">
                     <PhotoList />
                  </Route>
               </Switch>
               <Footer />
            </div>
         </div>
      </Router>
   );
}

export default App;
