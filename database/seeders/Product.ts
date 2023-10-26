import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Product from "../../app/Models/Product";
import ProductsImage from "../../app/Models/ProductsImage";

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        nome: "Sofá Sem Caixa Retrátil E Reclinável Tango 1,80m Cor Cinza",
        descricao:
          "Encontre no seu sofá a qualidade e o conforto que a Netsofas pode te proporcionar. Aproveite os momentos de dispersão lendo uma revista ou assistindo um filme sobre uma estrutura sólida e confortável",
        categoria: "casa",
        preco_original: 3000,
        preco_promocional: 2500,
      },
    ]);

    await ProductsImage.createMany([
      {
        productId: 1,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 1,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
    ]);
  }
}
