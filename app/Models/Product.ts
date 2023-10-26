import { DateTime } from "luxon";
import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import ProductsImage from "./ProductsImage";

export default class Product extends BaseModel {
  @hasMany(() => ProductsImage)
  public imagens: HasMany<typeof ProductsImage>;

  @column({ isPrimary: true })
  public id: number;

  @column({ columnName: "nome" })
  public nome: string;

  @column({ columnName: "descricao" })
  public descricao: string;

  @column({ columnName: "categoria" })
  public categoria: string;

  @column({ columnName: "preco_original" })
  public preco_original: number;

  @column({ columnName: "preco_promocional" })
  public preco_promocional: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
