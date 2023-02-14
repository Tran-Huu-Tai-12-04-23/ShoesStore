import db from '../models/index';
import CRUDService from '../service/CRUDService';

const userController = {
    getUsers: async (req, res) => {
        try {
            let data = await db.User.findAll({
                // where: { typeIdUser: 'customer' },
            });
            return res.status(200).json({
                code: 200,
                message: 'success',
                data: data,
            });
        } catch (err) {
            return res.send(err.message);
        }
    },

    signIn: async (req, res) => {
        try {
            let data = req.body;
            let message = await CRUDService.createNewUser(data);
            console.log(message);
            return res.send(JSON.stringify(data));
        } catch (err) {
            return res.send(err.message);
        }
    },
};

export default userController;
