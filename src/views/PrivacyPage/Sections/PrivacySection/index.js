import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// custome components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"

// core components
import { Typography, List, ListItem } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/privacyPage/sections/privacySectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default PrivacyPolicySection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  return (
    <Card className={classNames(classes.privacyPolicySection)}>
      <CardHeader color="primary">Privacy Policy</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column" item>
          <Typography variant="body1">
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            https://rivpsych.com (the “Site”).
          </Typography>
          <Typography variant="h5">PERSONAL INFORMATION WE COLLECT</Typography>
          <Typography variant="body1">
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information.”
          </Typography>
          <Typography variant="body1">
            We collect Device Information using the following technologies:
          </Typography>
          <List className="rpmg-list-wrapper">
            <ListItem disableGutters className="rpmg-list-item">
              <Typography variant="body1">
                “Cookies” are data files that are placed on your device or
                computer and often include an anonymous unique identifier. For
                more information about cookies, and how to disable cookies,
                visit&nbsp;
                <a href="http://www.allaboutcookies.org" target="_blank">
                  allaboutcookies.com
                </a>
                .
              </Typography>
            </ListItem>
            <ListItem disableGutters className="rpmg-list-item">
              <Typography variant="body1">
                “Log files” track actions occurring on the Site, and collect
                data including your IP address, browser type, Internet service
                provider, referring/exit pages, and date/time stamps.
              </Typography>
            </ListItem>
            <ListItem disableGutters className="rpmg-list-item">
              <Typography variant="body1">
                “Web beacons,” “tags,” and “pixels” are electronic files used to
                record information about how you browse the Site.
              </Typography>
            </ListItem>
          </List>
          <Typography variant="body1">
            [[INSERT DESCRIPTIONS OF OTHER TYPES OF TRACKING TECHNOLOGIES USED]]
          </Typography>
          <Typography variant="body1">
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers [[INSERT ANY OTHER PAYMENT TYPES
            ACCEPTED]]), email address, and phone number. We refer to this
            information as “Order Information.”
          </Typography>
          <Typography variant="body1">
            [[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED
            MARKETING DATA/LISTS]]
          </Typography>
          <Typography variant="body1">
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </Typography>
          <Typography variant="h5">
            HOW DO WE USE YOUR PERSONAL INFORMATION?
          </Typography>
          <Typography variant="body1">
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to: Communicate with you;
          </Typography>
          <Typography variant="body1">
            Screen our orders for potential risk or fraud; and When in line with
            the preferences you have shared with us, provide you with
            information or advertising relating to our products or services.
          </Typography>
          <Typography variant="body1">
            [[INSERT OTHER USES OF ORDER INFORMATION]]
          </Typography>
          <Typography variant="body1">
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </Typography>
          <Typography variant="body1">
            [[INSERT OTHER USES OF DEVICE INFORMATION, INCLUDING:
            ADVERTISING/RETARGETING]]
          </Typography>
          <Typography variant="h5">
            SHARING YOUR PERSONAL INFORMATION
          </Typography>
          <Typography variant="body1">
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. For example, we also
            use Google Analytics to help us understand how our customers use the
            Site--you can read more about how Google uses your Personal
            Information&nbsp;
            <a
              href="https://www.google.com/intl/en/policies/privacy/"
              target="_blank"
            >
              here
            </a>
            . You can also opt-out of Google Analytics&nbsp;
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">
              here
            </a>
            .
          </Typography>
          <Typography variant="body1">
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </Typography>
          <Typography variant="body1">
            [[INCLUDE IF USING REMARKETING OR TARGETED ADVERTISING]]
          </Typography>
          <Typography variant="h5">BEHAVIOURAL ADVERTISING</Typography>
          <Typography variant="body1">
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative’s (“NAI”) educational page&nbsp;
            <a
              href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
              target="_blank"
            >
              here
            </a>
            .
          </Typography>
          <Typography variant="h5">DO NOT TRACK</Typography>
          <Typography variant="body1">
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
          </Typography>
          <Typography variant="h5">CHANGES</Typography>
          <Typography variant="body1">
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </Typography>
          <Typography variant="h5">CONTACT US</Typography>
          <Typography variant="body1">
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at riversidepsychiatric@gmail.com or by mail using the
            details provided below:
          </Typography>
          <Typography variant="body1">
            5887 Brockton Ave, Riverside, CA, 92506, United States
          </Typography>
        </GridContainer>
      </CardBody>
    </Card>
  )
}
