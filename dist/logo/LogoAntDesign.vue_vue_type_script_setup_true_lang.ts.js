import { defineComponent as i, computed as l, openBlock as n, createElementBlock as p, normalizeStyle as r, createStaticVNode as a } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoAntDesign",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, o[0] || (o[0] = [
      a('<defs><linearGradient id="ant-design-gui-asset-a" x1="62.102%" x2="108.197%" y1="0%" y2="37.864%"><stop offset="0%" stop-color="#4285EB"></stop><stop offset="100%" stop-color="#2EC7FF"></stop></linearGradient><linearGradient id="ant-design-gui-asset-b" x1="69.644%" x2="54.043%" y1="0%" y2="108.457%"><stop offset="0%" stop-color="#29CDFF"></stop><stop offset="37.86%" stop-color="#148EFF"></stop><stop offset="100%" stop-color="#0A60FF"></stop></linearGradient><linearGradient id="ant-design-gui-asset-c" x1="69.691%" x2="16.723%" y1="-12.974%" y2="117.391%"><stop offset="0%" stop-color="#FA816E"></stop><stop offset="41.473%" stop-color="#F74A5C"></stop><stop offset="100%" stop-color="#F51D2C"></stop></linearGradient><linearGradient id="ant-design-gui-asset-d" x1="68.128%" x2="30.44%" y1="-35.691%" y2="114.943%"><stop offset="0%" stop-color="#FA8E7D"></stop><stop offset="51.264%" stop-color="#F74A5C"></stop><stop offset="100%" stop-color="#F51D2C"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill-rule="nonzero"><path fill="url(#ant-design-gui-asset-a)" d="M116.85 4.545 4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568s-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c1.503-1.501 3.784-1.501 5.287 0l35.702 35.673c5.408 5.404 14.176 5.404 19.584 0s5.408-14.164 0-19.568l-47.09-47.05c-6.063-5.904-15.82-5.856-21.835.154"></path><path fill="url(#ant-design-gui-asset-b)" d="M116.85 4.545 4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568s-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c3.742-3.226 9.849-9.76 18.815-11.29q9.996-1.703 21.857 7.5L138.686 4.39c-6.064-5.903-15.82-5.855-21.836.155"></path><path fill="url(#ant-design-gui-asset-c)" d="M196.647 173.754c5.408 5.404 14.176 5.404 19.584 0l34.739-34.71a15.396 15.396 0 0 0 0-21.812l-35.041-34.89c-5.421-5.397-14.192-5.389-19.603.018-5.408 5.404-5.408 14.164 0 19.568l23.667 23.648c1.503 1.502 1.503 3.781 0 5.283l-23.346 23.327c-5.408 5.404-5.408 14.165 0 19.568"></path><ellipse cx="128.327" cy="128.242" fill="url(#ant-design-gui-asset-d)" rx="30.327" ry="30.302"></ellipse></g></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
