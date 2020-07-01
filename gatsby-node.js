/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type ContentfulProfessional implements Node {
        headshot: ContentfulAsset
      }
      type ContentfulScaffoldingPageSeoAndOtherBasics implements Node {
        heroImageMobile: ContentfulAsset
      }

      type ContentfulPagePatientResources implements Node {
        downloadableDocuments: [ContentfulDownloadableDocument]
      }


      type ContentfulService implements Node {
        description: contentfulServiceDescriptionTextNode
      }

      type contentfulServiceDescriptionTextNode implements Node
      @childOf(types: ["ContentfulService"]) {
        id: ID!
      }

      type MarkdownRemark implements Node
      @childOf(types: ["contentfulServiceDescriptionTextNode"]) {
        id: ID!
      }
    `
  createTypes(typeDefs)
}
