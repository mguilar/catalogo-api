import { CategoriaDto } from '../../domain/dtos/CategoriaDto';
import { ICategoria } from '../../domain/entities/ICategoria';

export interface ICategoriaService {
  listar(): Promise<ICategoria[]>;
  obter(id: number): Promise<ICategoria>;
  inserir(entity: CategoriaDto): Promise<number>;
  alterar(id: number, entity: CategoriaDto): Promise<number>;
  excluir(id: number): Promise<number>;
}
