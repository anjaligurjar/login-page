import { AppBar } from '@mui/material';
import * as React from 'react';
import { Topography, AppBar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './App.css';
import Toolbar from '@mui/material/Toolbar';

export default function App() {
  return (
    <div className="searchcontainer">
      <AppBar>
        <Toolbar>
          <SearchIcon />
          <Topography variant="h3"> </Topography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
