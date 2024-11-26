import { defineComponent as m, computed as o, openBlock as n, createElementBlock as l, normalizeStyle as r, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoQuora",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -185 512 512",
      style: r(i.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#B92B27",
          d: "M72.899 110.5c-4.91-9.664-10.67-19.425-21.906-19.425-2.148 0-4.293.355-6.262 1.254l-3.817-7.64c4.651-3.99 12.168-7.154 21.829-7.154 15.03 0 22.743 7.24 28.867 16.481 3.635-7.89 5.363-18.545 5.363-31.752 0-32.98-10.314-49.915-34.407-49.915-23.741 0-33.999 16.935-33.999 49.915 0 32.807 10.258 49.567 34 49.567 3.773 0 7.19-.415 10.332-1.331m5.885 11.51c-5.204 1.395-10.734 2.165-16.218 2.165C30.953 124.175 0 98.95 0 62.265 0 25.23 30.953 0 62.566 0c32.144 0 62.8 25.05 62.8 62.264 0 20.7-9.66 37.522-23.698 48.395 4.536 6.796 9.206 11.31 15.708 11.31 7.096 0 9.958-5.484 10.437-9.785h9.242c.54 5.727-2.325 29.527-28.153 29.527-15.644 0-23.915-9.067-30.118-19.701m66.906-31.47V48.13c0-4.83-1.785-6.975-7.332-6.975h-5.906v-11.27h38.587v60.12c0 10.135 5.486 14.604 13.84 14.604 6.855 0 13.713-3.033 17.412-9.958V48.13c0-4.831-1.79-6.976-7.334-6.976h-6.262v-11.27h38.948V92.86c0 6.272 2.324 9.131 9.48 9.131h1.254v11.63l-34.831 5.545V107.18h-.717c-6.738 8.225-16.22 13.775-29.76 13.775-15.21 0-27.38-7.69-27.38-30.415m143.347 19.146c13.719 0 18.931-11.935 19.205-35.966.266-23.506-5.486-34.885-19.205-34.885-11.986 0-19.502 11.385-19.502 34.885 0 24.036 7.393 35.966 19.502 35.966m0 11.269c-24.81 0-47.181-18.97-47.181-47.235 0-27.735 21.832-46.164 47.18-46.164 26.423 0 47.596 18.783 47.596 46.164 0 28.265-21.173 47.235-47.595 47.235m48.394-1.79v-11.271h3.758c9.306 0 10.2-2.683 10.2-10.734V48.13c0-4.83-2.505-6.975-8.229-6.975h-5.01v-11.27h35.364l1.79 18.43h.719c3.937-13.246 14.492-20.224 24.39-20.224 8.17 0 14.55 4.654 14.55 14.08 0 6.559-3.154 13.54-11.983 13.54-7.936 0-9.482-5.371-16.046-5.371-5.842 0-10.378 5.55-10.378 13.716V97.16c0 8.05 1.97 10.734 11.097 10.734h5.187v11.271zm117.73-13.12c11.274 0 15.923-10.675 15.923-21.404v-14.32c-8.228 8.524-27.377 8.824-27.377 24.033 0 7.455 4.418 11.691 11.453 11.691m16.463-.061c-4.654 8.945-14.2 14.97-27.556 14.97-15.506 0-25.526-8.235-25.526-22.724 0-29.159 40.614-21.41 52.542-40.73v-2.09c0-14.848-5.845-17.173-12.286-17.173-18.071 0-9.843 19.433-26.483 19.433-7.99 0-11.093-4.823-11.093-10.25 0-10.975 13.123-19.863 37.758-19.863 23.314 0 37.632 6.443 37.632 29.645v37.035c0 5.724 2.089 8.83 7.099 8.83 2.145 0 3.934-.597 5.304-1.552l2.985 7.27c-2.447 3.761-8.95 10.381-21.297 10.381-10.731 0-17.472-5.01-18.368-13.181z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
