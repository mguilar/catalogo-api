import { inject, injectable } from 'inversify';

import TYPES from '../../core/types';
import logger from '../../common/helpers/Logger';
import { IGradeService } from '../../core/services/IGradeService';
import { IGradeRepository } from '../../core/repositories/IGradeRepository';
import { IGrade } from '../../domain/entities/IGrade';
import { GradeDto } from '../../domain/dtos/GradeDto';

@injectable()
export class GradeService implements IGradeService {
  constructor(
    @inject(TYPES.IGradeRepository) private readonly GradeRepository: IGradeRepository,
  ) {}

  public listar(): Promise<IGrade[]> {
    return this.GradeRepository.listar();
  }

  public obter(id: number): Promise<IGrade> {
    return this.GradeRepository.obter(id);
  }

  public inserir(entity: GradeDto): Promise<number> {
    return this.GradeRepository
      .inserir(entity)
      .then(res => res);
  }

  public alterar(id: number, entity: GradeDto): Promise<number> {
    return this.GradeRepository
      .alterar(id, entity)
      .then(res => res);
  }

  public excluir(id: number): Promise<number> {
    return this.GradeRepository
      .excluir(id)
      .then(res => res);
  }
}
