import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"

import { Typography, TextField, MenuItem } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/resourcesPage/sections/resourcesSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const initiateDownload = (path, docName) => {
  if (!document) return
  const link = document.createElement("a")
  link.href = "https:" + path
  link.setAttribute("download", true)
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  link.setAttribute("data-analytics-label", "Download Document: " + docName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const ResourcesSection = ({ pageData }) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const [curForm, setFormSelection] = React.useState("")

  const handleSelectChange = event => {
    setFormSelection(event.target.value)
  }

  const {
    pageHeaderTitle,
    sectionHeaderTitle_downloads,
    instructions,
    downloadableDocuments,
    sectionHeaderText_resources,
    resources,
  } = pageData

  console.log(resources)
  return (
    <Card className={classes.resourcesSection}>
      <CardHeader color="primary">{pageHeaderTitle}</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          <GridItem>
            <Typography variant="h4" gutterBottom>
              {sectionHeaderTitle_downloads}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {instructions.instructions}
            </Typography>
          </GridItem>
          <GridItem>
            <form className="rpmg-download-form" noValidate autoComplete="off">
              <div className="rpmg-field-set">
                <TextField
                  id="rpmg-select-form"
                  fullWidth
                  select
                  label="Select Form"
                  value={curForm}
                  onChange={handleSelectChange}
                  helperText="Please select a topic"
                >
                  {downloadableDocuments.map((option, i) => (
                    <MenuItem key={i} value={option.publicName}>
                      <div
                        style={{ width: "100%" }}
                        role="button"
                        onClick={() => {
                          initiateDownload(
                            option.file.file.url,
                            option.publicName
                          )
                        }}
                      >
                        {option.publicName}
                      </div>
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </form>
          </GridItem>
          <GridItem className="rpmg-resource-listing">
            <Typography variant="h4" gutterBottom>
              {sectionHeaderText_resources}
            </Typography>
            <GridContainer direction="column" component="ul">
              {resources.map((r, i) => {
                if (r.phone) {
                  return (
                    <GridContainer key={i} item direction="row" component="li">
                      <GridItem className="rpmg-resource-name">
                        {r.publicName}
                      </GridItem>
                      <GridItem>
                        <a
                          href={"tel:" + r.phone}
                          title={
                            "Open in phone application and call " + r.phone
                          }
                          data-analytics-label={
                            "Reources link: call " + r.publicName
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {r.phone}
                        </a>
                      </GridItem>
                    </GridContainer>
                  )
                } else {
                  return (
                    <GridContainer key={i} item direction="row" component="li">
                      <GridItem className="rpmg-resource-name">
                        {r.publicName}
                      </GridItem>
                      <GridItem>
                        <a
                          href={r.url}
                          title={"Navigate to " + r.publicName}
                          data-analytics-label={
                            "Reources link: navigate to " + r.publicName
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          visit >
                        </a>
                      </GridItem>
                    </GridContainer>
                  )
                }
              })}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default ResourcesSection
