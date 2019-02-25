import React from "react";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Moment from 'react-moment'
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
    // console.log('This props loading', this.props.loading);
    // console.log('THis is iin NowWhat', typeof (this.props.droneData));
    // console.log('This.prop.droneData',
    //   this.props.droneData != null ? this.props.droneData['data'] : 'empty');
    let resultData = {};
    if (this.props.droneData != null && this.props.droneData['data'] !== undefined) {
      resultData = this.props.droneData.data[this.props.droneData.data.length - 1]
      console.log(resultData)
    }

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


          <table className="table">
            <tbody>
              <tr>
                <td>Temperature:</td>
                <td>{resultData.metric || 'Reading temperature is undefined'}</td>
              </tr>
              <tr>
                <td>Latitude: </td>
                <td>{resultData.latitude || 'Reading latitude is undefined'}</td>
              </tr>
              <tr>
                <td>Longitude:</td>
                <td>{resultData.longitude || 'Reading longitude is undefined'}</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td><Moment unix>{resultData.timestamp || 'Reading time is undefined'}</Moment></td>

              </tr>
            </tbody>
          </table>
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
