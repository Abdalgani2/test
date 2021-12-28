const db = require("./../../db/db");

const createProudect = async (req, res) => {
    const query = `INSERT INTO proudect ( userId,title,description,url) VALUES (?,?,?,?)`;
    let { userId,title,description,url } = req.body;
    const data = [userId,title,description,url];
    db.query(query, data, (err, result) => {
        if (err) {console.log(err);
            return res.status(400).send("can't create Proudect try again please ")};
        res.status(201).json(result);
    });
}

const getAllProudect = (req, res) => {
    const query = `SELECT * FROM proudect ;`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("posts not found try again please ");
        res.status(201).json(result);
    });
};



module.exports = {
    createProudect,
    getAllProudect
};