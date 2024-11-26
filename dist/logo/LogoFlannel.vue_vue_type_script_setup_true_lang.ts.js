import { defineComponent as i, computed as o, openBlock as l, createElementBlock as n, normalizeStyle as c, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ i({
  __name: "LogoFlannel",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, m = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, a) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "477",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 477",
      style: c(m.value)
    }, a[0] || (a[0] = [
      t("g", null, [
        t("path", {
          fill: "#54A3DA",
          d: "M71.39 220.444h42.504a3.97 3.97 0 0 0 3.968-3.967v-70.838c0-52.495 42.71-95.204 95.207-95.204h28.333a3.97 3.97 0 0 0 3.968-3.967v-42.5A3.97 3.97 0 0 0 241.402 0h-28.335C132.759 0 67.423 65.334 67.423 145.64v70.837a3.97 3.97 0 0 0 3.967 3.967M188.28 49.592a98.6 98.6 0 0 0-18.21 6.656 99.3 99.3 0 0 0-20.088 12.867 100 100 0 0 0-16.387 17.19 100 100 0 0 1 6.06-7.345 99.4 99.4 0 0 1 10.327-9.845 99.3 99.3 0 0 1 20.089-12.867 98.5 98.5 0 0 1 18.21-6.656m53.122-45.625V46.47zM252.04 155.84H128.061a3.97 3.97 0 0 0-3.968 3.968v42.502a3.97 3.97 0 0 0 3.968 3.968h115.998a3.966 3.966 0 0 0 3.898-3.235l7.93-42.29a4 4 0 0 0 .113-.943c0-2.193-1.77-3.97-3.96-3.97m-13.282 70.838h-39.859a3.97 3.97 0 0 0-3.967 3.967v42.503a3.97 3.97 0 0 0 3.967 3.967h31.878a3.966 3.966 0 0 0 3.898-3.235l7.93-42.29q.112-.454.113-.943c0-2.195-1.77-3.97-3.96-3.97m2.645-155.84h-28.335c-41.247 0-74.805 33.555-74.805 74.801a3.97 3.97 0 0 0 3.968 3.968h42.504a3.97 3.97 0 0 0 3.967-3.968c0-13.436 10.932-24.367 24.368-24.367h28.333a3.97 3.97 0 0 0 3.968-3.967v-42.5a3.97 3.97 0 0 0-3.968-3.968m0 46.467h-28.335c-8.802 0-16.667 4.013-21.865 10.311 5.196-6.296 13.061-10.311 21.865-10.311zV74.802zm-56.67 95.204h-42.505a3.97 3.97 0 0 0-3.967 3.968v155.84c0 25.429-9.902 49.339-27.887 67.32a3.97 3.97 0 0 0 0 5.612l30.054 30.053a3.96 3.96 0 0 0 2.806 1.161c1.016 0 2.03-.388 2.804-1.161 27.51-27.507 42.658-64.081 42.658-102.983V216.48a3.96 3.96 0 0 0-3.963-3.97m-66.873 74.802a3.97 3.97 0 0 0-3.968-3.968H71.39a3.97 3.97 0 0 0-3.967 3.968v85.003c0 6.509-2.535 12.628-7.138 17.232a3.966 3.966 0 0 0 0 5.61l30.054 30.052a3.96 3.96 0 0 0 2.806 1.162 3.96 3.96 0 0 0 2.806-1.162c14.13-14.127 21.91-32.913 21.91-52.894zm14.168-14.166v-42.503a3.97 3.97 0 0 0-3.967-3.968H11.935a3.964 3.964 0 0 0-3.898 3.235l-7.97 42.503a3.97 3.97 0 0 0 3.9 4.7h124.094a3.97 3.97 0 0 0 3.967-3.968m-114.78-66.87h39.973a3.97 3.97 0 0 0 3.968-3.968v-42.5a3.97 3.97 0 0 0-3.968-3.968H25.218a3.966 3.966 0 0 0-3.898 3.235l-7.97 42.503a3.97 3.97 0 0 0 .847 3.265 3.96 3.96 0 0 0 3.051 1.433"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
