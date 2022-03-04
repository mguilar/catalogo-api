import { inject, injectable } from 'inversify';

import TYPES from '../../core/types';
import logger from '../../common/helpers/Logger';
import { ICorService } from '../../core/services/ICorService';
import { ICorRepository } from '../../core/repositories/ICorRepository';
import { ICor } from '../../domain/entities/ICor';
import { CorDto } from '../../domain/dtos/CorDto';

@injectable()
export class CorService implements ICorService {
  constructor(
    @inject(TYPES.ICorRepository) private readonly corRepository: ICorRepository,
  ) {}

  public listar(): Promise<ICor[]> {
    return this.corRepository.listar();
  }

  public obter(id: number): Promise<ICor> {
    return this.corRepository.obter(id);
  }

  public inserir(entity: CorDto): Promise<number> {
    return this.corRepository
      .inserir(entity)
      .then(res => res);
  }

  public alterar(id: number, entity: CorDto): Promise<number> {
    return this.corRepository
      .alterar(id, entity)
      .then(res => res);
  }

  public excluir(id: number): Promise<number> {
    return this.corRepository
      .excluir(id)
      .then(res => res);
  }
}
