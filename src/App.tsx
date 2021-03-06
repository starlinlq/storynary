import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import NavBar from "./components/navbar/NavBar";
import { Redirect } from "react-router-dom";
import { useStore } from "./app/stores/stores";
import { observer } from "mobx-react-lite";
import CreateStory from "./components/forms/CreateStory";
import { ToastContainer } from "react-toastify";
import DisplayStories from "./components/displaystories/DisplayStories";
import SingleStory from "./components/singlestory/SingleStory";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import Bookmark from "./components/bookmark/Bookmark";
import Footer from "./components/footer/Foooter";
import axios from "axios";

function App() {
  const { user } = useStore();

  useEffect(() => {
    let token = localStorage.getItem("Authorization");

    if (token) {
      user.validate();
    }

    async function get() {
      try {
        console.log(test);
      } catch (error) {}
    }

    get();
  }, []);

  return (
    <div className="my_app">
      <div className="">
        <NavBar />
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          closeOnClick
          pauseOnHover
        />
        <div className="container ">
          <Switch>
            <Route path="/register/:id?">
              {user.isAuth ? <Redirect to="/" /> : <RegisterForm />}
            </Route>
            <Route path="/login/:id?">
              {user.isAuth ? <Redirect to="/" /> : <LoginForm />}
            </Route>
            <Route exact path="/create">
              <CreateStory />
            </Route>
            <Route path="/bookmark" component={Bookmark} />
            <Route path="/stories/:id?" component={DisplayStories} />
            <Route path="/story/:id" component={SingleStory} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
      <div className="container footer">
        <Footer />
      </div>
    </div>
  );
}

export default observer(App);
