import { graphql } from "gatsby"

export const siteMetaData = graphql`
  fragment SiteMetaData on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`

export const pageScaffolding = graphql`
  fragment PageScaffolding on ContentfulScaffoldingPageSeoAndOtherBasics {
    seoDescription
    seoPageTitle
    keywords
    heroImageDesktop {
      file {
        url
      }
      fluid(maxWidth: 500, quality: 100) {
        src
      }
    }
    heroImageMobile {
      file {
        url
      }
    }
  }
`

export const featuredServices = graphql`
  fragment FeaturedServicesCollections on ContentfulFeaturedServiceCollections {
    serviceCollections {
      description {
        description
      }
      publicName
      services {
        publicName
      }
    }
  }
`
export const professional = graphql`
  fragment Professional on ContentfulProfessional {
    bio {
      bio
    }
    bioTeaser
    salutation
    lastName
    firstName
    suffix
    headshot {
      file {
        url
      }
    }
    services {
      publicName
    }
  }
`

export const featuredProfessionals = graphql`
  fragment FeaturedProfessionals on ContentfulFeaturedProfessionals {
    professionals {
      ...Professional
    }
  }
`

export const siteVariables = graphql`
  fragment SiteVariables on ContentfulWebsiteGlobalVariables {
    buttonText_featuredProfessionals
    buttonText_featuredServices
    headerText_featuredProfessionals
    headerText_featuredServices
    siteTitle
    producer
  }
`

export const serviceCollections = graphql`
  fragment ServiceCollections on ContentfulServiceCollectionProgramOrServiceCategory {
    description {
      description
    }
    publicName
    services {
      description {
        description
      }
      publicName
    }
  }
`
export const homePageFragment = graphql`
  fragment HomePageFragment on ContentfulPageHomepage {
    scaffolding {
      ...PageScaffolding
    }
    featuredServices {
      ...FeaturedServicesCollections
    }
    featuredProfessionals {
      ...FeaturedProfessionals
    }
  }
`

export const servicesPageFragment = graphql`
  fragment ServicesPageFragment on ContentfulPageServicesListing {
    scaffolding {
      ...PageScaffolding
    }
    headerText_serviceListing
    featuredProfessionals {
      ...FeaturedProfessionals
    }
  }
`

export const professionalsPageFragment = graphql`
  fragment ProfessionalsPageFragment on ContentfulPageProfessionalsListing {
    scaffolding {
      ...PageScaffolding
    }
    professionalsListingHeaderTitle
    featuredServices {
      ...FeaturedServicesCollections
    }
  }
`

export const patientResourcesPage = graphql`
  fragment PatientResourcesPage on ContentfulPagePatientResources {
    scaffolding {
      ...PageScaffolding
    }
    pageHeaderTitle
    sectionHeaderTitle_downloads
    sectionHeaderText_resources
    instructions {
      instructions
    }
    downloadableDocuments {
      publicName
      file {
        file {
          url
        }
      }
    }
    resources {
      publicName
      phone
      url
    }
    featuredServices {
      ...FeaturedServicesCollections
    }
  }
`
export const faqContactPage = graphql`
  fragment FaqContactPage on ContentfulPageFaqContactPage {
    scaffolding {
      ...PageScaffolding
    }
    headerText_ContactUsForm
    headerText_faqListing
    faqs {
      question
      answer {
        answer
      }
    }
    instructions_contactUsForm
    topics {
      topic
      email
    }
  }
`
export const aboutPageFragment = graphql`
  fragment AboutPageFragment on ContentfulPageAboutUs {
    scaffolding {
      ...PageScaffolding
    }
    headerText_aboutUsSection
    subheaderText_aboutUsSubsection
    subheaderTitle_contactLinks
    address
    phone
    text_aboutUs {
      childMarkdownRemark {
        html
      }
    }
    featuredProfessionals {
      ...FeaturedProfessionals
    }
  }
`
