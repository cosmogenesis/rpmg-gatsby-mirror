import { graphql } from "gatsby"

export const siteMetaDataFragment = graphql`
  fragment SiteMetaDataFragment on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`

export const pageScaffoldingFragment = graphql`
  fragment PageScaffoldingFragment on ContentfulScaffoldingPageSeoAndOtherBasics {
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

export const featuredServicesFragment = graphql`
  fragment FeaturedServicesCollectionsFragment on ContentfulFeaturedServiceCollections {
    serviceCollections {
      description {
        childMarkdownRemark {
          html
        }
      }
      publicName
      services {
        publicName
      }
    }
  }
`
export const professionalFragment = graphql`
  fragment ProfessionalFragment on ContentfulProfessional {
    bio {
      childMarkdownRemark {
        html
      }
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

export const featuredProfessionalsFragment = graphql`
  fragment FeaturedProfessionalsFragment on ContentfulFeaturedProfessionals {
    professionals {
      ...ProfessionalFragment
    }
  }
`

export const siteVariablesFragment = graphql`
  fragment SiteVariablesFragment on ContentfulWebsiteGlobalVariables {
    buttonText_featuredProfessionals
    buttonText_featuredServices
    headerText_featuredProfessionals
    headerText_featuredServices
    siteTitle
    producer
  }
`

export const serviceCollectionsFragment = graphql`
  fragment ServiceCollectionsFragment on ContentfulServiceCollectionProgramOrServiceCategory {
    description {
      childMarkdownRemark {
        html
      }
    }
    publicName
    services {
      description {
        childMarkdownRemark {
          html
        }
      }
      publicName
    }
  }
`
export const homePageFragment = graphql`
  fragment HomePageFragment on ContentfulPageHomepage {
    scaffolding {
      ...PageScaffoldingFragment
    }
    featuredServices {
      ...FeaturedServicesCollectionsFragment
    }
    featuredProfessionals {
      ...FeaturedProfessionalsFragment
    }
  }
`

export const servicesPageFragment = graphql`
  fragment ServicesPageFragment on ContentfulPageServicesListing {
    scaffolding {
      ...PageScaffoldingFragment
    }
    headerText_serviceListing
    featuredProfessionals {
      ...FeaturedProfessionalsFragment
    }
  }
`

export const professionalsPageFragment = graphql`
  fragment ProfessionalsPageFragment on ContentfulPageProfessionalsListing {
    scaffolding {
      ...PageScaffoldingFragment
    }
    professionalsListingHeaderTitle
    featuredServices {
      ...FeaturedServicesCollectionsFragment
    }
  }
`

export const patientResourcesPageFragment = graphql`
  fragment PatientResourcesPageFragment on ContentfulPagePatientResources {
    scaffolding {
      ...PageScaffoldingFragment
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
      ...FeaturedServicesCollectionsFragment
    }
  }
`
export const faqContactPageFragment = graphql`
  fragment FaqContactPageFragment on ContentfulPageFaqContactPage {
    scaffolding {
      ...PageScaffoldingFragment
    }
    headerText_ContactUsForm
    headerText_faqListing
    faqs {
      question
      answer {
        childMarkdownRemark {
          html
        }
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
      ...PageScaffoldingFragment
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
      ...FeaturedProfessionalsFragment
    }
  }
`

export const privacyPageFragment = graphql`
  fragment PrivacyPageFragment on ContentfulPagePrivacyPolicy {
    scaffolding {
      ...PageScaffoldingFragment
    }
    headerText_privacyPolicySection
    text_privacyPolicy {
      childMarkdownRemark {
        html
      }
    }
  }
`

export const termsPageFragment = graphql`
  fragment TermsPageFragment on ContentfulPageTermsConditions {
    scaffolding {
      ...PageScaffoldingFragment
    }
    headerText_termsConditions
    text_termsConditions {
      childMarkdownRemark {
        html
      }
    }
  }
`
export const pageMissingPageFragment = graphql`
  fragment PageMissingPageFragment on ContentfulPagePageMissing404Page {
    scaffolding {
      ...PageScaffoldingFragment
    }
    headerText
    message {
      childMarkdownRemark {
        html
      }
    }
  }
`
