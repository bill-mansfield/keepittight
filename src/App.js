import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import BarChart from './barchart';
import PieChart from './piechart';

function App() {
  return (
    <Container maxWidth="sm">
      <BarChart></BarChart>
      <PieChart></PieChart>
    </Container>
  );
}

export default App;
