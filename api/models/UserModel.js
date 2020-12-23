const mongoose = require('mongoose');

/** User Schema Defined in Three major parts
 * Personal Details
 * Contact Information
 * Mailing Adresses
 * and lastly Password for creating the account.
*/


const userSchema = mongoose.Schema({
    username: {required: true, unique: true, type: String},
    personal_details: {
        firstName: { type: String, required: true },
        lastName: String,
        fullName: String
        /** Will be calculated on the Post Action according to the User Input */
    },
    contact_info: {
        mobile: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        fax: String
    },
    mailing_address: {
        city: String,
        street: String,
        area: String,
        zipcode: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true }
    },
    password: { type: String, required: true },
    confirmPassword: { type: String}
    /** Need to be validated on Post action for Register
    with actual password */
});

module.exports = mongoose.model('user_management_db', userSchema);