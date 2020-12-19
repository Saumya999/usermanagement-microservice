const mongoose = require('mongoose');

/** User Schema Defined in Three major parts
 * Personal Details
 * Contact Information
 * Mailing Adresses
 * and lastly Password for creating the account.
*/


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    personal_details: {
        firstName: String,
        lastName: { type: String, required: true },
        fullName: String
        /** Will be calculated on the Post Action according to the User Input */
    },
    contact_info: {
        mobile: { type: Number, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        fax: String
    },
    mailing_address: {
        city: String,
        street: String,
        area: String,
        zipcode: { type: Number, required: true },
        state: { type: Number, required: true },
        country: { type: String, required: true }
    },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }
    /** Need to be validated on Post action for Register
    with actual password */
});

module.exports = mongoose.model('user_management_db', userSchema);