import { defineComponent as o, computed as s, openBlock as m, createElementBlock as n, normalizeStyle as h, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoUservoice2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "320",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 320",
      style: h(l.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#FF6720",
          d: "M202.4 0 256 35.2v176c-.8 60-52 106.4-93.6 106.4 40.8-24.8 51.2-60.8 51.2-96V56l-11.2-7.2L192 56v168l-.013 1.581C191.135 277.66 148.272 320 96 320c-52.8 0-96-43.2-96-96v-10.4c0-10.4 10.4-21.6 10.4-32 0-5.023-2.336-10.436-4.836-15.695l-.501-1.05c-.921-1.919-1.844-3.813-2.663-5.655-1.6-2.4-2.4-6.4-2.4-9.6 0-12 9.6-21.6 20.8-21.6 12 0 21.6 9.6 21.6 21.6q0 4.8-2.4 9.6c-.819 1.842-1.742 3.736-2.663 5.656l-.501 1.05C34.336 171.163 32 176.575 32 181.6c0 5.2 2.6 10.6 5.2 16l.623 1.296c2.376 4.967 4.577 9.92 4.577 14.704V224l.005.719C42.72 248.399 58.616 268.072 80 275.2c-10.4-14.4-16-32-16-51.2v-10.4c0-5.2 2.6-10.6 5.2-16l.623-1.296c2.376-4.967 4.577-9.92 4.577-14.704 0-5.023-2.336-10.436-4.836-15.695l-.501-1.05c-.921-1.919-1.844-3.813-2.663-5.655-1.6-2.4-2.4-6.4-2.4-9.6 0-12 8.8-21.6 20.8-21.6s21.6 9.6 21.6 21.6q0 4.8-2.4 9.6c-.819 1.842-1.742 3.736-2.663 5.656l-.501 1.05C98.336 171.163 96 176.575 96 181.6c0 5.2 2.6 10.6 5.2 16l.623 1.296c2.376 4.967 4.577 9.92 4.577 14.704V224c0 16.8 7.2 32.8 20 43.2 13.6-9.6 22.4-25.6 22.4-43.2V35.2zM21.6 70.4c11.93 0 21.6 9.67 21.6 21.6s-9.67 21.6-21.6 21.6S0 103.93 0 92s9.67-21.6 21.6-21.6m64-.8c11.93 0 21.6 9.67 21.6 21.6s-9.67 21.6-21.6 21.6S64 103.13 64 91.2s9.67-21.6 21.6-21.6m-64-56.8c11.93 0 21.6 9.67 21.6 21.6S33.53 56 21.6 56 0 46.33 0 34.4s9.67-21.6 21.6-21.6m64-.8c11.93 0 21.6 9.67 21.6 21.6s-9.67 21.6-21.6 21.6S64 45.53 64 33.6 73.67 12 85.6 12"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};