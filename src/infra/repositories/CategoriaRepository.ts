import { injectable } from 'inversify';
import { ICategoria } from '../../domain/entities/ICategoria';
import { ICategoriaRepository } from '../../core/repositories/ICategoriaRepository';
import { connDB, Knex } from '../database/database';
import logger from '../../common/helpers/Logger';

@injectable()
export class CategoriaRepository implements ICategoriaRepository {
  private tableName = 'categoria';

  public listar(): Promise<ICategoria[]> {
    return connDB
      .from(this.tableName)
      .select()
      .then((rows: any) => rows)
      .catch((err: any) => {
        logger.error(err.message, err);

        return Promise.reject({
          ...err,
          message: `Erro ao consultar ${this.tableName}`
        });
      });
  }

  public obter(id: number): Promise<ICategoria> {
    return connDB
      .select()
      .from(this.tableName)
      .where({
        'cd_categoria': id
      })
      .then((rows: any) => rows ? rows[0] : null)
      .catch((err: any) => {
        logger.error(err.message, err);

        return Promise.reject({
          ...err,
          message: `Erro ao consultar ${this.tableName}`
        });
      });
  }

  public inserir(entity: ICategoria): Promise<number> {
    return connDB(this.tableName)
      .insert({
        descricao: entity.descricao,
        cd_categoria_pai: entity.cd_categoria_pai
      })
      .then((success: number[]) => success[0]);
  }

  public alterar(id: number, entity: ICategoria): Promise<number> {
    return connDB(this.tableName)
      .update({
        descricao: entity.descricao,
        cd_categoria_pai: entity.cd_categoria_pai
      })
      .where({
        'cd_categoria': id
      })
      .then((success: number) => success);
  }

  public excluir(id: number): Promise<number> {
    return connDB(this.tableName)
      .del()
      .where({
        'cd_categoria': id
      })
      .then((success: number) => success);
  }
}
