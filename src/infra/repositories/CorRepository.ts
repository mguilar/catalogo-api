import { injectable } from 'inversify';
import { ICor } from '../../domain/entities/ICor';
import { ICorRepository } from '../../core/repositories/ICorRepository';
import { connDB, Knex } from '../database/database';
import logger from '../../common/helpers/Logger';

@injectable()
export class CorRepository implements ICorRepository {
  private tableName = 'cor';

  public listar(): Promise<ICor[]> {
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

  public obter(id: number): Promise<ICor> {
    return connDB
      .select()
      .from(this.tableName)
      .where({
        'cd_cor': id
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

  public inserir(entity: ICor): Promise<number> {
    return connDB(this.tableName)
      .insert({
        descricao: entity.descricao
      })
      .then((success: number[]) => success[0]);
  }

  public alterar(id: number, entity: ICor): Promise<number> {
    return connDB(this.tableName)
      .update({
        descricao: entity.descricao
      })
      .where({
        'cd_cor': id
      })
      .then((success: number) => success);
  }

  public excluir(id: number): Promise<number> {
    return connDB(this.tableName)
      .del()
      .where({
        'cd_cor': id
      })
      .then((success: number) => success);
  }
}
