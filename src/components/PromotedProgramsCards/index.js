import React, { Component } from "react"
import Carousel from "react-slick"

import classNames from "classnames"
//import { MemoryRouter as Router } from 'react-router';
import { Link } from "gatsby"

// custom components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import CustomButton from "src/components/CustomButtons/Button.js"
import ServiceCollection from "src/components/ServiceCollection"

import { CardActions } from "@material-ui/core"

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
    this.props = props
    this.cardClasses = props.cardClasses
    this.classes = props.classes
    this.carouselSettings = carouselSettings
    this.delay = props.delay ? this.carouselSettings.autoplaySpeed / 2 : 0
    this.featured = props.featured
    this.slider = null

    this.pause = this.pause.bind(this)

    this.play = this.play.bind(this)
    this.state = {
      expanded: false,
    }
  }
  componentDidMount() {
    this.pause()
    setTimeout(this.play, this.delay)
  }

  play() {
    if (this.slider) this.slider.slickPlay()
  }
  pause() {
    if (this.slider) this.slider.slickPause()
  }

  render() {
    return (
      <Card>
        <CardHeader color="primary">{this.props.headerText}</CardHeader>

        <Carousel
          ref={slider => (this.slider = slider)}
          {...this.carouselSettings}
          className={this.cardClasses.cardCarousel}
        >
          {this.featured.serviceCollections.map((collection, i) => {
            return (
              <CardBody
                key={i}
                className={classNames(
                  this.cardClasses.cardBody,
                  this.classes.promotedProgramsCard,
                  this.classes.cardBody
                )}
              >
                <ServiceCollection
                  collection={collection}
                  classes={this.classes}
                  isList={false}
                />

                <CardActions className={this.cardClasses.buttonWrap}>
                  <Link
                    to="/services/"
                    title={"Navigate to: " + this.props.actionButtonText}
                    data-analytics-label="Featured Services and Programs Component See All Button"
                  >
                    <CustomButton
                      color="primary"
                      className={this.cardClasses.button}
                    >
                      {this.props.actionButtonText}
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
