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
import { IGradeService } from '../../core/services/IGradeService';
import { GradeDto } from '../../domain/dtos/GradeDto';

@controller(`${config.apiPrefix}/Grade`)
export class GradeController extends BaseHttpController implements interfaces.Controller {
  constructor(
    @inject(TYPES.IGradeService) private readonly GradeService: IGradeService
  ) {
    super();
  }

  @httpGet('/'/*, authMiddleware()*/)
  public async handleListar(): Promise<interfaces.IHttpActionResult> {
    try {
      return this.GradeService
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
      return this.GradeService
        .obter(id)
        .then(res => this.json(res));
    } catch (error) {
      logger.error('handleObter', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpPost('/'/*, validator('inserir'), validatorResult, authMiddleware()*/)
  public async handleInserir(
    @requestBody() entity: GradeDto
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.GradeService
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
    @requestBody() entity: GradeDto
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.GradeService
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
      return this.GradeService
        .excluir(id)
        .then(res => this.json({ success: res }));
    } catch (error) {
      logger.error('handleExcluir', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }
}
