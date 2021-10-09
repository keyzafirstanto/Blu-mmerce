import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    maxHeight: '100%',
    marginLeft: '30px',
  },
  media: {
    height: '200px',
    width: '500px',
    maxHeight: '90%',
    maxWidth: '90%',
    paddingTop: '10%', // 16:9
    margin: '20px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
}));

// backdropFilter: 'blur(16px) saturate(180%)',
//   webkitBackdropFilter: 'blur(16px) saturate(180%)';

//   borderRadius: '12px';
//   border: '1px solid rgba(255, 255, 255, 0.125)';
