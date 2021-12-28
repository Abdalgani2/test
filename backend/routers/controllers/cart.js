const db = require("./../../db/db");

const addToCart = async (req, res) => {
    const query = `INSERT INTO cart ( userId ,proudectId ) VALUES (?,?)`;
    let { userId, proudectId } = req.body;
    const data = [userId, proudectId];
    db.query(query, data, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).send("can't create post try again please ")
        };
        res.status(201).json(result);
    });
}

const getAllCart = (req, res) => {
    const query = `SELECT * FROM cart WHERE approval=1;`;
    db.query(query, (err, result) => {
        if (err) return res.status(400).send("proudect not found try again please ");
        res.status(201).json(result);
    });
};

const editproduct = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE cart SET approval=1 WHERE _IdCart=${id}`;

    db.query(query, (err, result) => {
        if (err) {
            console.log(err); return res.status(400).send("can't update post try again please");
        }
        return res.status(200).send("update post")
    });
};

module.exports = {
    addToCart,
    getAllCart,
    editproduct
};