import { ICategoria } from '../../domain/entities/ICategoria';

export interface ICategoriaRepository {
  listar(): Promise<ICategoria[]>;
  obter(id: number): Promise<ICategoria>;
  inserir(entity: ICategoria): Promise<number>;
  alterar(id: number, entity: ICategoria): Promise<number>;
  excluir(id: number): Promise<number>;
}
