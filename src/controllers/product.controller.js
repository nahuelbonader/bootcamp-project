class productController {
  static async get(req, res) {
    return res.send("Aquí va el get");
  }
  static async post(req, res) {
    return res.send("Aquí va el get");
  }
  static async getOne(req, res) {
    return res.send("Aquí va el get one");
  }
  static async deleteOne(req, res) {
    return res.send("Aquí va el get");
  }
  static async updateOne(req, res) {
    return res.send("Aquí va el put");
  }
}

module.exports = productController;
