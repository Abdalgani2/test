const Item = require("../../models/items")

/////// CREATE ITEM  ///////
exports.createItem = (req,res)=>{
    const {title , description , imageUrl,price ,userId}  = req.body
    const item = new Item({
        title :title , description :description, imageUrl :imageUrl,price:price,userId:userId
    })
    item.save() 
    .then(result => {
            res.status(201).send(result);
    }).catch(err => {
        console.log(err);
      });
}

/////// DELETE ITEM ///////
exports.deleteItem = (req,res) =>{
    const idItem = req.params.id
    Item.deleteOne({"_id":idItem})
    .then(()=>{res.send("success delete")})
    .catch(err => {
          res.send(err)
        });
}

/////// GEI ITEM BY ID///////
exports.getItemById = (req,res) =>{
  const idItem = req.params.id
  Item.findById(idItem)
  .then((RESULT)=>{res.send(RESULT)})
  .catch(err => {
        res.send(err)
      });
}

/////// EDIT ITEM ///////
exports.editItem = (req,res)=>{
    const idItem = req.params.id
    const {title , description , price }  = req.body
    Item.updateOne({"_id":idItem},
    {
        $set: {
          title:title,
          description: description,
          price:price
        }
      }).then(()=>{
        res.send("success update")
      })
      .catch(err => {
        res.send(err)
      });
}

/////// ALL ITEM READY ///////
exports.allItemReady = (req,res) => {
Item.find({ready:1})
.then((result)=>{
    res.send(result)
})
.catch(err => {
    res.send(err)
  });
}

/////// ALL ITEM NOT READY ///////
exports.allItemNotReady = (req,res) => {
    Item.find({ready:0})
    .then((result)=>{
        res.send(result)
    })
    .catch(err => {
        res.send(err)
      });
    }

    exports.deleteItem = (req,res) =>{
        const idItem = req.params.id
        Item.deleteOne({"_id":idItem})
        .then(()=>{res.send("success delete")})
        .catch(err => {
              res.send(err)
            });
    }
    
    /////// ACCEPT ITEM ///////
    exports.acceptItem = (req,res)=>{
        const idItem = req.params.id
        Item.updateOne({"_id":idItem},
        {
            $set: {
              ready:1
            }
          }).then(()=>{
            res.send("success acceept")
          })
          .catch(err => {
            res.send(err)
          });
    }

    /////// GET ITEM BY TITLE ///////
    exports.getItemByTitle =(req,res)=>{
        const title = req.params.title;
        Item
          .find({ title : title ,ready:1})
          .then(items => {
            res.status(200).send(items)
          })
          .catch(err => {
            res.status(400).send(err)
          });
      
      };
