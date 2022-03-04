import { IPreco } from '../../domain/entities/IPreco';

export interface IPrecoRepository {
  listar(): Promise<IPreco[]>;
  obter(cd_produto: number, cd_grade: number): Promise<IPreco>;
  inserir(entity: IPreco): Promise<number>;
  alterar(cd_produto: number, cd_grade: number, entity: IPreco): Promise<number>;
}