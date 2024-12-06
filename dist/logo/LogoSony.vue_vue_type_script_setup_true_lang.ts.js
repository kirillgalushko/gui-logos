import { defineComponent as l, computed as o, openBlock as i, createElementBlock as m, normalizeStyle as n, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoSony",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const h = c, v = o(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (d, t) => (i(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      viewBox: "0 0 192.744 192.744",
      style: n(v.value)
    }, t[0] || (t[0] = [
      e("g", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd"
      }, [
        e("path", {
          fill: "#fff",
          d: "M0 0h192.744v192.744H0z"
        }),
        e("path", { d: "M187.035 106.442a2.852 2.852 0 1 0 0 5.703 2.847 2.847 0 0 0 2.844-2.858 2.844 2.844 0 0 0-2.844-2.845m0 5.36a2.505 2.505 0 0 1-2.508-2.515 2.5 2.5 0 0 1 2.508-2.501 2.5 2.5 0 0 1 2.5 2.501 2.503 2.503 0 0 1-2.5 2.515" }),
        e("path", { d: "M188.498 108.54c0-.269-.119-.552-.357-.687-.24-.142-.508-.156-.777-.156h-1.389v3.187h.389v-1.47h.717l.91 1.47h.463l-.963-1.47c.568-.016 1.007-.247 1.007-.874m-1.537.567h-.598v-1.127h.91c.396 0 .83.06.83.553.001.649-.695.574-1.142.574M170.32 93.132l5.83-6.225c.338-.457.506-.777.506-1.051 0-.457-.393-.64-1.629-.64h-1.471v-3.93h15.922v3.93h-2.092c-2.416 0-2.865.365-6.236 4.615l-9.223 9.96v6.078c0 1.555.785 2.102 3.033 2.102h3.482v3.792h-22.301v-3.792h3.482c2.246 0 3.033-.547 3.033-2.102v-6.078l-10.863-12.017c-1.795-2.101-1.547-2.558-6.545-2.558v-3.93h20.168v3.93h-1.436c-1.461 0-2.08.274-2.08.822 0 .458.449.823.73 1.188l5.496 5.99c.653.679 1.45.767 2.194-.084M35.003 81.285h4.865v10.966h-4.493c-.398-2.192-1.77-3.045-3.021-4.195-2.257-2.074-7.145-3.801-11.256-3.801-5.306 0-9.784 1.646-9.784 4.066 0 6.718 30.345 1.372 30.345 14.074 0 6.625-6.5 10.326-18.173 10.326-4.041 0-10.156-1.254-13.764-3.17-1.131-.653-1.611.618-1.823 2.211H2.911V100.43h4.512c.995 2.879 2.366 3.472 3.627 4.615 2.188 2.011 7.396 3.474 12.172 3.427 7.201-.071 9.677-1.645 9.677-3.93 0-2.284-2.449-2.833-10.34-4.066l-6.7-1.097c-7.561-1.143-13.066-2.833-13.066-8.864 0-6.26 6.964-10.19 17.975-10.19 4.64 0 8.522.62 12.248 2.726 1.032.671 2 .751 1.987-1.766m94.944 18.36.096-12.188c0-1.599-.832-2.147-3.209-2.147h-2.793v-3.792h17.77v3.792h-2.316c-2.379 0-3.211.549-3.211 2.147v24.537l-6.955-.055-22.524-21.329v15.49c0 1.554.832 2.147 3.209 2.147h3.092v3.747H94.651v-3.747h3.058c2.377 0 3.209-.594 3.209-2.147V87.457c0-1.599-.832-2.147-3.209-2.147h-3.058v-3.792h15.956zm-59.523-19.55c-14.162 0-23.027 6.261-23.027 16.312 0 9.871 8.742 16.084 22.595 16.084 14.714 0 23.273-6.122 23.273-16.586.001-9.412-9.235-15.81-22.841-15.81m-.322 28.422c-7.839 0-12.345-4.524-12.345-12.338 0-7.63 4.702-12.154 12.737-12.154 7.708 0 12.214 4.616 12.214 12.475 0 7.676-4.572 12.017-12.606 12.017" })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};