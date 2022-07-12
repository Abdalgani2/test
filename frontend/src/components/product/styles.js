
    import { makeStyles } from '@mui/styles';
import { color, createTheme, height } from '@mui/system';
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
const useStyle = makeStyles(() => {
  return {
    
    //product page
    productContainer:{
      
      width:'60%',
      marginLeft:'auto',
      marginRight:'auto',

      
    },
    mainBox:{
      backgroundColor:'#DFDFDE',
      height:'420px',
      width:'80%',
      margin:' auto',
      border: '2px solid #DFDFDE',
  borderRadius: '15px',
      
    },
    ca: {
      display: 'grid',
      gridTemplateColumns: 'auto auto ',
       gridTemplateRows: 'auto ',
       columnGap:"10px",
       float:'right',
       marginBottom:"40px"
    },
    
    prodImg:{
      width:'90%',
      height:'5rem'
    },
    prodDesc:{
      display:'block',
      margin:'1rem 0'
    },
    
  }
}
);
export default useStyle;