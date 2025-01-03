import { defineComponent as o, computed as n, openBlock as p, createElementBlock as s, normalizeStyle as r, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ o({
  __name: "LogoJasmine",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, m) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: r(h.value)
    }, m[0] || (m[0] = [
      t("g", { fill: "#8A4182" }, [
        t("path", { d: "M118.267 105.334h19.795l4.918-6.733V45.874h-29.627v52.733zm-12.758 23.517 6.115-18.717-4.919-6.73L56.271 87.11l-9.154 28.016 50.44 16.296zm18.551 19.336-16.012-11.57-7.96 2.572-31.168 42.66 23.968 17.313 31.172-42.66zm24.225-11.573-16.016 11.57.004 8.32 31.169 42.658 23.969-17.314-31.175-42.663zm-3.583-26.484 6.118 18.72 7.958 2.569 50.435-16.293-9.157-28.018-50.436 16.297z" }),
        t("path", { d: "M128.17.106C57.71.106.384 57.1.384 127.152c0 70.078 57.326 127.087 127.788 127.087 70.454 0 127.774-57.009 127.774-127.087 0-70.053-57.32-127.046-127.774-127.046m0 25.725c56.27 0 101.9 45.357 101.9 101.32 0 55.983-45.63 101.36-101.9 101.36-56.287 0-101.912-45.377-101.912-101.36 0-55.963 45.625-101.32 101.913-101.32" }),
        t("path", { d: "m205.565 155.391-38.338-12.387 2.535-7.765 38.338 12.387zM156.67 94.19l-6.645-4.798 23.693-32.429 6.644 4.799zm-56.598-.295-23.69-32.43 6.644-4.798 23.69 32.428zm-49.464 61.012-2.536-7.765 38.334-12.382 2.537 7.765zm73.199 53.252h8.211v-40.085h-8.21z" })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
