import { defineComponent as o, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ o({
  __name: "LogoZig",
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
    return (s, h) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "181",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 181",
      style: r(l.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#F7A41D",
          d: "M193.89 0 91.034 122.797h58.908l-24.56 28.438H67.215l-63.337 29.73 103.058-124.09h-59.11l24.56-28.438h58.167zM59.46 28.437 36.193 56.875h-7.756v65.922h11.634l-24.56 28.438H0V28.437zm138.308 0v122.798h-60.752l24.56-28.438h7.755v-64.63h-11.633l24.559-29.73z"
        }),
        t("path", {
          fill: "#121212",
          d: "M461.718 27.92c18.484 0 37.744 7.11 50.282 18.097l-16.804 19.389c-9.177-8.144-21.716-12.926-33.478-12.926-21.975 0-39.037 16.674-39.037 38.131 0 21.716 17.192 38.262 39.166 38.262 7.25 0 16.251-2.879 24.173-6.912l-.001-17.26-38.778-18.097h62.045v50.412c-13.185 9.436-31.023 15.511-48.732 15.511-37.485 0-66.052-26.886-66.052-62.433 0-35.288 29.084-62.174 67.216-62.174m-125.641.517v19.39l-68.508 80.14h69.8v23.268H227.5v-18.097l68.507-81.434h-67.215V28.437zm43.948 0v122.798h-28.437V28.437z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
