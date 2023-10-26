import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class ProductsImage extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({ columnName: "product_id" })
  public productId: number;

  @column({ columnName: "url" })
  public url: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
