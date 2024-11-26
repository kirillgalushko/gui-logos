import { defineComponent as o, computed as c, openBlock as l, createElementBlock as n, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoAnthropic",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const h = i, m = c(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (r, e) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "58",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 58",
      style: s(m.value)
    }, e[0] || (e[0] = [
      t("g", { fill: "#181818" }, [
        t("path", { d: "M499.297 37.878c-2.064 5.4-6.192 8.497-11.829 8.497-9.368 0-15.084-6.67-15.084-17.55 0-11.037 5.716-17.708 15.084-17.708 5.637 0 9.765 3.097 11.83 8.497h12.623C508.824 7.703 499.536 0 487.468 0c-16.037 0-27.39 11.911-27.39 28.825 0 16.755 11.353 28.667 27.39 28.667 12.147 0 21.436-7.782 24.532-19.614zM423.39.97l22.163 55.588h12.153L435.544.97zm-25.634 24.697h-14.695V11.69h14.695c5.878 0 8.976 2.382 8.976 6.988s-3.098 6.988-8.976 6.988M398.312.97h-27.167v55.588h11.916v-20.17h15.251c12.63 0 20.336-6.671 20.336-17.71 0-11.037-7.705-17.708-20.336-17.708m-65.535 45.405c-9.367 0-15.083-6.67-15.083-17.55 0-11.037 5.716-17.708 15.083-17.708 9.288 0 14.924 6.67 14.924 17.708 0 10.88-5.636 17.55-14.924 17.55m0-46.375c-16.036 0-27.388 11.911-27.388 28.825 0 16.755 11.352 28.667 27.388 28.667 15.956 0 27.23-11.912 27.23-28.667C360.006 11.911 348.732 0 332.776 0m-72.068 11.69h14.691c5.877 0 8.974 2.145 8.974 6.195s-3.097 6.194-8.974 6.194h-14.691zm35.577 6.195c0-10.483-7.703-16.915-20.33-16.915h-27.16v55.588h11.913V34.799h13.261l11.913 21.759h13.183l-13.19-23.416c6.62-2.545 10.41-7.905 10.41-15.257m-74.095 5.241h-26.2V.97h-11.909v55.588h11.91V33.846h26.2v22.712h11.908V.97H222.19zM125.296 11.69h18.659v44.868h11.91V11.69h18.658V.97h-49.227zm-21.034 28.191L79.253.971H65.756v55.587h11.512V17.646l25.01 38.912h13.496V.97h-11.512zM20.93 34.56l7.582-19.534 7.583 19.535zM22.158.97 0 56.558h12.39l4.532-11.674h23.182l4.53 11.674h12.39L34.867.97z" })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
