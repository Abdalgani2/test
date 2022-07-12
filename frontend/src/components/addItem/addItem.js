import { useContext, useState } from 'react';
import useStyle from "./login-style";
import './addItem.css';
import { TextField, Grid, Button, Typography } from '@mui/material';
import { AddItemContext } from '../../context/addItem';
import jwt from 'jwt-decode'

const AddItem = () => {
    const classes = useStyle();
    const addItemContext = useContext(AddItemContext);
    let token = localStorage.getItem("auth-token")
    const user = jwt(token);
    console.log("user._id", user.userId)
    addItemContext.setUserId(user.userId)
    // on click submit 
    const handleSubmit = (e) => {
        addItemContext.addItem();
    };
    // to on chane upload photo



    return (<div className={classes.page_login}>
        <div className={classes.content_login}>

            <form className={classes.form}>

                <Grid item xs={12}>
                    <Typography variant='h4' className={classes.typo} >
                        ADD ITEM
                    </Typography>
                </Grid>
                <Grid>
                    <TextField
                        label="Please Enter Title"
                        className={classes.margindown}
                        onChange={(e) => {
                            addItemContext.setTitle(e.target.value.toLowerCase());
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
                            addItemContext.setDescription(e.target.value);
                        }} >
                    </textarea>
                </Grid>
                <Grid>
                    {/* create Price */}
                    <TextField
                        required
                        label="Price"
                        className={classes.margindown}
                        onChange={(e) => {
                            addItemContext.setPrice(e.target.value);
                        }} />

                </Grid>
                <Grid>
                    {/* create Description */}
                    <input type="file" multiple onChange={addItemContext.handleImage} />
                </Grid>

                <Grid>
                    <Button variant='contained' size="medium" sx={[{ bgcolor: '#A7BBC7' },
                    { "&:hover": { bgcolor: '#A7BBC7' } }]}
                        type='button'
                        onClick={handleSubmit}>
                        Add Item
                    </Button>
                </Grid>


            </form>
        </div>
    </div>
    )
};

export default AddItem;