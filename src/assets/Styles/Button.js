import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    margin: '22px',
    zIndex: 1,
  },
  buttonLogin: {
    background: 'linear-gradient(45deg, #2980B9, #6DD5FA, #FFFFFF)',
    border: 0,
    marginBottom: 15,
    borderRadius: 25,
    marginRight: '10px',
    color: 'wheat',
    padding: '10px 30px',
  },
  buttonItems: {
    background: 'linear-gradient(45deg, #0F2027, #203A43, #2c5364)',
    border: 0,
    marginBottom: 15,
    marginLeft: '10px',
    borderRadius: 25,
    color: 'white',
    justifyContent: 'center',
    padding: '10px 30px',
  },
}));
