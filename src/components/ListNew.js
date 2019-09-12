import React from 'react';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Container from '@material-ui/core/Container';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';


class ListNew extends React.Component {
  render(){
    return (
 
  <div>
    <Container maxWidth="xs" style={{ width: '18rem', float:"left"}} >
    <ListItem button>
      
        
     
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      
      
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
     
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Integrations" />
    </ListItem>
  
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Year-end sale" />
    </ListItem>
    </Container>
  </div>

    )
  };
};
export default ListNew;
