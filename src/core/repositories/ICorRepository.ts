import { ICor } from '../../domain/entities/ICor';

export interface ICorRepository {
  listar(): Promise<ICor[]>;
  obter(id: number): Promise<ICor>;
  inserir(entity: ICor): Promise<number>;
  alterar(id: number, entity: ICor): Promise<number>;
  excluir(id: number): Promise<number>;
}
