import { defineComponent as h, computed as i, openBlock as o, createElementBlock as m, normalizeStyle as n, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoSplunk",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, s = i(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (v, t) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "153",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 153",
      style: n(s.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#0C1724",
          "fill-rule": "nonzero",
          d: "M54.602 92.081q0 5.08-2.148 9.443a21.4 21.4 0 0 1-6.01 7.332c-2.587 2.032-5.651 3.586-9.193 4.702-3.542 1.115-7.442 1.673-11.661 1.673-5.054 0-9.591-.677-13.571-2.072-3.98-1.354-8-3.666-12.019-6.853l6.646-10.798c3.184 2.67 6.05 4.622 8.636 5.857 2.547 1.236 5.174 1.833 7.88 1.833 3.304 0 5.93-.837 7.96-2.55s2.985-3.984 2.985-6.893c0-1.235-.2-2.39-.557-3.466-.359-1.077-1.035-2.192-1.99-3.348-.956-1.115-2.309-2.39-4.02-3.705a197 197 0 0 0-6.567-4.941 167 167 0 0 1-6.009-4.463 49 49 0 0 1-5.333-4.94 22.5 22.5 0 0 1-3.86-5.897c-.955-2.152-1.473-4.662-1.473-7.411 0-3.188.677-6.137 1.99-8.766s3.144-4.861 5.452-6.734c2.309-1.873 5.055-3.307 8.318-4.343 3.224-1.036 6.726-1.554 10.546-1.554 4.02 0 7.88.518 11.621 1.594 3.741 1.075 7.204 2.63 10.427 4.701l-6.01 9.723c-4.098-2.87-8.436-4.344-12.973-4.344-2.746 0-5.054.718-6.845 2.152s-2.707 3.228-2.707 5.419c0 2.072.796 3.945 2.388 5.578 1.592 1.674 4.338 3.945 8.238 6.973 3.94 2.869 7.204 5.42 9.75 7.57 2.588 2.152 4.618 4.224 6.13 6.137s2.507 3.825 3.104 5.817c.597 2.032.875 4.183.875 6.574m68.254-18.209q0 4.483-.955 9.683c-.598 3.466-1.672 6.654-3.184 9.602s-3.463 5.38-5.89 7.252c-2.428 1.912-5.532 2.869-9.233 2.869-6.209 0-11.104-2.47-14.686-7.451-3.582-4.94-5.372-11.754-5.372-20.4 0-8.886 1.79-15.899 5.452-21.118 3.621-5.22 8.556-7.81 14.765-7.81 5.89 0 10.546 2.47 13.969 7.331 3.423 4.901 5.134 11.595 5.134 20.042m21.57-.757c0-5.777-.836-11.037-2.467-15.738-1.672-4.742-3.98-8.806-7.045-12.233-3.064-3.426-6.646-6.056-10.825-7.969q-6.268-2.868-13.85-2.869c-5.571 0-10.466 1.076-14.685 3.148-4.218 2.112-8.158 5.419-11.74 9.961l-.12-11.276H63.837v115.909h19.819v-48.97c1.95 2.272 3.82 4.184 5.651 5.738 1.79 1.554 3.622 2.83 5.492 3.786s3.82 1.673 5.89 2.072c2.07.398 4.299.597 6.646.597 5.254 0 10.189-1.076 14.726-3.148 4.537-2.111 8.476-5.06 11.78-8.885s5.89-8.288 7.76-13.348c1.91-5.1 2.826-10.718 2.826-16.775m8.835 40.284h20.376V0h-20.376zm107.295.04v-77.38H240.18v41.638q0 5.559-.477 8.607c-.319 2.032-.836 3.825-1.552 5.499-2.866 6.375-8.16 9.602-15.84 9.602-6.01 0-10.188-2.152-12.576-6.495-.955-1.633-1.592-3.506-1.95-5.578s-.557-5.06-.557-9.005V36.06H186.85v43.948c0 2.989.04 5.539.08 7.571s.2 3.905.398 5.498c.199 1.594.438 3.029.716 4.264a15.4 15.4 0 0 0 1.155 3.546c1.87 4.741 4.855 8.328 9.033 10.758 4.18 2.43 9.313 3.626 15.363 3.626 5.452 0 10.267-.956 14.406-2.869 4.14-1.912 8.159-5.02 12.059-9.363l.04 10.36zm87.794-.04v-43.87c0-2.988-.04-5.538-.08-7.65s-.159-3.945-.398-5.498a38 38 0 0 0-.756-4.065 44 44 0 0 0-1.075-3.466c-1.87-4.622-4.855-8.208-9.034-10.719-4.178-2.51-9.313-3.785-15.401-3.785-5.453 0-10.268.957-14.407 2.87-4.14 1.912-8.159 5.06-12.059 9.363l-.04-10.36h-20.496v77.22h20.536V71.76c0-3.587.12-6.415.398-8.408.239-1.992.756-3.865 1.473-5.658 1.313-3.108 3.382-5.418 6.128-7.012s6.01-2.39 9.83-2.39c6.01 0 10.189 2.15 12.576 6.494.916 1.633 1.553 3.506 1.91 5.538.359 2.032.558 5.06.558 8.965v44.068zm84.29-5.1L401.6 69.689l26.226-28.13-15.44-6.655-27.302 31.676h-2.15V0h-20.535v113.399h20.536v-41.08l30.724 42.633zM512 80.565v-12.63l-61.727-31v13.906l47.836 23.31-47.836 23.627v13.587z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
