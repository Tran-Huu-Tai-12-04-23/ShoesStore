import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);
const myPlaintextPassword = 's0//P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
import db from '../models';

const CRUDService = {
    createNewUser: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let passHash = await CRUDService.hashPassword(data.password);
                await db.Users.create({
                    email: data.email,
                    password: passHash,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    gender: data.gender,
                    roleID: data.roleID,
                    phoneNumber: data.phoneNumber,
                    positionID: data.positionID ? data.positionID : 'default',
                    image: data.image ? data.image : 'default',
                });
                resolve('Create new user successfully');
            } catch (err) {
                reject(err);
            }
        });
    },

    hashPassword: (pass) => {
        return new Promise(async (resolve, reject) => {
            try {
                var hashPass = await bcrypt.hashSync(pass, salt);
                resolve(hashPass);
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = CRUDService;
