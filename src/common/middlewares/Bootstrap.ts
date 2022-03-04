import { Application } from 'express';

import Http from './Http';

class Bootstrap {
  public static init (_express: Application): Application {
    _express = Http.mount(_express);

    return _express;
  }
}

export default Bootstrap;
