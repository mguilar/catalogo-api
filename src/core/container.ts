import { Container } from 'inversify';

import TYPES from './types';
import { HttpClient } from '../common/protocols/http/httpClient';
import { AxiosHttpClient } from '../infra/http/axios';

import { CategoriaService } from '../adapter/services/CategoriaService';
import { CategoriaRepository } from '../infra/repositories/CategoriaRepository';
import { CorService } from '../adapter/services/CorService';
import { CorRepository } from '../infra/repositories/CorRepository';
import { GradeService } from '../adapter/services/GradeService';
import { GradeRepository } from '../infra/repositories/GradeRepository';
import { PrecoService } from '../adapter/services/PrecoService';
import { PrecoRepository } from '../infra/repositories/PrecoRepository';
import { ProdutoService } from '../adapter/services/ProdutoService';
import { ProdutoRepository } from '../infra/repositories/ProdutoRepository';
import { TamanhoService } from '../adapter/services/TamanhoService';
import { TamanhoRepository } from '../infra/repositories/TamanhoRepository';

import { ICategoriaService } from './services/ICategoriaService';
import { ICategoriaRepository } from './repositories/ICategoriaRepository';
import { ICorService } from './services/ICorService';
import { ICorRepository } from './repositories/ICorRepository';
import { IGradeService } from './services/IGradeService';
import { IGradeRepository } from './repositories/IGradeRepository';
import { IPrecoService } from './services/IPrecoService';
import { IPrecoRepository } from './repositories/IPrecoRepository';
import { IProdutoService } from './services/IProdutoService';
import { IProdutoRepository } from './repositories/IProdutoRepository';
import { ITamanhoService } from './services/ITamanhoService';
import { ITamanhoRepository } from './repositories/ITamanhoRepository';


export const initContainer = () => {
  const container = new Container();

  container.bind<HttpClient>(TYPES.HttpClient).to(AxiosHttpClient).inSingletonScope();

  container.bind<ICategoriaService>(TYPES.ICategoriaService).to(CategoriaService).inRequestScope();
  container.bind<ICategoriaRepository>(TYPES.ICategoriaRepository).to(CategoriaRepository).inRequestScope();

  container.bind<ICorService>(TYPES.ICorService).to(CorService).inRequestScope();
  container.bind<ICorRepository>(TYPES.ICorRepository).to(CorRepository).inRequestScope();

  container.bind<IGradeService>(TYPES.IGradeService).to(GradeService).inRequestScope();
  container.bind<IGradeRepository>(TYPES.IGradeRepository).to(GradeRepository).inRequestScope();

  container.bind<IPrecoService>(TYPES.IPrecoService).to(PrecoService).inRequestScope();
  container.bind<IPrecoRepository>(TYPES.IPrecoRepository).to(PrecoRepository).inRequestScope();

  container.bind<IProdutoService>(TYPES.IProdutoService).to(ProdutoService).inRequestScope();
  container.bind<IProdutoRepository>(TYPES.IProdutoRepository).to(ProdutoRepository).inRequestScope();

  container.bind<ITamanhoService>(TYPES.ITamanhoService).to(TamanhoService).inRequestScope();
  container.bind<ITamanhoRepository>(TYPES.ITamanhoRepository).to(TamanhoRepository).inRequestScope();

  return container;
};
