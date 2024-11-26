import { defineComponent as h, computed as l, openBlock as n, createElementBlock as p, normalizeStyle as a, createStaticVNode as d } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoMedium",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -3.5 48 48",
      style: a(o.value)
    }, e[0] || (e[0] = [
      d('<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><g><path fill="#00FC87" d="M33.186.487c-.722-.363-1.312.005-1.312.816v32.294l13.172 6.626c1.45.73 2.625.219 2.625-1.14V7.985a.35.35 0 0 0-.189-.307z"></path><path fill="#00E468" d="M16.077 25.651 31.105 1.084c.423-.691 1.36-.96 2.081-.597l14.312 7.2a.18.18 0 0 1 .072.252L31.874 33.597z"></path><path fill="#00C860" d="M2.467.928C1.264.322.857.77 1.562 1.922l14.515 23.73 15.797 7.945L16.11 7.83a.23.23 0 0 0-.092-.085z"></path><path fill="#00AC68" d="M16.077 39.083c0 1.353-.984 1.965-2.187 1.36L1.593 34.257C.87 33.894.28 32.933.28 32.121V1.795C.28.713 1.068.223 2.03.707L15.992 7.73c.052.027.085.08.085.138z"></path></g></g></g>', 1)
    ]), 4));
  }
});
export {
  g as _
};
