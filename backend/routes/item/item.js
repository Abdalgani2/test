const { Router } = require('express');
const express = require('express');

const router = express.Router();

const itemControllers = require('../../controllers/item/item');

router.post('/addItem',itemControllers.createItem);
router.delete('/deleteItem/:id',itemControllers.deleteItem);
router.put('/editItem/:id',itemControllers.editItem);
router.get('/allItemsReady',itemControllers.allItemReady);
router.get('/allItemsNotReady',itemControllers.allItemNotReady);
router.get('/getItemId/:id',itemControllers.getItemById);
router.get('/getItemTitle/:title',itemControllers.getItemByTitle);

module.exports = router;