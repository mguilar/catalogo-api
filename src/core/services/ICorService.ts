import { CorDto } from '../../domain/dtos/CorDto';
import { ICor } from '../../domain/entities/ICor';

export interface ICorService {
  listar(): Promise<ICor[]>;
  obter(id: number): Promise<ICor>;
  inserir(entity: CorDto): Promise<number>;
  alterar(id: number, entity: CorDto): Promise<number>;
  excluir(id: number): Promise<number>;
}
