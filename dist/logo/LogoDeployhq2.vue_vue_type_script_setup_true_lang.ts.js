import { defineComponent as n, computed as l, openBlock as p, createElementBlock as r, normalizeStyle as m, createStaticVNode as s } from "vue";
const h = /* @__PURE__ */ n({
  __name: "LogoDeployhq2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, e = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (g, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "320",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 320",
      style: m(e.value)
    }, t[0] || (t[0] = [
      s('<g><polygon fill="#4B25BB" points="9.25456123e-15 255.641772 9.25456123e-15 191.73697 63.999576 255.641772" transform="matrix(-1 0 0 1 64 0)"></polygon><polygon fill="#4B25BB" points="127.999435 255.64149 191.999011 255.64149 191.999011 63.9242627 127.999435 63.9242627" transform="matrix(-1 0 0 1 319.998 0)"></polygon><polygon fill="#000" points="64.0004236 319.52937 128 319.52937 191.999576 319.52937 128 255.621747" transform="matrix(-1 0 0 1 256 0)"></polygon><path fill="#000" d="M64 95.858c0 17.648 14.326 31.953 32 31.953 17.673 0 32-14.305 32-31.953 0-17.647-14.327-31.952-32-31.952S64 78.21 64 95.858"></path><polygon fill="#40CF9F" points="256 255.641776 192.000424 255.641776 256 191.736973" transform="matrix(-1 0 0 1 448 0)"></polygon><polygon fill="#40CF9F" points="127.999999 0 64.0004236 63.9048022 127.999999 63.9048022 191.999576 63.9048022" transform="matrix(-1 0 0 1 256 0)"></polygon><polygon fill="#40CF9F" points="63.9998591 255.644315 127.999435 255.644315 127.999435 127.831889 63.9998591 127.831889" transform="matrix(-1 0 0 1 192 0)"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  h as _
};
