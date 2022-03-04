import { ITamanho } from '../../domain/entities/ITamanho';

export interface ITamanhoRepository {
  listar(): Promise<ITamanho[]>;
  obter(id: number): Promise<ITamanho>;
  inserir(entity: ITamanho): Promise<number>;
  alterar(id: number, entity: ITamanho): Promise<number>;
  excluir(id: number): Promise<number>;
}