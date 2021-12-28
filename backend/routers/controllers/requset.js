const db = require("./../../db/db");

const sendRequest = async (req, res) => {
    const query = `INSERT INTO proudect ( _IdCart ,proudectId) VALUES (?,?)`;
    let { _IdCart ,proudectId } = req.body;
    const data = [_IdCart ,proudectId];
    db.query(query, data, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).send("can't create requset try again please ")
        };
        res.status(201).json(result);
    });
}



module.exports = {
    sendRequest
};