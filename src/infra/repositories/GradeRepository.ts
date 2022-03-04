import { injectable } from 'inversify';
import { IGrade } from '../../domain/entities/IGrade';
import { IGradeRepository } from '../../core/repositories/IGradeRepository';
import { connDB, Knex } from '../database/database';
import logger from '../../common/helpers/Logger';

@injectable()
export class GradeRepository implements IGradeRepository {
  private tableName = 'grade';

  public listar(): Promise<IGrade[]> {
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

  public obter(id: number): Promise<IGrade> {
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

  public inserir(entity: IGrade): Promise<number> {
    return connDB(this.tableName)
      .insert({
        descricao: entity.descricao,
        cd_produto: entity.cd_produto,
        idc_status: entity.idc_status,
        cd_tamanho: entity.cd_tamanho,
        imagem: entity.imagem,
        cd_cor: entity.cd_cor
      })
      .then((success: number[]) => success[0]);
  }

    public alterar(id: number, entity: IGrade): Promise<number> {
    return connDB(this.tableName)
      .update({
        descricao: entity.descricao,
        cd_grade: entity.cd_grade

      })
      .where({
        'cd_grade': id
      })
      .then((success: number) => success);
  }

  public excluir(id: number): Promise<number> {
    return connDB(this.tableName)
      .del()
      .where({
        'cd_grade': id
      })
      .then((success: number) => success);
  }
}
