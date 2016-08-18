/**
 * Created by ChengFan on 2016/8/18.
 */
module.exports = {
    user: {
        name: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: Boolean, default: true }
    }
};