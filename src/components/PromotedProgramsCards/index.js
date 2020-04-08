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

const carouselSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 5000,
}

export default class PromotedProgramsCards extends Component {
  constructor(props) {
    super(props)
    this.cardClasses = props.cardClasses
    this.classes = props.classes
    this.carouselSettings = carouselSettings
    this.delay = props.delay ? this.carouselSettings.autoplaySpeed / 2 : 0
    this.featured = props.featured

    this.pause = this.pause.bind(this)

    this.play = this.play.bind(this)
    this.handleExpandClick = this.handleExpandClick.bind(this)
    this.state = {
      expanded: false,
    }
  }
  componentDidMount() {
    if (this.delay !== false) {
      this.pause()
      setTimeout(this.play, this.delay)
    }
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
        <CardHeader color="primary">{this.featured.headerText}</CardHeader>

        <Carousel
          ref={slider => (this.slider = slider)}
          {...this.carouselSettings}
          className={this.cardClasses.cardCarousel}
        >
          {this.featured.serviceCollections.map((collection, i) => {
            console.log(collection.services)

            return (
              <CardBody
                key={i}
                className={classNames(
                  this.cardClasses.cardBody,
                  this.classes.promotedProgramsCard,
                  this.classes.cardBody
                )}
              >
                <GridContainer direction="column">
                  <GridItem>
                    <Typography gutterBottom variant="h4">
                      {collection.publicName}
                    </Typography>
                  </GridItem>
                  <GridItem className="rpmg-promoted-description">
                    <Typography gutterBottom variant="body1">
                      {collection.description.description}
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
                      {collection.services.map((service, i) => {
                        if (i < 4) {
                          return (
                            <ListItem key={i}>{service.publicName}</ListItem>
                          )
                        }
                      })}
                    </List>
                    {collection.services.length > 4 && (
                      <>
                        <Collapse
                          in={this.state.expanded}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List className="rpmg-list-wrapper" disablePadding>
                            {collection.services.map((service, i) => {
                              if (i > 4) {
                                return (
                                  <ListItem key={i}>
                                    {service.publicName}
                                  </ListItem>
                                )
                              }
                            })}
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
                      </>
                    )}
                  </GridContainer>
                </GridContainer>
                <CardActions className={this.cardClasses.buttonWrap}>
                  <Link to="/services/">
                    <CustomButton
                      color="primary"
                      className={this.cardClasses.button}
                    >
                      See All Services
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
