import { defineComponent as o, computed as m, openBlock as l, createElementBlock as n, normalizeStyle as p, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoApplePay",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "211",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 211",
      style: p(i.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M93.552 27.103c-6 7.1-15.602 12.702-25.203 11.901-1.2-9.6 3.5-19.802 9.001-26.103C83.35 5.601 93.852.4 102.353 0c1 10.001-2.9 19.802-8.8 27.103m8.701 13.802c-13.902-.8-25.803 7.9-32.404 7.9-6.7 0-16.802-7.5-27.803-7.3-14.301.2-27.603 8.3-34.904 21.202-15.002 25.803-3.9 64.008 10.601 85.01 7.101 10.401 15.602 21.802 26.803 21.402 10.602-.4 14.802-6.9 27.604-6.9 12.901 0 16.602 6.9 27.803 6.7 11.601-.2 18.902-10.4 26.003-20.802 8.1-11.801 11.401-23.303 11.601-23.903-.2-.2-22.402-8.7-22.602-34.304-.2-21.402 17.502-31.603 18.302-32.203-10.002-14.802-25.603-16.402-31.004-16.802m80.31-29.004V167.82h24.202v-53.306h33.504c30.603 0 52.106-21.002 52.106-51.406 0-30.403-21.103-51.206-51.306-51.206zm24.202 20.403h27.903c21.003 0 33.004 11.201 33.004 30.903s-12.001 31.004-33.104 31.004h-27.803zM336.58 169.019c15.202 0 29.303-7.7 35.704-19.902h.5v18.702h22.403V90.21c0-22.502-18.002-37.004-45.706-37.004-25.703 0-44.705 14.702-45.405 34.904h21.803c1.8-9.601 10.7-15.902 22.902-15.902 14.802 0 23.103 6.901 23.103 19.603v8.6l-30.204 1.8c-28.103 1.7-43.304 13.202-43.304 33.205 0 20.202 15.701 33.603 38.204 33.603m6.5-18.502c-12.9 0-21.102-6.2-21.102-15.702 0-9.8 7.901-15.501 23.003-16.401l26.903-1.7v8.8c0 14.602-12.401 25.003-28.803 25.003m82.01 59.707c23.603 0 34.704-9 44.405-36.304L512 54.706h-24.603l-28.503 92.11h-.5l-28.503-92.11h-25.303l41.004 113.513-2.2 6.901c-3.7 11.701-9.701 16.202-20.402 16.202-1.9 0-5.6-.2-7.101-.4v18.702c1.4.4 7.4.6 9.201.6"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};