import { defineComponent as i, computed as l, openBlock as m, createElementBlock as n, normalizeStyle as h, createStaticVNode as p } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoOpenjsFoundation2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, e) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: h(s.value)
    }, e[0] || (e[0] = [
      p('<defs><linearGradient id="openjs-foundation-2-gui-asset-a" x1="20.394%" x2="79.571%" y1="15.849%" y2="84.151%"><stop offset="21.45%" stop-color="#0075C9"></stop><stop offset="70.67%" stop-color="#80BC00"></stop><stop offset="100%" stop-color="#FDE021"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><path fill="url(#openjs-foundation-2-gui-asset-a)" d="M255.06 73.398 128.752.47l-.846-.47-.846.47L1.504 73.022l-.658.376-.846.47v147.736l.846.47L127.154 295l.846.47.846-.47 124.617-71.894 1.691-.94.846-.47V73.868zM115.313 18.89l-30.92 53.474H22.65zM79.319 81.198l-14.473 25.093-43.419-25.093zM68.04 118.226l51.031 29.51-51.03 29.51-17.011-29.51zm-7.518-4.323L46.05 138.996 17.01 88.81zM10.056 94.261l30.919 53.475-30.92 53.474zm35.9 62.309 14.473 25.092-43.419 25.093zm18.89 32.61 14.473 25.093H21.427zm-42.197 33.927h61.745l30.919 53.474zm100.934 50.185-28.946-50.185h28.946zm0-59.019H89.468l-17.01-29.51 51.031-29.509v59.02zm0-74.15-51.03-29.51 17.01-29.509h34.02zm0-67.759H94.637l28.946-50.185zm71.8 41.54 43.419-25.093-28.946 50.185zm9.398 33.832-17.01 29.51-51.03-29.51 51.03-29.51zm-13.815-41.445-14.473-25.093h57.892zm42.197-33.927h-61.744L140.593 18.89zM132.323 22.18l28.946 50.185h-28.946zm0 59.02h34.02l17.01 29.509-51.03 29.51zm0 74.149 51.03 29.51-17.01 29.415h-34.02zm0 67.76h28.946l-28.946 50.184zm8.27 53.473 30.826-53.474h61.744zm35.9-62.308 14.473-25.092 43.419 25.092zm18.89-32.705 14.473-25.092 28.946 50.185zm50.467 19.642-30.919-53.474 30.92-53.475z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
