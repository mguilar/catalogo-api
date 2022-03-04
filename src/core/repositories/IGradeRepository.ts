import { IGrade } from '../../domain/entities/IGrade';

export interface IGradeRepository {
  listar(): Promise<IGrade[]>;
  obter(id: number): Promise<IGrade>;
  inserir(entity: IGrade): Promise<number>;
  alterar(id: number, entity: IGrade): Promise<number>;
  excluir(id: number): Promise<number>;
}
