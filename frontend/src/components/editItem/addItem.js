import { useContext, useState } from 'react';
import useStyle from "./login-style";
import './addItem.css';
import { TextField, Grid, Button, Typography } from '@mui/material';
import { AddItemContext } from '../../context/addItem';
import jwt from 'jwt-decode'

const EditItem = () => {
    const classes = useStyle();
    const addItemContext = useContext(AddItemContext);
    let token = localStorage.getItem("auth-token")
    const user = jwt(token);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
    const [price, setPrice] = useState();
    addItemContext.setUserId(user.userId)
    // on click submit 
    const handleSubmit = (e) => {
        addItemContext.addItem();
    };
    



    return (<div className={classes.page_login}>
        <div className={classes.content_login}>

            <form className={classes.form}>

                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.typo} >
                        EDIT ITEM
                    </Typography>
                </Grid>
                <Grid>
                    <TextField
                        label="Please Enter Title"
                        className={classes.margindown}
                        onChange={(e) => {
                           setTitle(e.target.value.toLowerCase());
                        }} />

                </Grid>

                <Grid>
                    <textarea
                        style={{ resize: 'none' }}
                        required
                        rows="6" cols="25"
                        placeholder='Please type description..'
                        label="Description"
                        className={classes.margindown}
                        onChange={(e) => {
                           setDescription(e.target.value);
                        }} >
                    </textarea>
                </Grid>
                <Grid>
                    <TextField
                        required
                        label="Price"
                        className={classes.margindown}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }} />

                </Grid>

                <Grid>
                    <Button variant='contained' size="medium" sx={[{ bgcolor: '#A7BBC7' },
                    { "&:hover": { bgcolor: '#A7BBC7' } }]}
                        type='button'
                        onClick={handleSubmit}>
                        EDIT ITEM
                    </Button>
                </Grid>


            </form>
        </div>
    </div>
    )
};

export default EditItem;