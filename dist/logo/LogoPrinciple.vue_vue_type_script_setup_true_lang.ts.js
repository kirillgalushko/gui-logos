import { defineComponent as i, computed as r, openBlock as n, createElementBlock as p, normalizeStyle as l, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoPrinciple",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, e) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "-6 0 48 48",
      style: l(s.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="principle-gui-asset-a" x1="14.802%" x2="61.899%" y1="15.459%" y2="93.56%"><stop offset="0%" stop-color="#C36AD5"></stop><stop offset="12.687%" stop-color="#AE5CCC"></stop><stop offset="56.594%" stop-color="#7234B1"></stop><stop offset="100%" stop-color="#54219F"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="url(#principle-gui-asset-a)" transform="translate(-507 -952)"><path d="M507.004 992.122 507 969.888c0-9.88 8.059-17.888 18-17.888s18 8.009 18 17.888-7.89 17.888-17.832 17.888c-3.159 0-5.72-2.545-5.72-5.684s2.561-5.684 5.72-5.684c3.624 0 6.393-2.92 6.393-6.52 0-3.601-2.938-6.52-6.561-6.52s-6.56 2.919-6.56 6.519l.003 24.429c.001 5.508-6.043 7.013-9.345 4.514a3.67 3.67 0 0 0 1.603-3.03c0-2.03-1.655-3.676-3.697-3.678m18.164-6.353c2.044 0 3.701-1.646 3.701-3.677s-1.657-3.678-3.7-3.678c-2.045 0-3.702 1.646-3.702 3.678 0 2.03 1.657 3.677 3.701 3.677"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
