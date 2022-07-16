'use strict';

const { GrpcBaseController } = require('@142vip/egg-grpc-server');

/**
 * 用例控制器，插件对该类进行封装，只需要按照类定义方法来编写代码即可，上手简单
 * - 注意继承GrpcBaseController父类，以便使用egg.js框架中的对象、service层等
 */
class FairySisterController extends GrpcBaseController {

  /**
     *
     * @param request  请求参数对象
     */
  async sayHello(request) {
    const { ctx } = this;

    try {
      // 参数校验
      ctx.validate({
        name: { type: 'string', required: true },
        age: { type: 'int', required: true },
        description: { type: 'string', required: true },
      }, request);


    } catch (e) {
      return {
        code: 93,
        message: '参数错误',
        result: false,
      };
    }


  }

  /**
     * 健康检查，参数任意，具体校验可以参考上面用例方法
     * @param request
     */
  async healthCheck(request) {
    const { app } = this;
    app.logger.info('egg-grpc-client客户端请求的参数：', request);
    // 插件约定好，返回客户端数据，包裹成对象，通过return返回
    return {
      status: true,
      description: '公众号：Rong姐姐好可爱',
    };
  }
}

module.exports = FairySisterController;
