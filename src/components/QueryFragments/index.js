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
