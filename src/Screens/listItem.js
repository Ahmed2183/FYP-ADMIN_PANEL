import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
         <Link to='/home' class='link'>
             <ListItemText primary="Product Approve" />
         </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
         <Link to='/user' class='link'>
             <ListItemText primary="Customers" />
         </Link>
    </ListItem>

  </div>
);