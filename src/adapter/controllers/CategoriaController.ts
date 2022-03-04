import { inject } from 'inversify';
import {
  httpGet,
  httpPost,
  BaseHttpController,
  interfaces,
  controller,
  requestBody,
  queryParam,
  requestParam,
  httpPut,
  httpDelete
} from 'inversify-express-utils';

import TYPES from '../../core/types';
import { config } from '../../config';
import logger from '../../common/helpers/Logger';
import { authMiddleware } from '../../common/middlewares/AuthMiddleware';
import { validatorResult } from '../../common/middlewares/ValidatorResult';
import { validator } from '../validators/MessageConfigValidator';
import { ICategoriaService } from '../../core/services/ICategoriaService';
import { CategoriaDto } from '../../domain/dtos/CategoriaDto';

@controller(`${config.apiPrefix}/categoria`)
export class CategoriaController extends BaseHttpController implements interfaces.Controller {
  constructor(
    @inject(TYPES.ICategoriaService) private readonly categoriaService: ICategoriaService
  ) {
    super();
  }

  @httpGet('/'/*, authMiddleware()*/)
  public async handleListar(): Promise<interfaces.IHttpActionResult> {
    try {
      return this.categoriaService
        .listar()
        .then(res => this.json(res));
    } catch (error) {
      logger.error('handleListar', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpGet('/:id'/*, authMiddleware()*/)
  public async handleObter(
    @requestParam('id') id: number
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.categoriaService
        .obter(id)
        .then(res => this.json(res));
    } catch (error) {
      logger.error('handleObter', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpPost('/'/*, validator('inserir'), validatorResult, authMiddleware()*/)
  public async handleInserir(
    @requestBody() entity: CategoriaDto
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.categoriaService
        .inserir(entity)
        .then(res => this.json({ success: res }));
    } catch (error) {
      logger.error('handleInserir', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpPut('/:id'/*, validator('alterar'), validatorResult, authMiddleware()*/)
  public async handleAlterar(
    @requestParam('id') id: number,
    @requestBody() entity: CategoriaDto
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.categoriaService
        .alterar(id, entity)
        .then(res => this.json({ success: res }));
    } catch (error) {
      logger.error('handleAlterar', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }
  
  @httpDelete('/:id'/*, validator('excluir'), validatorResult, authMiddleware()*/)
  public async handleExcluir(
    @requestParam('id') id: number
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.categoriaService
        .excluir(id)
        .then(res => this.json({ success: res }));
    } catch (error) {
      logger.error('handleExcluir', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }
}
