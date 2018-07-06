import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import ContentCopy from '@material-ui/icons/ContentCopy';
import Store from '@material-ui/icons/Store';
import InfoOutline from '@material-ui/icons/InfoOutline';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Alert from '@material-ui/icons/ErrorOutline';
import AlertNew from '@material-ui/icons/AddAlert';
import Pending from '@material-ui/icons/Error';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';

// core components
import GridItem from 'components/Grid/GridItem.jsx';
import Danger from 'components/Typography/Danger.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

// airship

import { Widget, GaugeChart } from '@carto/airship';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from 'variables/charts';

import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

import { getFeatureCount } from '../../utils';

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };
  render() {
    const { classes, data } = this.props;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <AlertNew />
                </CardIcon>
                <p className={classes.cardCategory}>Today</p>
                <h3 className={classes.cardTitle}>
                  {/* {getFeatureCount(data, 'today')} */}20
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Crimes reported today
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Pending />
                </CardIcon>
                <p className={classes.cardCategory}>Urgent Cases</p>
                <h3 className={classes.cardTitle}>2</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  Urgent Cases
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="success">
                  <CheckCircle />
                </CardIcon>
                <p className={classes.cardCategory}>Attended Cases</p>
                <h3 className={classes.cardTitle}>8</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Cases attended to Today
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Alert />
                </CardIcon>
                <p className={classes.cardCategory}>Pending Cases</p>
                <h3 className={classes.cardTitle}>5</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Cases</h4>
                <p className={classes.cardCategory}>
                  Cases reported within this week
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader>
                <GaugeChart value={33} label="Percernt %" />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Resolved</h4>
                <p className={classes.cardCategory}>Cases resolved Today</p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime />
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Frequency</h4>
                <p className={classes.cardCategory}>
                  Frequency of Cases Reported Today
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.map.data
  };
};

const withConnect = connect(mapStateToProps)(Dashboard);

export default withStyles(dashboardStyle)(withConnect);
