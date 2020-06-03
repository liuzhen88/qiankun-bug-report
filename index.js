import { registerMicroApps, start, loadMicroApp } from 'qiankun';

registerMicroApps([
  {
    name: 'odcp-vue',
    entry: '/vue',
    container: '#vue',
    activeRule: '/'
  }
]);
start({
  singular: false, 
  prefetch: false,
  sandbox: true
});