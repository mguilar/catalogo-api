import { PrecoDto } from '../../domain/dtos/PrecoDto';
import { IPreco } from '../../domain/entities/IPreco';

export interface IPrecoService {
  listar(): Promise<IPreco[]>;
  obter(cd_produto: number, cd_grade: number): Promise<IPreco>;
  inserir(entity: PrecoDto): Promise<number>;
  alterar(cd_produto: number, cd_grade: number, entity: PrecoDto): Promise<number>;
}
