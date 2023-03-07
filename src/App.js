import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Ad from './components/Ad';
import AdForm from './components/AdForm';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
// Actions
import { loadUser } from './actions/auth';
// Redux
import { Provider } from 'react-redux';
import store from './store';
//import dotenv from 'dotenv';
import fs from 'fs';
import assert from 'assert';
import zlib from 'browserify-zlib';
import { Buffer } from 'buffer';
import constants from 'constants-browserify';
import crypto from 'crypto-browserify';
import https from 'https-browserify';
import os from 'os-browserify';
import querystring from 'querystring-es3';
import Stream from 'stream';
//import http from 'stream-http';
import url from 'url';
import path from 'path-browserify';

function App() {
  // Load user
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ads/:adId' element={<Ad />} />
          <Route path='/postad' element={<AdForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
