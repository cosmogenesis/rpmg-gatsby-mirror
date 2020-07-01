import React, { Component } from "react"
import Carousel from "react-slick"
import classNames from "classnames"

import { Link } from "gatsby"

// custom Components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import CustomButton from "src/components/CustomButtons/Button.js"
import Professional from "src/components/Professional"

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

export default class PromotedStaffCards extends Component {
  constructor(props) {
    super(props)
    this.cardClasses = props.cardClasses
    this.classes = props.classes
    this.carouselSettings = carouselSettings
    this.delay = props.delay ? this.carouselSettings.autoplaySpeed / 2 : 0
    this.featured = props.featured
    this.slider = null

    this.pause = this.pause.bind(this)
    this.play = this.play.bind(this)
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

  getFullName(bio) {
    let full = bio.salutation + " "
    full += bio.firstName + " "
    full += bio.lastName + " "
    bio.suffix.forEach((s, i) => {
      full += s
      full += i < bio.suffix.length - 1 ? ", " : ""
    })
    return full
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
          {this.featured.professionals.map((professional, i) => {
            return (
              <CardBody
                key={i}
                className={classNames(
                  this.cardClasses.cardBody,
                  this.classes.promotedStaffCard,
                  this.classes.cardBody
                )}
              >
                <Professional
                  professional={professional}
                  classes={this.classes}
                  parentElementName={this.props.headerText}
                  isList={false}
                />

                <CardActions className={this.cardClasses.buttonWrap}>
                  <Link
                    to="/staff/"
                    title={"Navigate to: " + this.props.actionButtonText}
                    data-analytics-label="Featured Professionals Component See All Button"
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
