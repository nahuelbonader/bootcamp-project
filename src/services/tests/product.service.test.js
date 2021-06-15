const productService = require("../product.service");
const productDao = require("../../daos/product.dao");

jest.mock("../../daos/product.dao.js");

describe("Product Service", () => {
  describe("Get method", () => {
    it("get product should fail with error product_not_found", async () => {
      const mock = [{ exists: 0 }];
      const resultError = {
        error: "product_not_found",
        msg: "Producto no encontrado",
      };
      productDao.exists.mockImplementationOnce(() => mock);

      expect.assertions(1);

      try {
        await productService.getOne(1);
      } catch (error) {
        expect(error).toEqual(resultError);
      }
    });
  });
});
