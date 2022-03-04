import { id, injectable } from 'inversify';
import { IPreco } from '../../domain/entities/IPreco';
import { IPrecoRepository } from '../../core/repositories/IPrecoRepository';
import { connDB, Knex } from '../database/database';
import logger from '../../common/helpers/Logger';

@injectable()
export class PrecoRepository implements IPrecoRepository {
  private tableName = 'preco';

  public listar(): Promise<IPreco[]> {
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

  public obter(cd_produto: number, cd_grade: number): Promise<IPreco> {
    return connDB
      .select()
      .from(this.tableName)
      .where({
        'cd_produto': cd_produto,
        'cd_grade': cd_grade  
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

  public inserir(entity: IPreco): Promise<number> {
    return connDB(this.tableName)
      .insert({
        cd_grade: entity.cd_grade,
        cd_produto: entity.cd_produto,
        valor: entity.valor,
        dt_inicio: entity.dt_inicio,
        dt_fim: entity.dt_fim

      })
      .then((success: number[]) => success[0]);
  }

  public alterar(cd_produto: number, cd_grade: number, entity: IPreco): Promise<number> {
    return connDB(this.tableName)
      .update({ 
        cd_grade: entity.cd_grade,
        cd_produto: entity.cd_produto,
        valor: entity.valor,
        dt_inicio: entity.dt_inicio,
        dt_fim: entity.dt_fim
      })
      .where({
        'cd_produto': cd_produto,
        'cd_grade': cd_grade      
      
      })
      .then((success: number) => success);
  }
 
}
