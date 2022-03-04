import { inject, injectable } from 'inversify';

import TYPES from '../../core/types';
import logger from '../../common/helpers/Logger';
import { ITamanhoService } from '../../core/services/ITamanhoService';
import { ITamanhoRepository } from '../../core/repositories/ITamanhoRepository';
import { ITamanho } from '../../domain/entities/ITamanho';
import { TamanhoDto } from '../../domain/dtos/TamanhoDto';

@injectable()
export class TamanhoService implements ITamanhoService {
  constructor(
    @inject(TYPES.ITamanhoRepository) private readonly TamanhoRepository: ITamanhoRepository,
  ) {}

  public listar(): Promise<ITamanho[]> {
    return this.TamanhoRepository.listar();
  }

  public obter(id: number): Promise<ITamanho> {
    return this.TamanhoRepository.obter(id);
  }

  public inserir(entity: TamanhoDto): Promise<number> {
    return this.TamanhoRepository
      .inserir(entity)
      .then(res => res);
  }

  public alterar(id: number, entity: TamanhoDto): Promise<number> {
    return this.TamanhoRepository
      .alterar(id, entity)
      .then(res => res);
  }

  public excluir(id: number): Promise<number> {
    return this.TamanhoRepository
      .excluir(id)
      .then(res => res);
  }
}
