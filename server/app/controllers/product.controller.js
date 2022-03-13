const console = require('console');
const db = require('../models')
const Product = db.products;
const Op = db.Sequelize.Op;
// Create and Save a new product
exports.create = (req, res) => {
      // Validate request
      if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a product
      const prod = {
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type
      }
    
      // Save product in the database
      Product.create(prod)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          })
        })
}
// Retrieve all product from the database.
exports.findAll = (req, res) => {
    const title = req.query.name;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Food.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        })
      })
}
// Find a single product with an id
exports.findOne = (req, res) => {
  
}
// Update a product by the id in the request
exports.update = (req, res) => {
  
}
// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  
}
// Delete all products from the database.
exports.deleteAll = (req, res) => {
  
}
// Find all published Tutorials
exports.findAllType = (req, res) => {
  
}
