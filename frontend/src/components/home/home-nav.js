import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useStyle from './styles';
import { useNavigate } from 'react-router-dom';



const theme = createTheme({
  palette: {
    primary: {
      main: '#8D8DAA',
    }
  },

});

function Nav(props) {
  let token = localStorage.getItem("auth-token");
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");

  const logout = () => {
    localStorage.setItem("auth-token", "");
    window.location.reload();
  };
  const redirect = () => {
    navigate('/signIn')
  };
  const addItem = () => {
    navigate('/addItem');
  };



  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <nav className={classes.nav}>
        <Box className={classes.dis}>
          <Box className={classes.navLogo} >
            
            <Typography variant='h6' component="h3" className={classes.navItem}>agentOnCloud</Typography>
          </Box>
          <Box className={classes.navSearch}>
            <TextField
              id="standard-basic"
              label="Search"
              size='small'
              onChange={(e) => {
                setSearchVal(e.target.value)
              }}
              className={classes.mainColor}
              color={'primary'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className={classes.searchButton} onClick={() => { navigate(`/search`, { state: { title: searchVal.toLowerCase() } }); }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {token && (
                        <Box className={classes.addItem}> 
                        <Button variant="contained" onClick={addItem} style={{ textDecoration: 'none' ,color:'white',height:'40px'}}>Add Item</Button>
                        </Box>
                    )}
          
            {token ?<Box className={classes.navButton}> <Button variant="contained" onClick={logout} style={{ textDecoration: 'none' ,color:'white',height:'40px'}}>sign out</Button> </Box>: <Box className={classes.navButton}><Button variant="contained" onClick={redirect}>Sign In</Button> </Box>}
          
      </Box>

    </nav>
    </ThemeProvider >
  );
}

export default Nav;
