import React from 'react';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Container from '@material-ui/core/Container';
import '../components/styles/Notes.css'
import color from '@material-ui/core/colors/indigo';
// import { bgcolor } from '@material-ui/system';
// import color from '@material-ui/core/colors/indigo';
// import { createGenerateClassName } from '@material-ui/styles';
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
    <Container maxWidth="xs" style={{ width: '18rem', float:"left"}} className="ContainerTwo" >
    <ListItem button>

      <ListItemText primary="All the notes" />
    </ListItem>
  
    <ListSubheader inset>Labels</ListSubheader>
    <ListItem button>
      
      <ListItemText primary="Recipes" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Work" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Reminders" />
    </ListItem>
    </Container>
  </div>

    )
  };
};
export default ListNew;
