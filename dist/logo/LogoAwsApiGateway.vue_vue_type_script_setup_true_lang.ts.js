import { defineComponent as a, computed as o, openBlock as s, createElementBlock as l, normalizeStyle as m, createStaticVNode as p } from "vue";
const n = /* @__PURE__ */ a({
  __name: "LogoAwsApiGateway",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, e) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(i.value)
    }, e[0] || (e[0] = [
      p('<defs><linearGradient id="aws-api-gateway-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-api-gateway-gui-asset-a)"></rect><path fill="#FFF" d="M109.008 178.024h9.392v-6.455h-9.392zm15.792 0h9.6v-6.455h-9.6zM86.4 46.814 44.8 67.463v128.356l41.6 14.068zm6.4 40.845v83.91h9.6v6.455h-9.6v36.349a3.24 3.24 0 0 1-1.331 2.62 3.18 3.18 0 0 1-2.887.44l-48-16.23a3.23 3.23 0 0 1-2.182-3.06V65.452c0-1.226.694-2.353 1.789-2.895l48-23.824a3.16 3.16 0 0 1 3.1.155 3.23 3.23 0 0 1 1.511 2.74v39.576h9.6v6.455zm48 90.365h9.6v-6.455h-9.6zm.208-90.365h9.392v-6.455h-9.392zm-16 0h9.392v-6.455h-9.392zm-16 0h9.392v-6.455h-9.392zM211.2 67.463l-41.6-20.649v163.073l41.6-14.068zm6.4 130.68a3.23 3.23 0 0 1-2.182 3.06l-48 16.23a3.17 3.17 0 0 1-2.887-.44 3.24 3.24 0 0 1-1.331-2.62v-36.35h-6.192v-6.454h6.192v-83.91h-6.192v-6.455h6.192V41.628c0-1.117.573-2.153 1.51-2.74a3.16 3.16 0 0 1 3.101-.155l48 23.824a3.23 3.23 0 0 1 1.789 2.895zm-80.211-89.962-5.978-2.317-16 41.955 5.978 2.317zm21.673 20.487a3.243 3.243 0 0 0 0-4.563l-12.8-12.91-4.524 4.564 10.537 10.628-10.537 10.627 4.524 4.564zm-49.324 12.91-12.8-12.91a3.243 3.243 0 0 1 0-4.563l12.8-12.91 4.524 4.564-10.537 10.628 10.537 10.627z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
