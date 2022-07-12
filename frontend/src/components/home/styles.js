
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
        // page styles 
        mainColor: {
          color: ' #8D8DAA'
        },
        cursor: {
          color: ' #8D8DAA',
          "&:hover": {
            cursor: 'pointer'
          }
        },
        //navbar styles
        dis: {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoColumns: '1fr',
          backgroundColor: '#F7F5F2',
        },
        searchButton:{
          cursor:"pointer",
        },
        nav: {
          padding: ' 0.9rem 2rem',
          backgroundColor: '#F7F5F2',
          color: ' #8D8DAA',
          height: ' 40px',
          width: 'auto',
        },
        navLogo: {
          gridColumn:'1',
          gridRow:'1',
        },
        navSearch: {
          gridColumn:'7/10',
          gridRow:'1',
        },
        addItem:{
          gridColumn:'10',
          gridRow:'1',
        },
        navButton: {
          gridColumn:'12',
          gridRow:'1',
        },
        navItem: {
          float: 'left',
        },
        
        
        
        //home card styles
        cards: {
          width: '100%',
          // padding: ' 3% 0',
          
        },
        card:{
          width: '16rem',
          margin:'1rem',
          
        },
        cardContent:{
          backgroundColor: '#F7F5F2',
          height:'100%'
        },
        cardContainer: {
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
           gridTemplateRows: 'auto ',
           gridAutoRows: '0',
           justifyContent: 'space-evenly',
        },
        loadMore: {
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gridTemplateRows: 'auto ',
          gridAutoRows: '0',
          justifyContent: 'space-evenly',
          gridAutoRows: 'auto',
        },
        cardButton: {
          margin: '5%',
          textAlign: 'center',
        },
        arrow: {
          borderRdius: '25px',
          color: '#8D8DAA',
        },
        detailsButton:{
          color:'red'
        },
     
        
      }
    }
    );
    export default useStyle;