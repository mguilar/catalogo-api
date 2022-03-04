import { inject, injectable } from 'inversify';

import TYPES from '../../core/types';
import logger from '../../common/helpers/Logger';
import { ICategoriaService } from '../../core/services/ICategoriaService';
import { ICategoriaRepository } from '../../core/repositories/ICategoriaRepository';
import { ICategoria } from '../../domain/entities/ICategoria';
import { CategoriaDto } from '../../domain/dtos/CategoriaDto';

@injectable()
export class CategoriaService implements ICategoriaService {
  constructor(
    @inject(TYPES.ICategoriaRepository) private readonly categoriaRepository: ICategoriaRepository,
  ) {}

  public listar(): Promise<ICategoria[]> {
    return this.categoriaRepository.listar();
  }

  public obter(id: number): Promise<ICategoria> {
    return this.categoriaRepository.obter(id);
  }

  public inserir(entity: CategoriaDto): Promise<number> {
    return this.categoriaRepository
      .inserir(entity)
      .then(res => res);
  }

  public alterar(id: number, entity: CategoriaDto): Promise<number> {
    return this.categoriaRepository
      .alterar(id, entity)
      .then(res => res);
  }

  public excluir(id: number): Promise<number> {
    return this.categoriaRepository
      .excluir(id)
      .then(res => res);
  }
}
