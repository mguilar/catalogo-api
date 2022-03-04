import { GradeDto } from '../../domain/dtos/GradeDto';
import { IGrade } from '../../domain/entities/IGrade';

export interface IGradeService {
  listar(): Promise<IGrade[]>;
  obter(id: number): Promise<IGrade>;
  inserir(entity: GradeDto): Promise<number>;
  alterar(id: number, entity: GradeDto): Promise<number>;
  excluir(id: number): Promise<number>;
}
