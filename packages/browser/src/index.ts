export * from './handleEvents';
export * from './load';
export * from './replace';
import { setupReplace } from './load';
import { initOptions, log } from 'aoneng-fe-monitor-core';
import { _global } from 'aoneng-fe-monitor-utils';
import { SDK_VERSION, SDK_NAME } from 'aoneng-fe-monitor-shared';
import { InitOptions } from 'aoneng-fe-monitor-types';
function webInit(options: InitOptions = {}): void {
  if (!('XMLHttpRequest' in _global) || options.disabled) return;
  initOptions(options);
  setupReplace();
}

function init(options: InitOptions = {}): void {
  webInit(options);
}

export { SDK_VERSION, SDK_NAME, init, log };
