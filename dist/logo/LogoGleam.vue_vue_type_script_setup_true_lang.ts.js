import { defineComponent as p, computed as l, openBlock as a, createElementBlock as o, normalizeStyle as m, createStaticVNode as d } from "vue";
const s = /* @__PURE__ */ p({
  __name: "LogoGleam",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(i.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#F36A22" d="M256 74.981v106.038l-3.417.333-123.367-51.822L128 128z"></path><path fill="#F3852F" d="M256 181.019 181.019 256l-1.145-.881-52.309-123.609L128 128z"></path><path fill="#F2C32E" d="m128 128-2.828 1.943-50.636 123.898.445 2.159h106.038z"></path><path fill="#CBDC38" d="m0 181.019 3.174-2.468 121.998-51.002L128 128 74.981 256z"></path><path fill="#B5D66D" d="m0 74.981 3.174-.215 123.071 50.473L128 128 0 181.019z"></path><path fill="#69C5E5" d="M74.981 0 0 74.981 128 128l.225-3.256L80.496 3.026z"></path><path fill="#6D9FD5" d="M74.981 0h106.038L128 128z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
