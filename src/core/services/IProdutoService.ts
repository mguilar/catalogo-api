import { ProdutoDto } from '../../domain/dtos/ProdutoDto';
import { IProduto } from '../../domain/entities/IProduto';

export interface IProdutoService {
  listar(): Promise<IProduto[]>;
  obter(id: number): Promise<IProduto>;
  inserir(entity: ProdutoDto): Promise<number>;
  alterar(id: number, entity: ProdutoDto): Promise<number>;
  excluir(id: number): Promise<number>;
}
