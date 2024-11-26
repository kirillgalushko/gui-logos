import { defineComponent as p, computed as i, openBlock as r, createElementBlock as a, normalizeStyle as l, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoOpera2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(s.value)
    }, o[0] || (o[0] = [
      n('<defs><linearGradient id="opera-2-gui-asset-a" x1="50.003%" x2="50.003%" y1="1.63%" y2="98.545%"><stop offset="30%" stop-color="#FF1B2D"></stop><stop offset="43.81%" stop-color="#FA1A2C"></stop><stop offset="59.39%" stop-color="#ED1528"></stop><stop offset="75.81%" stop-color="#D60E21"></stop><stop offset="92.72%" stop-color="#B70519"></stop><stop offset="100%" stop-color="#A70014"></stop></linearGradient><linearGradient id="opera-2-gui-asset-b" x1="49.99%" x2="49.99%" y1=".853%" y2="99.519%"><stop offset="0%" stop-color="#9C0000"></stop><stop offset="70%" stop-color="#FF4B4B"></stop></linearGradient></defs><g><path fill="url(#opera-2-gui-asset-a)" d="M85.9 200.1C71.7 183.4 62.6 158.7 62 131v-6c.6-27.7 9.8-52.4 23.9-69.1 18.4-23.8 45.4-34.5 75.9-34.5 18.8 0 36.5 1.3 51.5 11.3C190.8 12.4 161.1.1 128.5 0h-.5C57.3 0 0 57.3 0 128c0 68.6 54 124.7 121.9 127.9 2 .1 4.1.1 6.1.1 32.8 0 62.7-12.3 85.3-32.6-15 10-31.7 10.4-50.5 10.4-30.4.1-58.6-9.8-76.9-33.7"></path><path fill="url(#opera-2-gui-asset-b)" d="M85.9 55.9c11.7-13.9 26.9-22.2 43.5-22.2 37.3 0 67.5 42.2 67.5 94.4s-30.2 94.4-67.5 94.4c-16.6 0-31.7-8.4-43.5-22.2 18.4 23.8 45.7 39 76.1 39 18.7 0 36.3-5.7 51.3-15.7C239.5 200 256 165.9 256 128s-16.5-72-42.7-95.4c-15-10-32.5-15.7-51.3-15.7-30.5 0-57.8 15.1-76.1 39"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
