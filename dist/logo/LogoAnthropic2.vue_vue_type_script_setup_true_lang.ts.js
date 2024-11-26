import { defineComponent as n, computed as m, openBlock as r, createElementBlock as p, normalizeStyle as s, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoAnthropic2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "176",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 176",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#181818" }, [
        i("path", { d: "m147.487 0 70.081 175.78H256L185.919 0zM66.183 106.221l23.98-61.774 23.98 61.774zM70.07 0 0 175.78h39.18l14.33-36.914h73.308l14.328 36.914h39.179L110.255 0z" })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
