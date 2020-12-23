  
const bcrypt = require('bcrypt');

const UserModel = require('../../../api/models/UserModel');

module.exports = {
    createUser: async args => {
        try {
                if (args.userInput.password != args.userInput.confirmPassword) {
                    throw new Error('Password did not match');   
                }
                const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
            const user = new UserModel({
                    username: args.userInput.username,
                    personal_details: { 
                        firstName: args.userInput.firstName,
                        lastName: args.userInput.lastName,
                        fullName: args.userInput.firstName + ' ' + args.userInput.lastName
                    },
                    contact_info: {
                        mobile: args.userInput.mobile,
                        email: args.userInput.email,
                        fax: args.userInput.fax
                    },
                    mailing_address: {
                        city: args.userInput.city,
                        street: args.userInput.street,
                        area: args.userInput.area,
                        zipcode: args.userInput.zipcode,
                        state: args.userInput.state,
                        country: args.userInput.country
                    },
                    password: hashedPassword
                });

                const userDetails = await user.save();
                return {...userDetails._doc, id: userDetails.id, password: null};
        }  catch(err) {
                throw err;
        } 
    },
    allUsers: async () => {
        try {
            const users = await UserModel.find();
            return users.map(user => {
                return { ...user._doc, _id: user._id, password: null };
            });
        } catch (err) {
            throw err;
        }
    },
    specificUser: async args => {
        const user = await UserModel.findOne({ username: args.username });
        return {...user._doc, _id:user._id, password: null };
       
        
    }
}