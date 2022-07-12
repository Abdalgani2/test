import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "./signUp.css";
import { SignUpContext } from '../../context/signUp';


const SignUp = () => {
    const signUpContext = useContext(SignUpContext);
    const handle = (e) => {
        console.log('sub func');
        signUpContext.addNewUser();
        e.preventDefault();
    };

    return (

        <div className="mainDiv " >
            <div className='rightDiv '>
                <h1 className='title'> Sign Up</h1>
                <form className='form'>
                    <Grid container spacing={2}>
                        {/* First Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size='small'
                                className='txt'
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => {
                                    signUpContext.setFirstName(e.target.value);
                                }}
                                /* continue validate fname*/
                                
                            />
                        </Grid>

                        {/* Last Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size='small'
                                className='txt'
                                autoComplete="lname"
                                name="lastName"
                                variant="outlined"
                                id="firstName"
                                label="Last Name"
                                onChange={(e) => {
                                    signUpContext.setLastName(e.target.value);
                                }}
                            /* continue validate lname*/

                            />
                        </Grid>
                    </Grid>

                    <TextField
                        size='small'
                        id="email"
                        required
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        onChange={(e) => {
                            signUpContext.setEmail(e.target.value.toLowerCase());
                        }}
                    />
                    <Grid container spacing={2}>
                        {/* Location */}
                        <Grid item xs={12} sm={6}>
                            <select name="city"
                                label="Address"
                                className='city'
                                required
                                onChange={(e) => {
                                    signUpContext.setCountry(e.target.value);
                                }}
                            >
                                <option value="">city</option>
                                <option value="Amman">Amman</option>
                                <option value="Zarqa">Zarqa</option>
                                <option value="Irbid">Irbid</option>
                                <option value="al-Mafraq">al-Mafraq</option>
                                <option value="As-Salt">As-Salt</option>
                                <option value="Mafraq">Madaba</option>
                                <option value="Jerash">Jerash</option>
                                <option value="Ma'an">Ma'an</option>
                            </select>
                        </Grid>

                        {/* country */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                size='small'
                                className='txt'
                                autoComplete="country"
                                name="country"
                                variant="outlined"
                                fullWidth
                                id="country"
                                label="Address"
                                onChange={(e) => {
                                    signUpContext.setLocation(e.target.value);
                                }}

                            />

                        </Grid>
                    </Grid>

                <Grid container spacing={2}>
                    {/* Password */}
                    <Grid item xs={12} sm={6}>
                    <TextField
                                required
                                type='password'
                                size='small'
                                className='txt'
                                autoComplete="Password"
                                name="Password"
                                variant="outlined"
                                fullWidth
                                id="Password"
                                label="Password"
                                onChange={(e) => {
                                    signUpContext.setPassword(e.target.value);
                                }}

                            />
                    </Grid>

                    {/* Confirm Password */}
                    <Grid item xs={12} sm={6}>
                    <TextField
                                required
                                size='small'
                                type='password'
                                className='txt'
                                autoComplete="Confirm Password"
                                name="Confirm Password"
                                variant="outlined"
                                fullWidth
                                id="Confirm Password"
                                label="Confirm Password"
                                onChange={(e) => {
                                    signUpContext.setConfirmPassword(e.target.value);
                                }}

                            />
                            

                    </Grid>
                </Grid>
                <TextField
                        size='small'
                        id="phone"
                        required
                        label="Phone"
                        name="email"
                        autoComplete="Pohne"
                        variant="outlined"
                        onChange={(e) => {
                            signUpContext.setPhone(e.target.value);
                        }}
                    />
<button className='signUpButton' variant='contained' size="medium" sx={{ bgcolor: '#A7BBC7' }} onClick={(e) => { handle(e) }} > Sign Up</button>
            </form>
            {/* {signUpContext.message && (
                        <div className='message'>{signUpContext.message}</div>
                    )} */}
        </div>
            </div >
        
    );
};

export default SignUp;