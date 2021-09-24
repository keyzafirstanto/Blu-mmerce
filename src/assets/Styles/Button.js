import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    margin: '22px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonLogin: {
    'background': 'linear-gradient(45deg, #3C3B3F, #605C3C)',
    '&:hover': {
      background: 'linear-gradient(45deg, #a2ab58, #636363, #605C3C )',
      color: 'white',
    },
    'marginBottom': 15,
    'borderRadius': 25,
    'marginRight': '2px',
    'color': 'wheat',
    'padding': '10px 30px',
  },
  buttonItems: {
    'background': 'linear-gradient(45deg, #0F2027, #203A43, #2c5364)',
    '&:hover': {
      background: 'linear-gradient(45deg, #44A08D, #093637)',
      color: 'white',
    },
    'border': 0,
    'marginBottom': 15,
    'marginLeft': '10px',
    'borderRadius': 25,
    'color': 'white',
    'justifyContent': 'center',
    'padding': '10px 30px',
  },
}));
