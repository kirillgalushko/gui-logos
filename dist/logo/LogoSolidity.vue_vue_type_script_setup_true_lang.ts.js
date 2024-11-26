import { defineComponent as p, computed as n, openBlock as l, createElementBlock as s, normalizeStyle as y, createStaticVNode as g } from "vue";
const m = /* @__PURE__ */ p({
  __name: "LogoSolidity",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, i = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, e) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "398",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 398",
      style: y(i.value)
    }, e[0] || (e[0] = [
      g('<g fill="#000"><polyline points="191.513435 -1.38880392e-14 127.645979 113.512499 -2.77760784e-14 113.512499 63.8234781 -4.73316543e-30 191.513435 -4.73316543e-30" opacity=".45"></polyline><polygon points="127.645979 113.512499 255.336913 113.512499 191.513435 -1.38880392e-14 63.8234781 -1.38880392e-14" opacity=".6"></polygon><polygon points="63.8234781 226.981021 127.645979 113.512499 63.8234781 -1.38880392e-14 0 113.512499" opacity=".8"></polygon><polyline points="64.4416102 397.24977 128.309066 283.736782 256 283.736782 192.132055 397.24977 64.4416102 397.24977" opacity=".45"></polyline><polygon points="128.308577 283.737271 0.618132052 283.737271 64.4411215 397.250259 192.131567 397.250259" opacity=".6"></polygon><polygon points="192.132055 170.268749 128.308577 283.737271 192.132055 397.250259 255.999511 283.737271" opacity=".8"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};
