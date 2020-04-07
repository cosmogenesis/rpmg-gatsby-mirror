import React, { Component } from "react"
import Carousel from "react-slick"

import clsx from "clsx"
import classNames from "classnames"
//import { MemoryRouter as Router } from 'react-router';
import { Link } from "gatsby"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import CustomButton from "src/components/CustomButtons/Button.js"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"

import {
  Typography,
  List,
  ListItem,
  ListSubheader,
  Collapse,
  CardActions,
} from "@material-ui/core"

export default class PromotedStaffCards extends Component {
  constructor(props) {
    super(props)
    this.cardClasses = props.cardClasses
    this.classes = props.classes
    this.carouselSettings = props.carouselSettings
    this.delay = props.delay
    this.staff = props.staff

    this.pause = this.pause.bind(this)
    this.play = this.play.bind(this)
    this.handleExpandClick = this.handleExpandClick.bind(this)
    this.state = {
      expanded: false,
    }
  }
  componentDidMount() {
    this.pause()
    setTimeout(this.play, this.delay)
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded })
  }

  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }

  render() {
    return (
      <Card>
        <CardHeader color="primary"> Featured Health Professional</CardHeader>

        <Carousel
          ref={slider => (this.slider = slider)}
          {...this.carouselSettings}
          className={this.cardClasses.cardCarousel}
        >
          {this.staff.map((bio, i) => {
            return (
              <CardBody
                key={i}
                className={classNames(
                  this.cardClasses.cardBody,
                  this.classes.promotedStaffCard,
                  this.classes.cardBody
                )}
              >
                <GridContainer direction="column">
                  <GridItem>
                    <Typography gutterBottom variant="h4">
                      {bio.name}
                    </Typography>
                  </GridItem>
                  <GridItem className="rpmg-promoted-description">
                    <Typography gutterBottom variant="body1">
                      This is a bio and should display no more than 3 lines of
                      text in the component in the mobile view. Aprox 120
                      characters.
                    </Typography>
                  </GridItem>

                  <GridContainer item spacing={0}>
                    <List
                      className="rpmg-list-wrapper"
                      disablePadding
                      subheader={
                        <ListSubheader disableGutters>Services:</ListSubheader>
                      }
                    >
                      <ListItem>Cognitive Therapy</ListItem>
                      <ListItem>Motivational Therapy</ListItem>
                      <ListItem>Relapse Prevention</ListItem>
                      <ListItem>Family Systems</ListItem>
                    </List>

                    <Collapse
                      in={this.state.expanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="rpmg-list-wrapper" disablePadding>
                        <ListItem>Collapsed Therapy</ListItem>
                        <ListItem>Collapsed Prevention</ListItem>
                        <ListItem>Collapsed Systems</ListItem>
                        <ListItem>Collapsed Therapy</ListItem>
                        <ListItem>Collapsed Prevention</ListItem>
                        <ListItem>Collapsed Systems</ListItem>
                        <ListItem>Collapsed Therapy</ListItem>
                        <ListItem>Collapsed Prevention</ListItem>
                        <ListItem>Collapsed Systems</ListItem>
                      </List>
                    </Collapse>
                    <GridItem className={this.classes.learnMoreLinkWrap}>
                      <button
                        className={clsx(this.classes.expand, {
                          [this.classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="More"
                      >
                        <GridContainer>
                          <GridItem className="linkText collapsedText">
                            More
                          </GridItem>
                          <GridItem className="linkText expandedText">
                            Less
                          </GridItem>
                          <GridItem>
                            <ArrowDropDownIcon />
                          </GridItem>
                        </GridContainer>
                      </button>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
                <CardActions className={this.cardClasses.buttonWrap}>
                  <Link to="/staff/">
                    <CustomButton
                      color="primary"
                      className={this.cardClasses.button}
                    >
                      See All Health Professionals
                    </CustomButton>
                  </Link>
                </CardActions>
              </CardBody>
            )
          })}
        </Carousel>
      </Card>
    )
  }
}
