import { TamanhoDto } from '../../domain/dtos/TamanhoDto';
import { ITamanho } from '../../domain/entities/ITamanho';

export interface ITamanhoService {
  listar(): Promise<ITamanho[]>;
  obter(id: number): Promise<ITamanho>;
  inserir(entity: TamanhoDto): Promise<number>;
  alterar(id: number, entity: TamanhoDto): Promise<number>;
  excluir(id: number): Promise<number>;
}
