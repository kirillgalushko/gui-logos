import { defineComponent as i, computed as n, openBlock as m, createElementBlock as c, normalizeStyle as h, createElementVNode as s } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoPlaystation",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: h(o.value)
    }, t[0] || (t[0] = [
      s("path", {
        fill: "#0070D1",
        d: "M.691 21.955c-1.197.839-.976 2.283 1.757 3.187s5.908 1.09 8.703.587c-.08 0 .16 0 0 0v-2.852l-2.715.923c-1.038.335-2.076.42-3.114.168-.798-.252-.639-.755.32-1.174l5.508-2.013v-3.104l-7.664 2.768c-.958.336-1.917.839-2.795 1.51m18.524-12.58v8.135c3.273 1.677 5.828 0 5.828-4.362 0-4.445-1.517-6.458-5.908-8.051-2.316-.839-4.71-1.594-7.106-2.097v24.239L17.618 29V8.62c0-.923 0-1.594.639-1.343.878.252.958 1.175.958 2.097m10.38 10.65c-2.316-.838-4.791-1.173-7.187-.922-1.33.088-2.579.484-3.832.923v3.27l5.19-2.012c1.038-.336 2.076-.42 3.114-.168.798.252.638.755-.32 1.174l-7.984 3.104v3.187l11.018-4.278c.798-.335 1.517-.755 2.156-1.426.559-.838.32-2.012-2.156-2.851"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
