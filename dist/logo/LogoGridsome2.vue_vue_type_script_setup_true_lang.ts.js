import { defineComponent as i, computed as r, openBlock as p, createElementBlock as a, normalizeStyle as l, createStaticVNode as d } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoGridsome2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, o) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(s.value)
    }, o[0] || (o[0] = [
      d('<defs><linearGradient id="gridsome-2-gui-asset-a" x1="20.938%" x2="67.331%" y1="135.775%" y2="141.765%"><stop offset="0%" stop-color="#1A7D75"></stop><stop offset="100%" stop-color="#1A8864"></stop></linearGradient><linearGradient id="gridsome-2-gui-asset-b" x1="5.879%" x2="-17.306%" y1="11.117%" y2="72.271%"><stop offset="1.293%" stop-color="#168A81"></stop><stop offset="100%" stop-color="#31A97F"></stop></linearGradient><linearGradient id="gridsome-2-gui-asset-c" x1="-144.301%" x2="-70.357%" y1="53.433%" y2="117.634%"><stop offset="0%" stop-color="#27A59B"></stop><stop offset="100%" stop-color="#64D8A2"></stop></linearGradient><linearGradient id="gridsome-2-gui-asset-d" x1="-143.419%" x2="-4.693%" y1="60.471%" y2="180.917%"><stop offset="0%" stop-color="#27A59B"></stop><stop offset="100%" stop-color="#64D8A2"></stop></linearGradient><linearGradient id="gridsome-2-gui-asset-e" x1="208.845%" x2="86.111%" y1="-141.921%" y2="-183.711%"><stop offset="0%" stop-color="#27A59B"></stop><stop offset="100%" stop-color="#64D8A2"></stop></linearGradient></defs><g><path fill="url(#gridsome-2-gui-asset-a)" d="M231.385 105.754c12.308-.592 23.204 8.957 24.267 21.277 4.604 59.597-48.957 126.248-125.818 128.382-12.319.343-22.58-9.393-22.922-21.745-.34-12.353 9.367-22.643 21.686-22.986 50.99-1.416 83.294-45.459 81.57-81.508-.59-12.342 8.908-22.828 21.217-23.42"></path><path fill="url(#gridsome-2-gui-asset-b)" d="M22.551 104.485c12.323 0 22.312 10.018 22.312 22.375 0 51.575 41.47 84.953 82.89 83.931 12.32-.304 22.551 9.464 22.854 21.816.304 12.354-9.437 22.615-21.756 22.92C64.08 257.123.017 205.266.017 126.86c0-12.357 10.211-22.375 22.534-22.375"></path><path fill="url(#gridsome-2-gui-asset-c)" fill-rule="nonzero" d="M175.646 128.594c0-12.65 10.32-22.906 23.049-22.906h33.589c12.73 0 23.368 10.256 23.368 22.906 0 12.652-10.638 22.907-23.368 22.907h-33.59c-12.728 0-23.048-10.255-23.048-22.907"></path><path fill="url(#gridsome-2-gui-asset-d)" fill-rule="nonzero" d="M105.168 128.628c0-12.67 10.253-22.94 22.887-22.94s22.889 10.27 22.889 22.94c0 12.669-10.254 22.94-22.889 22.94s-22.887-10.271-22.887-22.94"></path><path fill="url(#gridsome-2-gui-asset-e)" d="M150.31 21.446c.511 12.346-9.056 22.77-21.368 23.283-53.149 2.214-85.596 43.987-84.017 83.652.492 12.346-8.891 22.756-21.204 23.249S.58 142.158.089 129.81C-2.485 65.174 51.335 1.275 127.09.02c12.312-.513 22.708 9.08 23.218 21.426"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
