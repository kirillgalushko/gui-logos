import { defineComponent as m, computed as o, openBlock as c, createElementBlock as p, normalizeStyle as n, createElementVNode as e } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoDatasette2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, a) => (c(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(h.value)
    }, a[0] || (a[0] = [
      e("g", { fill: "#0E0C82" }, [
        e("path", { d: "M224 0c17.488 0 32 14.512 32 32v192c0 17.488-14.512 32-32 32H32c-17.488 0-32-14.512-32-32V32C0 14.512 14.512 0 32 0zm22.154 216.615H9.846V224c0 11.835 9.746 21.792 21.51 22.144l.644.01h192c12.05 0 22.154-10.104 22.154-22.154zm0-41.846H9.846v32h236.308zm0-41.846H9.846v32h236.308zm0-41.846H9.846v32h236.308zm0-44.308H9.846v34.462h236.308zM224 9.846H32C19.95 9.846 9.846 19.95 9.846 32v4.923h236.308V32c0-11.835-9.746-21.792-21.51-22.144z" }),
        e("path", {
          "fill-opacity": ".3",
          d: "M46.77 41.846a4.923 4.923 0 0 1 4.922 4.923v204.308a4.923 4.923 0 0 1-9.846 0V46.769a4.923 4.923 0 0 1 4.923-4.923m123.076 0a4.923 4.923 0 0 1 4.923 4.923v204.308a4.923 4.923 0 0 1-9.846 0V46.769a4.923 4.923 0 0 1 4.923-4.923m39.385 0a4.923 4.923 0 0 1 4.923 4.923v204.308a4.923 4.923 0 1 1-9.846 0V46.769a4.923 4.923 0 0 1 4.923-4.923M86.154 36.923a4.923 4.923 0 0 1 4.923 4.923v204.308a4.923 4.923 0 0 1-9.846 0V41.846a4.923 4.923 0 0 1 4.923-4.923m41.846 0a4.923 4.923 0 0 1 4.923 4.923v204.308a4.923 4.923 0 0 1-9.846 0V41.846A4.923 4.923 0 0 1 128 36.923"
        }),
        e("path", {
          "fill-opacity": ".3",
          d: "M251.077 41.846H4.923C7.385 14.77 12.308 4.923 39.385 4.923h174.769c29.538 0 36.923 9.846 36.923 36.923"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};