import { defineComponent as e, computed as c, openBlock as i, createElementBlock as a, normalizeStyle as l, createStaticVNode as r } from "vue";
const n = /* @__PURE__ */ e({
  __name: "LogoNamecheap",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = c(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (i(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "142",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 142",
      style: l(p.value)
    }, t[0] || (t[0] = [
      r('<defs><linearGradient id="namecheap-gui-asset-a" x1="13.322%" x2="82.62%" y1="94.945%" y2="1.132%"><stop offset="0%" stop-color="#D4202C"></stop><stop offset="4.166%" stop-color="#D82D2B" stop-opacity=".958"></stop><stop offset="17.6%" stop-color="#E25226" stop-opacity=".824"></stop><stop offset="31.67%" stop-color="#EB7123" stop-opacity=".683"></stop><stop offset="46.35%" stop-color="#F28920" stop-opacity=".536"></stop><stop offset="61.88%" stop-color="#F69A1E" stop-opacity=".381"></stop><stop offset="78.86%" stop-color="#F9A41D" stop-opacity=".211"></stop><stop offset="100%" stop-color="#FAA71D" stop-opacity="0"></stop></linearGradient><linearGradient id="namecheap-gui-asset-b" x1="86.624%" x2="17.326%" y1="5.04%" y2="98.855%"><stop offset="0%" stop-color="#D4202C"></stop><stop offset="4.166%" stop-color="#D82D2B" stop-opacity=".958"></stop><stop offset="17.6%" stop-color="#E25226" stop-opacity=".824"></stop><stop offset="31.67%" stop-color="#EB7123" stop-opacity=".683"></stop><stop offset="46.35%" stop-color="#F28920" stop-opacity=".536"></stop><stop offset="61.88%" stop-color="#F69A1E" stop-opacity=".381"></stop><stop offset="78.86%" stop-color="#F9A41D" stop-opacity=".211"></stop><stop offset="100%" stop-color="#FAA71D" stop-opacity="0"></stop></linearGradient></defs><g><path fill="#FF5000" d="M232 0c-9 0-16.8 5-20.9 12.3l-.5 1-18.8 37L168 97.2l15.6 30.7.9 1.7c2.4 4.2 6 7.7 10.4 9.8 4.4-2.2 8-5.6 10.4-9.8l.9-1.7 46.7-92 1.1-2.2c1.3-3 2-6.2 2-9.7 0-13.3-10.7-24-24-24M87.9 44.6 72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8-4.4 2.2-8 5.6-10.4 9.8l-.8 1.7-46.7 92-1.1 2.2c-1.3 3-2 6.2-2 9.7 0 13.2 10.7 24 24 24 9 0 16.8-5 20.9-12.3l.5-1 18.8-37L88 44.7z"></path><path fill="url(#namecheap-gui-asset-a)" d="M232 0c-9 0-16.9 5-20.9 12.3l-.5 1-18.8 37L168 97.2l15.6 30.7.9 1.7c2.4 4.2 6 7.7 10.4 9.8 4.4-2.2 8-5.6 10.4-9.8l.9-1.7 46.7-92 1.1-2.2c1.3-3 2-6.2 2-9.7 0-13.3-10.8-24-24-24"></path><path fill="url(#namecheap-gui-asset-b)" d="M24 141.9c9 0 16.9-5 20.9-12.3l.5-1 18.8-37L88 44.7 72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8-4.4 2.2-8 5.6-10.4 9.8l-.8 1.7-46.7 92-1.2 2.3c-1.3 3-2 6.2-2 9.7 0 13.2 10.7 23.9 24 23.9"></path><path fill="#FF8C44" d="M87.9 44.6 72.4 14l-.9-1.7c-2.4-4.2-6-7.7-10.4-9.8 1.4-.7 3-1.3 4.5-1.7 1.9-.5 4-.8 6-.8h32.8c9 .1 16.8 5 20.9 12.3l.7 1.7 42.1 83.3 15.5 30.6.9 1.7c2.4 4.2 6 7.7 10.4 9.8-1.4.7-3 1.3-4.5 1.7-1.9.5-4 .8-6.1.8h-32.6c-9-.1-16.8-5-20.9-12.3l-.9-1.7z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
