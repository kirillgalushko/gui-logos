import { defineComponent as h, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoUnito2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#3AAFA9",
          d: "m204.556 123.368-.244 29.258a5.63 5.63 0 0 1-5.364 5.607 5.63 5.63 0 0 1-5.364-5.607l.244-29.258c0-16.696-13.535-30.232-30.232-30.232-15.116 0-28.526 13.166-29.745 29.501v1.22l-.487 11.214v.732a40.962 40.962 0 0 1-81.92-.732.22.22 0 0 0 .244-.243h-.244v-28.039a5.22 5.22 0 0 1 5.315-5.12 5.22 5.22 0 0 1 5.364 5.072l-.244 28.038c0 16.697 13.535 30.232 30.232 30.232s30.232-13.535 30.232-30.232v-.975l.488-10.24v-1.22c1.512-22.137 19.31-39.692 40.521-39.692 22.683.081 41.014 18.52 40.96 41.204.244-.731.244-.731.244-.488M128.487 0C57.796-.268.271 56.821.001 127.513-.267 198.204 56.82 255.729 127.513 256c70.691.268 128.217-56.82 128.487-127.512v-.487C256.134 57.462 199.075.163 128.536 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
