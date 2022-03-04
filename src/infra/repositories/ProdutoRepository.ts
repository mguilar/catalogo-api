import { id, injectable } from 'inversify';
import { IProduto } from '../../domain/entities/IProduto';
import { IProdutoRepository } from '../../core/repositories/IProdutoRepository';
import { connDB, Knex } from '../database/database';
import logger from '../../common/helpers/Logger';

@injectable()
export class ProdutoRepository implements IProdutoRepository {
  private tableName = 'produto';

  public listar(): Promise<IProduto[]> {
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

  public obter(id: number): Promise<IProduto> {
    return connDB
      .select()
      .from(this.tableName)
      .where({
        'cd_produto': id
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

  public inserir(entity: IProduto): Promise<number> {
    return connDB(this.tableName)
      .insert({
        descricao: entity.descricao,
        cd_produto: entity.cd_produto,
        idc_status: entity.idc_status,
        cd_categoria: entity.cd_categoria,
        imagem: entity.imagem
        
      })
      .then((success: number[]) => success[0]);
  }

  public alterar(id: number, entity: IProduto): Promise<number> {
    return connDB(this.tableName)
      .update({
        descricao: entity.descricao,
        cd_produto: entity.cd_produto,
        idc_status: entity.idc_status,
        cd_categoria: entity.cd_categoria,
        imagem: entity.imagem
      })
      .where({
        'cd_produto': id
      })
      .then((success: number) => success);
  }

  public excluir(id: number): Promise<number> {
    return connDB(this.tableName)
      .del()
      .where({
        'cd_produto': id
      })
      .then((success: number) => success);
  }
}
