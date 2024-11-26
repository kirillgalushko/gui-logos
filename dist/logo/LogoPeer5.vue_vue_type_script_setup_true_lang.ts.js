import { defineComponent as i, computed as l, openBlock as p, createElementBlock as g, normalizeStyle as s, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoPeer5",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, n = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (r, e) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "291",
      version: "1.1",
      viewBox: "0 0 256 291",
      style: s(n.value)
    }, e[0] || (e[0] = [
      h('<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><polygon fill="#E44D26" points="0 0.0001 23.297 261.3101 127.843 290.3321 232.678 261.2681 256 0.0001"></polygon><polygon fill="#EF6429" points="127.9999 268.1172 212.7119 244.6322 232.6419 21.3662 127.9999 21.3662"></polygon><polygon fill="#EBEBEB" points="80.7977 84.4258 127.9997 84.4258 129.0007 83.0618 129.0007 54.5048 127.9997 52.4118 47.4807 52.4118 60.8197 232.3678 91.8627 241.5838 86.7707 163.2478 127.9997 163.2478 129.0007 161.8228 129.0007 133.3558 127.9997 131.2338 83.6777 131.2338"></polygon><polygon fill="#FEFEFE" points="127.9999 52.4122 203.1839 52.4122 195.1809 163.2472 127.9999 163.2472 127.9999 131.2342 164.6519 131.2342 168.0179 84.4262 127.9999 84.4262"></polygon></g></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
