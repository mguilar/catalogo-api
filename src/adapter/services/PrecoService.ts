import { inject, injectable } from 'inversify';

import TYPES from '../../core/types';
import logger from '../../common/helpers/Logger';
import { IPrecoService } from '../../core/services/IPrecoService';
import { IPrecoRepository } from '../../core/repositories/IPrecoRepository';
import { IPreco } from '../../domain/entities/IPreco';
import { PrecoDto } from '../../domain/dtos/PrecoDto';

@injectable()
export class PrecoService implements IPrecoService {
  constructor(
    @inject(TYPES.IPrecoRepository) private readonly PrecoRepository: IPrecoRepository,
  ) {}

  public listar(): Promise<IPreco[]> {
    return this.PrecoRepository.listar();
  }

  public obter(cd_produto: number, cd_grade: number): Promise<IPreco> {
    return this.PrecoRepository.obter(cd_produto, cd_grade);

  }

  public inserir(entity: PrecoDto): Promise<number> {
    return this.PrecoRepository
      .inserir(entity)
      .then(res => res);
  }

  public alterar(cd_produto: number, cd_grade: number, entity: PrecoDto): Promise<number> {
    return this.PrecoRepository
      .alterar(cd_produto, cd_grade, entity)
      .then(res => res);
  }

}
