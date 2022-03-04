import { injectable } from 'inversify';
import { ITamanho } from '../../domain/entities/ITamanho';
import { ITamanhoRepository } from '../../core/repositories/ITamanhoRepository';
import { connDB, Knex } from '../database/database';
import logger from '../../common/helpers/Logger';

@injectable()
export class TamanhoRepository implements ITamanhoRepository {
  private tableName = 'tamanho';

  public listar(): Promise<ITamanho[]> {
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

  public obter(id: number): Promise<ITamanho> {
    return connDB
      .select()
      .from(this.tableName)
      .where({
        'cd_tamanho': id
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

  public inserir(entity: ITamanho): Promise<number> {
    return connDB(this.tableName)
      .insert({
        descricao: entity.descricao,
        cd_tamanho: entity.cd_tamanho
      })
      .then((success: number[]) => success[0]);
  }

  public alterar(id: number, entity: ITamanho): Promise<number> {
    return connDB(this.tableName)
      .update({
        descricao: entity.descricao,
        cd_tamanho: entity.cd_tamanho
      })
      .where({
        'cd_tamanho': id
      })
      .then((success: number) => success);
  }

  public excluir(id: number): Promise<number> {
    return connDB(this.tableName)
      .del()
      .where({
        'cd_tamanho': id
      })
      .then((success: number) => success);
  }
}
