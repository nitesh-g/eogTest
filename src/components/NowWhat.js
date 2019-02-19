import React from "react";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
// import AvatarRaw from "@material-ui/core/Avatar";
// import { renderComponent } from "recompose";

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

// const avatarStyles = theme => ({
//   root: {
//     background: theme.palette.primary.main
//   },
//   title: {
//     color: "white"
//   }
// });
// const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: "5% 25%"
  }
};

class NowWhat extends React.Component {

  componentDidMount() {
    this.props.droneLoad();
  }

  render() {
    console.log('THis is iin NowWhat', this.props.droneData);

    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="Example Graph Visualization" />
        <CardContent>

          {/* <List>
            <ListItem>
              <Avatar>1</Avatar>
              <ListItemText primary="Connect to the Drone API" />
            </ListItem>
            <ListItem>
              <Avatar>2</Avatar>
              <ListItemText primary="Create your Visualization" />
            </ListItem>
            <ListItem>
              <Avatar>3</Avatar>
              <ListItemText primary="Poll the API" />
            </ListItem>
            <ListItem>
              <Avatar>4</Avatar>
              <ListItemText primary="Submit Your App" />
            </ListItem>
          </List> */}

          lets get the data here

        </CardContent>
      </Card>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const {
    loading,
    droneData
  } = state.weather;
  return {
    loading,
    droneData
  };
};

const mapDispatchToProps = dispatch => ({
  droneLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE_WEATHER
    })
});

const NowWhatConnect = connect(mapStateToProps, mapDispatchToProps)(NowWhat)

export default withStyles(styles)(NowWhatConnect);
