# usermanagement-microservice

User Management System, User Profiles, Login Credentials

## Mutation for Create User Example Mutation with proper Payload

`mutation{ createUser(userInput:{ firstName: "Saumyadipta", lastName: "Sarkar", mobile: "8292310994", email: "Saumyadiptasarkar49@gmail.com", fax:"Valid Fax", city: "Kolkata", street:"Gopal Lal Tagore Road", area: "Baranagore", zipcode: "700036", state:"West Bengal", country:"India", password:"Saumya999", confirmPassword:"Saumya999" }) { \_id mailing_address{ city country }, personal_details { fullName }, contact_info{ email mobile } } }`

## Sample Query for all Users

`query{ allUsers{ _id personal_details{ fullName } mailing_address{ zipcode country state } contact_info{ email } } }`
