import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoDotnet",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, h) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(o.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#512BD4"
        }),
        t("path", {
          fill: "#FFF",
          d: "M45.627 163.555q-2.715 0-4.615-1.809-1.9-1.856-1.901-4.408 0-2.598 1.9-4.454 1.901-1.856 4.616-1.856 2.76 0 4.661 1.856 1.946 1.856 1.946 4.454 0 2.551-1.946 4.408-1.9 1.81-4.66 1.81m72.361-1.02h-11.765L75.225 113.63a22 22 0 0 1-1.946-3.85h-.272l.047.305.043.35.04.393.038.436.049.736.042.832.035.93.028 1.028.02 1.125.01.805.01 2.2v43.614H62.961V96h12.535l29.957 47.743.74 1.169.477.768.408.675.34.583.19.338.16.296.13.255h.18l-.034-.21-.064-.45-.06-.493-.053-.537-.024-.285-.046-.602-.04-.645-.035-.69-.042-1.114-.03-1.212-.018-1.31-.006-1.407V96h10.362zm50.685 0h-36.428V96h34.98v9.373h-24.21v18.837h22.31v9.326h-22.31v19.673h25.658zm51.772-57.162H201.8v57.162h-10.77v-57.162h-18.6V96h48.014z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
