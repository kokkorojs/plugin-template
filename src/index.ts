import { Plugin } from '@kokkoro/core';
import { Service } from './service';

const pkg = require('../package.json');
const plugin = new Plugin();
const service = new Service(plugin);

plugin
  .version(pkg.version)

plugin
  .command('hello')
  .action((ctx, bot) => {
    const message = service.getMessage();
    ctx.reply(message);
  })
