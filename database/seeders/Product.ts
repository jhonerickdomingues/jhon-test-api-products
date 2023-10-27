import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Product from "../../app/Models/Product";
import ProductsImage from "../../app/Models/ProductsImage";

export default class extends BaseSeeder {
  public async run() {
    let products: any = [
      {
        nome: "Sofá Sem Caixa Retrátil E Reclinável Tango 1,80m Cor Cinza",
        descricao:
          "Encontre no seu sofá a qualidade e o conforto que a Netsofas pode te proporcionar. Aproveite os momentos de dispersão lendo uma revista ou assistindo um filme sobre uma estrutura sólida e confortável",
        categoria: "casa",
        preco_original: 300000,
        preco_promocional: 250000,
      },
      {
        nome: "Xiaomi Redmi Note 12s 256gb 8gb Ram (global) Lançamento",
        descricao:
          "O Redmi Note 12S é uma celular fantástico com sistema Android e com características que são as melhores do mercado. Possui uma tela touchscreen Dot Display de 6.43 HD+, 20:9, AMOLED com proteção Corning Gorilla Glass 3. Design elegante, bordas finas, leve e fino",
        categoria: "celulares",
        preco_original: 200000,
        preco_promocional: 150000,
      },
      {
        nome: "Fritadeira Sem Óleo Air Fryer Afn-40-bft 4l 1500w Mondial Cor Preto 110V",
        descricao:
          "Prepare receitas do café da manhã ao jantar com a Air Fryer Mondial. E o melhor: de forma prática, rápida e saudável! A Tecnologia de Circulação de Ar Quente cozinha, frita assa ou tosta os alimentos sem precisar adicionar óleo, ou manteiga",
        categoria: "cozinha",
        preco_original: 40000,
        preco_promocional: 35000,
      },
      {
        nome: "Smart Tv 50'' Ptv50g7er2cpbl 4k Led Roku Philco Bivolt",
        descricao: "Veja seus filmes com a maior qualidade",
        categoria: "eletrodomesticos",
        preco_original: 200000,
        preco_promocional: 180000,
      },
      {
        nome: "Notebook Samsung Book Celeron Cinza 4gb 256gb Ssd 15,6'' W11 Cor Cinza/Chumbo",
        descricao:
          "O Samsung Book oferece design e desempenho excepcionais para quem busca qualidade, desempenho e elegância. Possui facilidade de upgrade de armazenamento e maior durabilidade.",
        categoria: "informatica",
        preco_original: 200000,
        preco_promocional: 150000,
      },
      {
        nome: "Gel De Limpeza Facial Effaclar Concentrado 300g La Roche Posay",
        descricao:
          "O Gel de Limpeza facial Effaclar Concentrado 300g La Roche Posay é ideal para sua pele, pois faz uma limpeza profunda desobstruindo os poros profundamente e reduzindo a oleosidade de forma duradoura.",
        categoria: "pessoal",
        preco_original: 6000,
        preco_promocional: 5000,
      },
      {
        nome: "Chevy Impala Ss 409 Conversível 1962 Prata 1/64 Auto World",
        descricao: "Carrinhos para se divertir.",
        categoria: "brinquedo",
        preco_original: 7000,
        preco_promocional: 6200,
      },
      {
        nome: "Ferrorama Rail Train Trem Eletrico Luz E Som Pronta",
        descricao: "Trem para se divertir.",
        categoria: "brinquedo",
        preco_original: 3000,
        preco_promocional: 2000,
      },
      {
        nome: "Sofá Sem Caixa Retrátil E Reclinável Tango 1,80m Cor Cinza",
        descricao:
          "Encontre no seu sofá a qualidade e o conforto que a Netsofas pode te proporcionar. Aproveite os momentos de dispersão lendo uma revista ou assistindo um filme sobre uma estrutura sólida e confortável",
        categoria: "casa",
        preco_original: 300000,
        preco_promocional: 250000,
      },
      {
        nome: "Xiaomi Redmi Note 12s 256gb 8gb Ram (global) Lançamento",
        descricao:
          'O Redmi Note 12S é uma celular fantástico com sistema Android e com características que são as melhores do mercado. Possui uma tela touchscreen Dot Display de 6.43" HD+, 20:9, AMOLED com proteção Corning Gorilla Glass 3. Design elegante, bordas finas, leve e fino',
        categoria: "celulares",
        preco_original: 200000,
        preco_promocional: 150000,
      },
      {
        nome: "Fritadeira Sem Óleo Air Fryer Afn-40-bft 4l 1500w Mondial Cor Preto 110V",
        descricao:
          "Prepare receitas do café da manhã ao jantar com a Air Fryer Mondial. E o melhor: de forma prática, rápida e saudável! A Tecnologia de Circulação de Ar Quente cozinha, frita assa ou tosta os alimentos sem precisar adicionar óleo, ou manteiga",
        categoria: "cozinha",
        preco_original: 40000,
        preco_promocional: 35000,
      },
      {
        nome: "Smart Tv 50'' Ptv50g7er2cpbl 4k Led Roku Philco Bivolt",
        descricao: "Veja seus filmes com a maior qualidade",
        categoria: "eletrodomesticos",
        preco_original: 200000,
        preco_promocional: 180000,
      },
      {
        nome: "Notebook Samsung Book Celeron Cinza 4gb 256gb Ssd 15,6'' W11 Cor Cinza/Chumbo",
        descricao:
          "O Samsung Book oferece design e desempenho excepcionais para quem busca qualidade, desempenho e elegância. Possui facilidade de upgrade de armazenamento e maior durabilidade.",
        categoria: "informatica",
        preco_original: 200000,
        preco_promocional: 150000,
      },
      {
        nome: "Gel De Limpeza Facial Effaclar Concentrado 300g La Roche Posay",
        descricao:
          "O Gel de Limpeza facial Effaclar Concentrado 300g La Roche Posay é ideal para sua pele, pois faz uma limpeza profunda desobstruindo os poros profundamente e reduzindo a oleosidade de forma duradoura.",
        categoria: "pessoal",
        preco_original: 6000,
        preco_promocional: 5000,
      },
      {
        nome: "Chevy Impala Ss 409 Conversível 1962 Prata 1/64 Auto World",
        descricao: "Carrinhos para se divertir.",
        categoria: "brinquedo",
        preco_original: 7000,
        preco_promocional: 6200,
      },
      {
        nome: "Ferrorama Rail Train Trem Eletrico Luz E Som Pronta",
        descricao: "Trem para se divertir.",
        categoria: "brinquedo",
        preco_original: 3000,
        preco_promocional: 2000,
      },
      {
        nome: "Sofá Sem Caixa Retrátil E Reclinável Tango 1,80m Cor Cinza",
        descricao:
          "Encontre no seu sofá a qualidade e o conforto que a Netsofas pode te proporcionar. Aproveite os momentos de dispersão lendo uma revista ou assistindo um filme sobre uma estrutura sólida e confortável",
        categoria: "casa",
        preco_original: 300000,
        preco_promocional: 250000,
      },
      {
        nome: "Xiaomi Redmi Note 12s 256gb 8gb Ram (global) Lançamento",
        descricao:
          'O Redmi Note 12S é uma celular fantástico com sistema Android e com características que são as melhores do mercado. Possui uma tela touchscreen Dot Display de 6.43" HD+, 20:9, AMOLED com proteção Corning Gorilla Glass 3. Design elegante, bordas finas, leve e fino',
        categoria: "celulares",
        preco_original: 200000,
        preco_promocional: 150000,
      },
      {
        nome: "Fritadeira Sem Óleo Air Fryer Afn-40-bft 4l 1500w Mondial Cor Preto 110V",
        descricao:
          "Prepare receitas do café da manhã ao jantar com a Air Fryer Mondial. E o melhor: de forma prática, rápida e saudável! A Tecnologia de Circulação de Ar Quente cozinha, frita assa ou tosta os alimentos sem precisar adicionar óleo, ou manteiga",
        categoria: "cozinha",
        preco_original: 40000,
        preco_promocional: 35000,
      },
      {
        nome: "Smart Tv 50'' Ptv50g7er2cpbl 4k Led Roku Philco Bivolt",
        descricao: "Veja seus filmes com a maior qualidade",
        categoria: "eletrodomesticos",
        preco_original: 200000,
        preco_promocional: 180000,
      },
      {
        nome: "Notebook Samsung Book Celeron Cinza 4gb 256gb Ssd 15,6'' W11 Cor Cinza/Chumbo",
        descricao:
          "O Samsung Book oferece design e desempenho excepcionais para quem busca qualidade, desempenho e elegância. Possui facilidade de upgrade de armazenamento e maior durabilidade.",
        categoria: "informatica",
        preco_original: 200000,
        preco_promocional: 150000,
      },
      {
        nome: "Gel De Limpeza Facial Effaclar Concentrado 300g La Roche Posay",
        descricao:
          "O Gel de Limpeza facial Effaclar Concentrado 300g La Roche Posay é ideal para sua pele, pois faz uma limpeza profunda desobstruindo os poros profundamente e reduzindo a oleosidade de forma duradoura.",
        categoria: "pessoal",
        preco_original: 6000,
        preco_promocional: 5000,
      },
      {
        nome: "Chevy Impala Ss 409 Conversível 1962 Prata 1/64 Auto World",
        descricao: "Carrinhos para se divertir.",
        categoria: "brinquedo",
        preco_original: 7000,
        preco_promocional: 6200,
      },
      {
        nome: "Ferrorama Rail Train Trem Eletrico Luz E Som Pronta",
        descricao: "Trem para se divertir.",
        categoria: "brinquedo",
        preco_original: 3000,
        preco_promocional: 2000,
      },
    ];

    await Product.createMany(products);

    const productsImage = [
      {
        productId: 1,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 1,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
      {
        productId: 1,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 1,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
      {
        productId: 2,
        url: "https://http2.mlstatic.com/D_NQ_NP_970058-MLB70975344015_082023-O.webp",
      },
      {
        productId: 2,
        url: "https://http2.mlstatic.com/D_NQ_NP_677619-MLB70975344011_082023-O.webp",
      },
      {
        productId: 2,
        url: "https://http2.mlstatic.com/D_NQ_NP_971703-MLB70975343989_082023-O.webp",
      },
      {
        productId: 2,
        url: "https://http2.mlstatic.com/D_NQ_NP_981062-MLB70975344005_082023-O.webp",
      },
      {
        productId: 3,
        url: "https://http2.mlstatic.com/D_NQ_NP_617254-MLU72447187406_102023-O.webp",
      },
      {
        productId: 3,
        url: "https://http2.mlstatic.com/D_NQ_NP_980276-MLU70443551614_072023-O.webp",
      },
      {
        productId: 3,
        url: "https://http2.mlstatic.com/D_NQ_NP_980276-MLU70443551614_072023-O.webp",
      },
      {
        productId: 3,
        url: "https://http2.mlstatic.com/D_NQ_NP_847977-MLU71412339806_092023-O.webp",
      },
      {
        productId: 4,
        url: "https://http2.mlstatic.com/D_NQ_NP_774994-MLU70487189411_072023-O.webp",
      },
      {
        productId: 4,
        url: "https://http2.mlstatic.com/D_NQ_NP_639628-MLU70487189403_072023-O.webp",
      },
      {
        productId: 4,
        url: "https://http2.mlstatic.com/D_NQ_NP_639628-MLU70487189403_072023-O.webp",
      },
      {
        productId: 4,
        url: "https://http2.mlstatic.com/D_NQ_NP_774994-MLU70487189411_072023-O.webp",
      },
      {
        productId: 5,
        url: "https://http2.mlstatic.com/D_NQ_NP_905206-MLU72515264853_102023-O.webp",
      },
      {
        productId: 5,
        url: "https://http2.mlstatic.com/D_NQ_NP_855835-MLU72515255167_102023-O.webp",
      },
      {
        productId: 5,
        url: "https://http2.mlstatic.com/D_NQ_NP_701685-MLU72515245397_102023-O.webp",
      },
      {
        productId: 5,
        url: "https://http2.mlstatic.com/D_NQ_NP_698250-MLU72446493274_102023-O.webp",
      },
      {
        productId: 6,
        url: "https://http2.mlstatic.com/D_NQ_NP_857869-MLA51852973082_102022-O.webp",
      },
      {
        productId: 6,
        url: "https://http2.mlstatic.com/D_NQ_NP_612831-MLA51852652988_102022-O.webp",
      },
      {
        productId: 6,
        url: "https://http2.mlstatic.com/D_NQ_NP_714407-MLA51852652992_102022-O.webp",
      },
      {
        productId: 6,
        url: "https://http2.mlstatic.com/D_NQ_NP_845894-MLA51852984028_102022-O.webp",
      },
      {
        productId: 7,
        url: "https://http2.mlstatic.com/D_NQ_NP_953576-MLU69955167589_062023-O.webp",
      },
      {
        productId: 7,
        url: "https://http2.mlstatic.com/D_NQ_NP_809096-MLU69955207261_062023-O.webp",
      },
      {
        productId: 7,
        url: "https://http2.mlstatic.com/D_NQ_NP_809096-MLU69955207261_062023-O.webp",
      },
      {
        productId: 7,
        url: "https://http2.mlstatic.com/D_NQ_NP_916793-MLU69955207263_062023-O.webp",
      },
      {
        productId: 8,
        url: "https://http2.mlstatic.com/D_NQ_NP_763019-MLU69641632987_052023-O.webp",
      },
      {
        productId: 8,
        url: "https://http2.mlstatic.com/D_NQ_NP_763019-MLU69641632987_052023-O.webp",
      },
      {
        productId: 8,
        url: "https://http2.mlstatic.com/D_NQ_NP_822183-MLU69641632993_052023-O.webp",
      },
      {
        productId: 8,
        url: "https://http2.mlstatic.com/D_NQ_NP_732748-MLU70045308610_062023-O.webp",
      },
      {
        productId: 9,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 9,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
      {
        productId: 9,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 9,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
      {
        productId: 10,
        url: "https://http2.mlstatic.com/D_NQ_NP_970058-MLB70975344015_082023-O.webp",
      },
      {
        productId: 10,
        url: "https://http2.mlstatic.com/D_NQ_NP_677619-MLB70975344011_082023-O.webp",
      },
      {
        productId: 10,
        url: "https://http2.mlstatic.com/D_NQ_NP_971703-MLB70975343989_082023-O.webp",
      },
      {
        productId: 10,
        url: "https://http2.mlstatic.com/D_NQ_NP_981062-MLB70975344005_082023-O.webp",
      },
      {
        productId: 11,
        url: "https://http2.mlstatic.com/D_NQ_NP_617254-MLU72447187406_102023-O.webp",
      },
      {
        productId: 11,
        url: "https://http2.mlstatic.com/D_NQ_NP_980276-MLU70443551614_072023-O.webp",
      },
      {
        productId: 11,
        url: "https://http2.mlstatic.com/D_NQ_NP_980276-MLU70443551614_072023-O.webp",
      },
      {
        productId: 11,
        url: "https://http2.mlstatic.com/D_NQ_NP_847977-MLU71412339806_092023-O.webp",
      },
      {
        productId: 12,
        url: "https://http2.mlstatic.com/D_NQ_NP_774994-MLU70487189411_072023-O.webp",
      },
      {
        productId: 12,
        url: "https://http2.mlstatic.com/D_NQ_NP_639628-MLU70487189403_072023-O.webp",
      },
      {
        productId: 12,
        url: "https://http2.mlstatic.com/D_NQ_NP_639628-MLU70487189403_072023-O.webp",
      },
      {
        productId: 12,
        url: "https://http2.mlstatic.com/D_NQ_NP_774994-MLU70487189411_072023-O.webp",
      },
      {
        productId: 13,
        url: "https://http2.mlstatic.com/D_NQ_NP_905206-MLU72515264853_102023-O.webp",
      },
      {
        productId: 13,
        url: "https://http2.mlstatic.com/D_NQ_NP_855835-MLU72515255167_102023-O.webp",
      },
      {
        productId: 13,
        url: "https://http2.mlstatic.com/D_NQ_NP_701685-MLU72515245397_102023-O.webp",
      },
      {
        productId: 13,
        url: "https://http2.mlstatic.com/D_NQ_NP_698250-MLU72446493274_102023-O.webp",
      },
      {
        productId: 14,
        url: "https://http2.mlstatic.com/D_NQ_NP_857869-MLA51852973082_102022-O.webp",
      },
      {
        productId: 14,
        url: "https://http2.mlstatic.com/D_NQ_NP_612831-MLA51852652988_102022-O.webp",
      },
      {
        productId: 14,
        url: "https://http2.mlstatic.com/D_NQ_NP_714407-MLA51852652992_102022-O.webp",
      },
      {
        productId: 14,
        url: "https://http2.mlstatic.com/D_NQ_NP_845894-MLA51852984028_102022-O.webp",
      },
      {
        productId: 15,
        url: "https://http2.mlstatic.com/D_NQ_NP_953576-MLU69955167589_062023-O.webp",
      },
      {
        productId: 15,
        url: "https://http2.mlstatic.com/D_NQ_NP_809096-MLU69955207261_062023-O.webp",
      },
      {
        productId: 15,
        url: "https://http2.mlstatic.com/D_NQ_NP_809096-MLU69955207261_062023-O.webp",
      },
      {
        productId: 15,
        url: "https://http2.mlstatic.com/D_NQ_NP_916793-MLU69955207263_062023-O.webp",
      },
      {
        productId: 16,
        url: "https://http2.mlstatic.com/D_NQ_NP_763019-MLU69641632987_052023-O.webp",
      },
      {
        productId: 16,
        url: "https://http2.mlstatic.com/D_NQ_NP_763019-MLU69641632987_052023-O.webp",
      },
      {
        productId: 16,
        url: "https://http2.mlstatic.com/D_NQ_NP_822183-MLU69641632993_052023-O.webp",
      },
      {
        productId: 16,
        url: "https://http2.mlstatic.com/D_NQ_NP_732748-MLU70045308610_062023-O.webp",
      },
      {
        productId: 17,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 17,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
      {
        productId: 17,
        url: "https://http2.mlstatic.com/D_NQ_NP_938402-MLU70140174861_062023-O.webp",
      },
      {
        productId: 17,
        url: "https://http2.mlstatic.com/D_NQ_NP_696487-MLU70119365102_062023-O.webp",
      },
      {
        productId: 18,
        url: "https://http2.mlstatic.com/D_NQ_NP_970058-MLB70975344015_082023-O.webp",
      },
      {
        productId: 18,
        url: "https://http2.mlstatic.com/D_NQ_NP_677619-MLB70975344011_082023-O.webp",
      },
      {
        productId: 18,
        url: "https://http2.mlstatic.com/D_NQ_NP_971703-MLB70975343989_082023-O.webp",
      },
      {
        productId: 18,
        url: "https://http2.mlstatic.com/D_NQ_NP_981062-MLB70975344005_082023-O.webp",
      },
      {
        productId: 19,
        url: "https://http2.mlstatic.com/D_NQ_NP_617254-MLU72447187406_102023-O.webp",
      },
      {
        productId: 19,
        url: "https://http2.mlstatic.com/D_NQ_NP_980276-MLU70443551614_072023-O.webp",
      },
      {
        productId: 19,
        url: "https://http2.mlstatic.com/D_NQ_NP_980276-MLU70443551614_072023-O.webp",
      },
      {
        productId: 19,
        url: "https://http2.mlstatic.com/D_NQ_NP_847977-MLU71412339806_092023-O.webp",
      },
      {
        productId: 20,
        url: "https://http2.mlstatic.com/D_NQ_NP_774994-MLU70487189411_072023-O.webp",
      },
      {
        productId: 20,
        url: "https://http2.mlstatic.com/D_NQ_NP_639628-MLU70487189403_072023-O.webp",
      },
      {
        productId: 20,
        url: "https://http2.mlstatic.com/D_NQ_NP_639628-MLU70487189403_072023-O.webp",
      },
      {
        productId: 20,
        url: "https://http2.mlstatic.com/D_NQ_NP_774994-MLU70487189411_072023-O.webp",
      },
      {
        productId: 21,
        url: "https://http2.mlstatic.com/D_NQ_NP_905206-MLU72515264853_102023-O.webp",
      },
      {
        productId: 21,
        url: "https://http2.mlstatic.com/D_NQ_NP_855835-MLU72515255167_102023-O.webp",
      },
      {
        productId: 21,
        url: "https://http2.mlstatic.com/D_NQ_NP_701685-MLU72515245397_102023-O.webp",
      },
      {
        productId: 21,
        url: "https://http2.mlstatic.com/D_NQ_NP_698250-MLU72446493274_102023-O.webp",
      },
      {
        productId: 22,
        url: "https://http2.mlstatic.com/D_NQ_NP_857869-MLA51852973082_102022-O.webp",
      },
      {
        productId: 22,
        url: "https://http2.mlstatic.com/D_NQ_NP_612831-MLA51852652988_102022-O.webp",
      },
      {
        productId: 22,
        url: "https://http2.mlstatic.com/D_NQ_NP_714407-MLA51852652992_102022-O.webp",
      },
      {
        productId: 22,
        url: "https://http2.mlstatic.com/D_NQ_NP_845894-MLA51852984028_102022-O.webp",
      },
      {
        productId: 23,
        url: "https://http2.mlstatic.com/D_NQ_NP_953576-MLU69955167589_062023-O.webp",
      },
      {
        productId: 23,
        url: "https://http2.mlstatic.com/D_NQ_NP_809096-MLU69955207261_062023-O.webp",
      },
      {
        productId: 23,
        url: "https://http2.mlstatic.com/D_NQ_NP_809096-MLU69955207261_062023-O.webp",
      },
      {
        productId: 23,
        url: "https://http2.mlstatic.com/D_NQ_NP_916793-MLU69955207263_062023-O.webp",
      },
      {
        productId: 24,
        url: "https://http2.mlstatic.com/D_NQ_NP_763019-MLU69641632987_052023-O.webp",
      },
      {
        productId: 24,
        url: "https://http2.mlstatic.com/D_NQ_NP_763019-MLU69641632987_052023-O.webp",
      },
      {
        productId: 24,
        url: "https://http2.mlstatic.com/D_NQ_NP_822183-MLU69641632993_052023-O.webp",
      },
      {
        productId: 24,
        url: "https://http2.mlstatic.com/D_NQ_NP_732748-MLU70045308610_062023-O.webp",
      },
    ];

    await ProductsImage.createMany(productsImage);
  }
}
