import { defineComponent as p, computed as i, openBlock as r, createElementBlock as a, normalizeStyle as l, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoAngular3",
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
    return (h, o) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "271",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 271",
      style: l(s.value)
    }, o[0] || (o[0] = [
      n('<defs><linearGradient id="angular-3-gui-asset-a" x1="25.071%" x2="96.132%" y1="90.929%" y2="55.184%"><stop offset="0%" stop-color="#E40035"></stop><stop offset="24%" stop-color="#F60A48"></stop><stop offset="35.2%" stop-color="#F20755"></stop><stop offset="49.4%" stop-color="#DC087D"></stop><stop offset="74.5%" stop-color="#9717E7"></stop><stop offset="100%" stop-color="#6C00F5"></stop></linearGradient><linearGradient id="angular-3-gui-asset-b" x1="21.863%" x2="68.367%" y1="12.058%" y2="68.21%"><stop offset="0%" stop-color="#FF31D9"></stop><stop offset="100%" stop-color="#FF5BE1" stop-opacity="0"></stop></linearGradient></defs><g><path fill="url(#angular-3-gui-asset-a)" d="m256 45.179-9.244 145.158L158.373 0zm-61.217 187.697-66.782 38.105-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337 0 45.179 97.627 0z"></path><path fill="url(#angular-3-gui-asset-b)" d="m256 45.179-9.244 145.158L158.373 0zm-61.217 187.697-66.782 38.105-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337 0 45.179 97.627 0z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
