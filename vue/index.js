import Vue from "vue";
import App from "./app.vue";
import ElementUI from 'element-ui';

Vue.use(ElementUI);

let instance = null;

if (!window.__POWERED_BY_QIANKUN__) {
  new Vue({ render: h => h(App) }).$mount("#odcp-vue");
}

export async function bootstrap() {
  console.log("bootstrap");
}

export async function mount(props) {
  console.log("mount");
  instance = new Vue({ render: h => h(App) }).$mount("#odcp-vue");
}

export async function unmount() {
  console.log("unmount");
  instance.$destroy();
  instance = null;
}

export async function update(props) {
  console.log("update");
}