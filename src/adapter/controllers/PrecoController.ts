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
import { IPrecoService } from '../../core/services/IPrecoService';
import { PrecoDto } from '../../domain/dtos/PrecoDto';

@controller(`${config.apiPrefix}/Preco`)
export class PrecoController extends BaseHttpController implements interfaces.Controller {
  constructor(
    @inject(TYPES.IPrecoService) private readonly precoService: IPrecoService
  ) {
    super();
  }

  @httpGet('/'/*, authMiddleware()*/)
  public async handleListar(): Promise<interfaces.IHttpActionResult> {
    try {
      return this.precoService
        .listar()
        .then(res => this.json(res));
    } catch (error) {
      logger.error('handleListar', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpGet('/:cd_produto/:cd_preco'/*, authMiddleware()*/)
  public async handleObter(
    @requestParam('cd_produto') cd_produto: number,
    @requestParam('cd_preco') cd_preco: number
    ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.precoService
        .obter(cd_produto, cd_preco)
        .then(res => this.json(res));
    } catch (error) {
      logger.error('handleObter', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpPost('/'/*, validator('inserir'), validatorResult, authMiddleware()*/)
  public async handleInserir(
    @requestBody() entity: PrecoDto
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.precoService
        .inserir(entity)
        .then(res => this.json({ success: res }));
    } catch (error) {   
      logger.error('handleInserir', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

  @httpPut('/:cd_produto/:cd_grade'/*, validator('alterar'), validatorResult, authMiddleware()*/)
  public async handleAlterar(
    @requestParam('cd_produto') cd_produto: number,
    @requestParam('cd_grade') cd_grade: number,
    @requestBody() entity: PrecoDto
  ): Promise<interfaces.IHttpActionResult> {
    try {
      return this.precoService
        .alterar(cd_produto, cd_grade, entity)
        .then(res => this.json({ success: res }));
    } catch (error) {
      logger.error('handleAlterar', { message: error.message, stack: error.stack });

      return this.json({ error: error }, 500);
    }
  }

}
