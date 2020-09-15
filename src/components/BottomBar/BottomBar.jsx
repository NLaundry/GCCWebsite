import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="Challenges" value="favorites" icon={<ForumIcon />} />
      <BottomNavigationAction label="Events" value="nearby" icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label="SignOn" value="folder" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
