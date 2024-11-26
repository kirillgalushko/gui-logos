import { defineComponent as l, computed as h, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoPlanless2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "298",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 298",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FF6254",
          d: "m126.67 171.379 92.426 38.603-207.46 86.009C3.686 299.23.3 296.893.02 288.682L0 287.526v-59.598c0-3.386 1.923-6.492 4.77-8.047l.882-.418zM256 109.072v78.898l-93.424-36.57c-1.33-.339-1.994-1.694-1.994-2.71 0-.846.462-1.928 1.385-2.46zM0 9.869C0 1.124 3.042-1.735 10.58.997l1.056.407 207.46 86.348-92.426 38.264L5.652 78.271C2.63 77.039.432 74.129.057 70.557L0 69.467z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
