import { defineComponent as h, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoFeathersjs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(s.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#333",
          d: "M128 9.102c65.665 0 118.898 53.233 118.898 118.898S193.665 246.898 128 246.898 9.102 193.665 9.102 128 62.335 9.102 128 9.102M128 0C57.421 0 0 57.421 0 128s57.421 128 128 128 128-57.421 128-128S198.579 0 128 0m20.83 25.524c-10.43-1.896-35.651 36.409-43.994 59.734-.634 1.769-2.086 8.249-2.086 9.955 0 0 6.531 14.055 8.343 17.351-3.034-1.58-9.323-13.756-9.323-13.756-3.034 5.784-5.942 32.34-4.994 37.271 0 0 6.762 10.062 9.387 12.578-3.603-1.201-9.671-9.355-9.671-9.355-1.138 3.508-.916 10.807-.379 13.274 4.551 6.637 10.619 7.396 10.619 7.396s-6.637 66.181 3.413 71.111c6.258-1.327 7.775-73.956 7.775-73.956s7.585.569 9.292-1.327c3.856-2.655 12.826-30.224 12.958-34.202 0 0-10.41 1.952-15.487 3.924 3.826-3.8 16.049-6.352 16.049-6.352 3.315-3.979 10.291-31.047 10.994-39.391.176-2.093.583-4.657.268-8.398 0 0-9.941 2.177-12.014 1.424 2.104-.237 12.263-4.14 12.263-4.14 1.801-16.213 2.358-42.091-3.413-43.141m-36.38 171.691c-.795 19.496-1.294 25.004-2.115 29.601-.379.857-.758.997-1.138-.095-3.477-15.992-3.224-136.438 36.409-191.241-23.05 42.092-33.535 122.861-33.156 161.735"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
