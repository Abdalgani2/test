import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyle from './styles';
import { useNavigate } from 'react-router-dom';







function HomeCard(props) {
    const classes = useStyle();
    const navigate = useNavigate();
    console.log("props", props);
    const items = props.items;
    const [show, setShow] = useState(classes.loadMore);
    return (
        <div className={classes.cards} >
            <div>
                <div className={show}>

                    {items.map((item, i) => (
                        <>
                            {console.log("ITEMtitle", item.title)}
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.imageUrl}
                                    alt="green iguana"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       price: {item.price}
                                    </Typography>
                                    {/* <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'white' }}> */}
                                        <Button onClick={() => { navigate(`/product`, { state: { itemId: item._id } }); }} style={{ backgroundColor: '#8D8DAA', color: 'white', margin: '1rem auto', display: 'block' }}>
                                            Details
                                        </Button>
                                    {/* </Link> */}
                                </CardContent>
                            </Card>
                        </>
                    ))}
                </div >
            </div>
        </div>
    );
}
export default HomeCard;


