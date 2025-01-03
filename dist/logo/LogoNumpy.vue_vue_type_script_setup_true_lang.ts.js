import { defineComponent as l, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoNumpy",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "274",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 274",
      style: s(m.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4DABCF",
          d: "m191.548 186.292.06 60.52-53.705 26.8v-60.494zM256 153.947v60.731l-45.805 22.86-.033-60.454zm-64.533-48.66.06 59.885-53.625 26.647v-59.905zM256 73.205v59.509l-45.851 23.309-.04-60.005zm-126.262-7.04 47.933 24.195-49.731 24.975-47.028-23.62zM63.065 32.511l45.718 23.077-48.938 25.543-46.954-23.58zm130.69.35 49.243 24.69-44.04 22.12-48.032-24.228zM128.233 0l44.33 22.225-42.506 22.694-45.68-23.039z"
        }),
        t("path", {
          fill: "#4D77CF",
          d: "M118.944 131.914 82.77 113.728v78.606S38.533 98.207 34.434 89.752c-.528-1.091-2.703-2.288-3.259-2.578C23.243 83.009 0 71.235 0 71.235V210.11l32.154 17.188v-72.59s43.768 84.105 44.211 85.024c.443.92 4.84 9.784 9.533 12.897 6.253 4.139 33.053 20.255 33.053 20.255z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
