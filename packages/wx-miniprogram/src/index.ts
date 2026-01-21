import { InitOptions } from 'aoneng-fe-monitor-types';
import { isWxMiniEnv } from 'aoneng-fe-monitor-utils';
import { setupReplace } from './load';
import { initOptions, log } from 'aoneng-fe-monitor-core';
import { sendTrackData, track } from './initiative';
import { SDK_NAME, SDK_VERSION } from 'aoneng-fe-monitor-shared';
import { MonitorVue } from 'aoneng-fe-monitor-vue';
import { errorBoundaryReport } from 'aoneng-fe-monitor-react';

export function init(options: InitOptions = {}) {
  if (!isWxMiniEnv) return;
  initOptions(options);
  setupReplace();
  Object.assign(wx, { monitorLog: log, SDK_NAME, SDK_VERSION });
}
export { log, sendTrackData, track, MonitorVue, errorBoundaryReport };
