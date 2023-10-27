import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "../../Models/Product";

export default class ProductsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input("page", 1);
    const pageSize = request.input("pageSize", 10);
    const search = request.input("search", "");

    const data = await Product.query()
      .where("nome", "Like", `%${search}%`)
      .preload("imagens")
      .paginate(page, pageSize);

    return data;
  }
}
