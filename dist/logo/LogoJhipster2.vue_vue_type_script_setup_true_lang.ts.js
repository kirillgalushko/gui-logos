import { defineComponent as n, computed as m, openBlock as p, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoJhipster2",
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
    return (l, i) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "104",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 104",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#3474AB",
          d: "M149.545 43.027S22.535-30.675 11.558 15.164c-10.979 45.84-23.326 80.678 10.507 87.12 33.833 6.441 127.48-59.257 127.48-59.257"
        }),
        t("path", {
          fill: "#4289C7",
          d: "M127.588 31.942c36.38-18.832 108.456-51.103 116.695-16.928 11.085 45.99 23.54 80.978-10.25 87.548-23.712 4.6-77.04-26.493-106.616-45.368-.043-22.342.214-3.232.171-25.252"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
