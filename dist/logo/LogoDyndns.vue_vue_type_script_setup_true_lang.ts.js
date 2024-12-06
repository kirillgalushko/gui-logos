import { defineComponent as o, computed as m, openBlock as n, createElementBlock as s, normalizeStyle as c, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoDyndns",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, h) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "150",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 150",
      style: c(l.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#C74634",
          d: "M153.393 0c38.351 0 69.441 31.09 69.441 69.441v10.365c0 38.351-31.09 69.441-69.441 69.441H69.44C31.09 149.247 0 118.157 0 79.806V69.44C0 31.09 31.09 0 69.441 0zm0 25.91H69.44c-23.8 0-43.14 19.102-43.524 42.811l-.006.72v10.365c0 23.8 19.101 43.14 42.81 43.524l.72.006h83.952c23.8 0 43.14-19.101 43.524-42.81l.006-.72V69.44c0-23.8-19.101-43.14-42.81-43.524z"
        }),
        t("path", {
          fill: "#000",
          d: "M366.001 73.085q0 18.163-9.844 27.988-9.846 9.825-27.678 9.826h-23.11v-72.55h24.722q17.198 0 26.554 8.932t9.356 25.804m-16.648 1.609q0-11.828-4.984-17.537t-15.141-5.708h-7.21v48.196h5.517q11.284 0 16.552-6.15 5.266-6.15 5.266-18.801m21.091-36.346L396.33 83.1v27.8h15.867V83.1l25.685-44.752h-17.27l-16.449 30.044-15.475-30.044zm80.472 72.55v-72.55h14.533l30.302 46.475V38.348H512v72.55h-14.293l-30.846-45.405v45.406z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};