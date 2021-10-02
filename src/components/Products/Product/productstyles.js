import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '80%',
  },
  media: {
    height: 'auto',
    width: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
    paddingTop: '100%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

// backdropFilter: 'blur(16px) saturate(180%)',
//   webkitBackdropFilter: 'blur(16px) saturate(180%)';

//   borderRadius: '12px';
//   border: '1px solid rgba(255, 255, 255, 0.125)';
