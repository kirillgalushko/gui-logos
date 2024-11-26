import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoBroccoli",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "266",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 266",
      style: c(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#598527",
          d: "M99.316 250.603c1.229 2.516 3.312 5.281 5.525 7.184 2.705 2.326 6.075 3.971 9.642 5.291 2.49.922 5.78 1.726 8.441 2.204 2.758.495 6.144.486 9.336.45 5.67-.061 10.147-.59 15.199-1.82 3.183-.775 6.206-1.636 8.66-2.602 4.634-1.823 7.587-3.847 8.204-5.16-.463-2.172-1.19-5.59-1.732-8.664a141 141 0 0 1-1.203-8.304c-.694-6.021-.337-10.257.432-17.26 1.133-10.315 3.336-15.014 6.552-21.144 3.072-5.854 8.143-14.037 12.05-19.308 4.074-5.496 14.274-16.235 17.994-20.226 1.298.384 3.804 1.22 7.68 1.984 2.953.584 6.392 1.278 10.72 1.133 10.304-.347 14.055-2.317 20.048-6.225 5.439-3.546 10.642-10.64 13.367-17.438 2.095-5.227 2.74-10.549 1.828-16.794-.614-4.202-1.971-9.176-3.056-12.466-1.18-3.579-3.033-7.422-4.588-10.33 0 0 6.255-7.474 8.758-13.71 2.155-5.368 3.16-12.277 2.729-16.595-.448-4.481-4.252-12.702-6.643-15.637-3.15-3.865-6.23-7.873-10.12-11.016-3.815-3.08-8.134-5.602-12.658-7.492-4.687-1.958-10.295-3.091-14.739-3.872-.667-3.56-1.587-6.043-4.037-10.327-3.06-5.502-6.42-7.987-11.701-11.854-6.553-4.798-15.686-9.747-24.55-10.424-3.82-.292-9.418-.413-16.458 1.101-6.121 1.317-12.156 3.804-16.744 6.148-9.213-3.528-17.82-3.007-24.61-1.163-5.726 1.555-6.948 2.488-12.188 5.571-5.143 2.222-10.731 7.39-15.058 13.372-16.117.457-29.532 6.126-39.083 11.546-10.864 6.166-20.613 17.95-24.43 25.445-4.26 8.366-8.515 20.2-4.92 38.5-23.742 14.598-21.3 37.947-7.954 50.984 11.706 11.433 31.098 14.996 49.464 13.144 5.488 5.562 26.246 30.71 26.246 30.71s20.91 23.565 13.597 55.064M76.79 153.059c2.841-2.841 5.277-6.9 7.17-10.012 2.15.12 6.564.41 10.904.21 4.352-.2 8.963-.843 10.807-1.92.518 1.551 4.119 14.407 4.347 22.307.3 10.357.011 12.192-1.663 15.828-.911.43-1.797.618-2.916.217-3.984-1.43-10.624-6.407-15.385-10.848-7.373-6.878-13.264-15.782-13.264-15.782m82.074-2.188c-.142 1.258-.234 5.774.374 9.719.618 4.006 1.224 7.729 2.735 9.175 5.31-.957 9.018-4.363 12.223-6.755 0 0 10.402-8.121 12.41-9.987-1.53-1.387-3.682-4.64-4.448-6.6 0 0-7.32 2.144-11.003 2.909-4.64 1.005-10.09 1.443-12.291 1.539"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
