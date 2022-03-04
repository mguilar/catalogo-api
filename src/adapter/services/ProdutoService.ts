import { inject, injectable } from 'inversify';

import TYPES from '../../core/types';
import logger from '../../common/helpers/Logger';
import { IProdutoService } from '../../core/services/IProdutoService';
import { IProdutoRepository } from '../../core/repositories/IProdutoRepository';
import { IProduto } from '../../domain/entities/IProduto';
import { ProdutoDto } from '../../domain/dtos/ProdutoDto';

@injectable()
export class ProdutoService implements IProdutoService {
  constructor(
    @inject(TYPES.IProdutoRepository) private readonly ProdutoRepository: IProdutoRepository,
  ) {}

  public listar(): Promise<IProduto[]> {
    return this.ProdutoRepository.listar();
  }

  public obter(id: number): Promise<IProduto> {
    return this.ProdutoRepository.obter(id);
  }

  public inserir(entity: ProdutoDto): Promise<number> {
    return this.ProdutoRepository
      .inserir(entity)
      .then(res => res);
  }

  public alterar(id: number, entity: ProdutoDto): Promise<number> {
    return this.ProdutoRepository
      .alterar(id, entity)
      .then(res => res);
  }

  public excluir(id: number): Promise<number> {
    return this.ProdutoRepository
      .excluir(id)
      .then(res => res);
  }
}
