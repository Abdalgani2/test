import './signIn.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContext } from '../../context/signIn';

const Login = () => {
    const signInContext = useContext(SignInContext);
    const navigate = useNavigate();


    const sign = async (e) => {
        signInContext.login()
        e.preventDefault();

    }
    const redirect = () => {
        navigate('/signUp')
    }
    return (
            <div className="page_login">
                <div className="content_login">
                    <form className="formLogin">
                            <Grid container rowSpacing={3} >
                                <h3>
                                    Welcome back
                                </h3>
                            </Grid>
                            {/* email */}
                            <Grid item xs={12} >
                                <TextField  label="Email" variant="outlined"
                                    size='small'
                                    fullWidth
                                    onChange={(e) => {
                                        signInContext.setEmail(e.target.value.toLowerCase());
                                    }} />
                            </Grid >
                            <Grid item xs={12} >

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
                                        signInContext.setPassword(e.target.value);
                                    }}

                                />

                            </Grid>

                        

                        <button className='signUpButton' variant='contained' size="medium" sx={{ bgcolor: '#A7BBC7' }} onClick={(e) => { sign(e) }} > Sign In</button>

                        <p><a href='' className="link" onClick={redirect} >Create account</a></p>

                    </form>
                </div>
                {signInContext.message && (
                    <div className='message'>{signInContext.message}</div>
                )}

            </div>
      

    )
};

export default Login;