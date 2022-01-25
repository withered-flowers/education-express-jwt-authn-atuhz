const { Smartphone } = require("../models/index.js");

class SmartphoneController {
  static async getRootSmartphoneHandler(req, res) {
    try {
      const smartphones = await Smartphone.findAll();

      res.status(200).json({
        statusCode: 200,
        data: smartphones,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        error: err.message,
      });
    }
  }

  static async postRootSmartphoneHandler(req, res) {
    try {
      const { name, price, qty, UserId } = req.body;

      const smartphone = await Smartphone.create({
        name,
        price,
        qty,
        UserId,
      });

      res.status(201).json({
        statusCode: 201,
        data: smartphone,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        error: err.message,
      });
    }
  }
}

module.exports = SmartphoneController;