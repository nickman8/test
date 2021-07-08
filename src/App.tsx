import React, { useEffect } from "react";
import MainPageContainer from "@containers/MainPageContainer/MainPageContainer";
import "./App.scss";
import { initializeRedux } from "@redux/contactsSlice";
import { useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeRedux());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <MainPageContainer />
    </div>
  );
}

export default App;
