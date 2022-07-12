import { Fragment, useEffect, useState } from "react";
import Nav from "../home/home-nav";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import useStyle from './styles';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import { useLocation } from 'react-router-dom';




function Product(props) {
    const location = useLocation();

    const classes = useStyle();
    const navigate = useNavigate();
    const token = localStorage.getItem("auth-token");
    const [product, setProduct] = useState(null);
    const user = jwt(token);
    const deleteItem = (id)=>{
        Axios.delete(`http://localhost:4000/deleteItem/${id}`)
            .then((result) => {
                console.log(result);
                
                    navigate(`/`);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    useEffect(() => {
        Axios.get(`http://localhost:4000/getItemId/${location.state.itemId}`).then(response => {
            console.log("responseresponse", response);
            setProduct(response.data)
        }).catch(err => console.log(err))
    }, []);
    const handleSubmit = () => {
        if (!token) {
            navigate('/signIn');
        }

    };
    return (

        <Fragment>
            <Nav />
            {
                product ? <main className={classes.productContainer}>
                    <Box className={classes.mainBox}>

                        <Box >
                            <img
                                src={product.imageUrl}
                                style={{

                                    border: '2px solid #DFDFDE',
                                    borderRadius: '15px',
                                }}
                                alt="Girl in a jacket" width="100%" height="200" />
                            <Typography className={classes.prodTitle} variant='h4' component="h3" style={{ marginLeft: '1rem ' }}>{product.title}</Typography>
                            <Typography variant="body" className={classes.prodDesc} style={{ marginLeft: '1rem 0' }}>
                                {product.description}
                            </Typography>
                            <Typography variant="body" className={classes.prodDesc} style={{ marginTop: "5px", marginLeft: '1rem ' }}>
                                price: {product.price}
                            </Typography>
                            <Button style={{ backgroundColor: '#8D8DAA', color: 'white', margin: '1rem auto', display: 'block' }} onClick={handleSubmit} >
                                Add To Cart
                            </Button>

                             { user.userId== product.userId &&
                                <div className={classes.ca}>
                                    <Button style={{ backgroundColor: '#8D8DAA', color: 'white', margin: '1rem auto', display: 'block' }}
                                    onClick={(e) => {
                                        deleteItem(product._id)
                                    }}   >
                                       Delete
                                    </Button>
                                    <Button style={{ backgroundColor: '#8D8DAA', color: 'white', margin: '1rem auto', display: 'block' }} onClick={handleSubmit} >
                                        Edit
                                    </Button>
                                </div>
                            } 

                        </Box>
                    </Box>
                </main> : <div></div>
            }

        </Fragment >

    );
}

export default Product;