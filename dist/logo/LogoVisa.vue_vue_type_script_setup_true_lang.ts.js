import { defineComponent as l, computed as r, openBlock as m, createElementBlock as n, normalizeStyle as h, createElementVNode as e } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoVisa",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, o) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -86.5 256 256",
      style: h(s.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "visa-gui-asset-a",
          x1: "45.974%",
          x2: "54.877%",
          y1: "-2.006%",
          y2: "100%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#222357"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#254AA5"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#visa-gui-asset-a)",
          d: "M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763 8.056-3.92 10.762-6.434 10.73-9.94-.06-5.365-6.426-7.733-12.383-7.825-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243 21.725 0 35.938 10.724 36.015 27.351.085 21.102-29.188 22.27-28.988 31.702.069 2.86 2.798 5.912 8.778 6.688 2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601 6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803 3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z",
          transform: "matrix(1 0 0 -1 0 82.668)"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
