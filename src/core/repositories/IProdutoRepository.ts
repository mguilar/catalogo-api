import { IProduto } from '../../domain/entities/IProduto';

export interface IProdutoRepository {
  listar(): Promise<IProduto[]>;
  obter(id: number): Promise<IProduto>;
  inserir(entity: IProduto): Promise<number>;
  alterar(id: number, entity: IProduto): Promise<number>;
  excluir(id: number): Promise<number>;
}