import React, { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar/ui/Navbar";


const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <button onClick={toggleTheme}>Toggle thame</button>
          <AppRouter/>
      </div>
    );
};

export default App;