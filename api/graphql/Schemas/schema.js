const { buildSchema } = require('graphql');


module.exports = buildSchema(`
type PersonalDetails {
    firstName: String!
    lastName: String
    fullName: String
}

type ContactInfo {
    mobile: String!
    email: String!
    fax: String
}

type MailingAddress {
    city: String
    street: String
    area: String
    zipcode: String
    state: String
    country: String
}

type UserDetails {
    _id: ID!
    username: String!
    personal_details: PersonalDetails
    contact_info: ContactInfo
    mailing_address: MailingAddress
    password: String!
    confirmPassword: String!
}

input UserInput {
    username: String!
    firstName: String!
    lastName: String
    mobile: String!
    email: String!
    fax: String
    city: String
    street: String
    area: String
    zipcode: String
    state: String
    country: String
    password: String!
    confirmPassword: String!
}
type RootQuery {
    allUsers: [UserDetails!]!
    specificUser(username: String!): UserDetails
}
type RootMutation {
    createUser(userInput: UserInput): UserDetails
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);