import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Favorite from '../pages/Favorite';
import Detail from '../pages/Detail';

export default class Rot extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          {/* <Route path="/favorite" element={<Favorite />} /> */}
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
