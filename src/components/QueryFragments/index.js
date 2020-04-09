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

export const featuredProfessionals = graphql`
  fragment FeaturedProfessionals on ContentfulFeaturedProfessionals {
    professionals {
      bioTeaser
      salutation
      lastName
      firstName
      suffix
      services {
        publicName
      }
    }
  }
`
