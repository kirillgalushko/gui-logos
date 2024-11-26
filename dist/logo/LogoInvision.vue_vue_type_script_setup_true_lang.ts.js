import { defineComponent as o, computed as h, openBlock as c, createElementBlock as m, normalizeStyle as s, createElementVNode as l } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoInvision",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: s(n.value)
    }, t[0] || (t[0] = [
      l("circle", {
        cx: "16",
        cy: "16",
        r: "14",
        fill: "#F36"
      }, null, -1),
      l("path", {
        fill: "#fff",
        d: "M11.36 10.86a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m-3.657 1.5-.61 2.234h2c-.4 1.63-1.24 5.06-1.39 5.734-.187.844-.219 3.25 2.313 3.25 1.766 0 2.893-1.141 3.522-2.073l-.476 1.901h2.844l1.485-6.008c.21-1 .707-2.93 2.5-2.93 2.132 0 1.35 2.525.966 3.762l-.044.145c-.288.938-.594 2.031-.594 2.781 0 .844.39 2.422 2.578 2.422s3.12-2.166 3.312-3.25L25 19.875c-.078.578-.781 1.828-1.437 1.828-.899 0-.448-1.514.034-3.13.214-.718.433-1.455.544-2.089.279-1.602 0-4.328-2.782-4.328-1.727 0-3.083 1.54-3.729 2.608l.542-2.405h-4.328l-.594 2.235h2.016s-1.197 4.874-1.274 5.027c-.812 1.606-2.041 2.145-2.96 2.082-.738-.05-.652-.937-.516-1.375l2-7.969z"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
