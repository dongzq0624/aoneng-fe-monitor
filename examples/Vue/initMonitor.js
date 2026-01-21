Vue.use(aonengFeMonitor.MonitorVue);
aonengFeMonitor.init({
  debug: true,
  silentConsole: true,
  maxBreadcrumbs: 10,
  dsn: 'http://localhost:2021/errors/upload',
});
