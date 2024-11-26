import { defineComponent as m, computed as l, openBlock as s, createElementBlock as a, normalizeStyle as n, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoGrav",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, t) => (s(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(o.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#221E1F",
          d: "M136.233 94.936a3.833 3.833 0 0 0 0-5.422 3.833 3.833 0 0 0-5.422 0 3.83 3.83 0 0 0 0 5.422 3.835 3.835 0 0 0 5.422 0m-13.7 2.865a3.83 3.83 0 0 0 0 5.422 3.835 3.835 0 0 0 5.422 0 3.833 3.833 0 1 0-5.422-5.422m23.766 2.015a6 6 0 0 0-8.484 0l-4.99 4.99a5.997 5.997 0 0 0 0 8.484l5.478 5.48a6 6 0 0 0 8.484 0l4.99-4.99a6 6 0 0 0 0-8.485zm48.113-18.002c6.331-12.058-2.625-19.101-8.782-24.882-9.861-9.27-19.697-13.278-30.931-.442-11.227 12.836-4.094 27.723 6.175 35.07 10.274 7.348 27.197 2.309 33.538-9.746m-17.01-4.945c-3.957-4.742 3.439-13.352 8.08-8.21 8.546 9.471-4.117 12.952-8.08 8.21M128.001 0C57.31 0 0 57.308 0 127.996 0 198.688 57.309 256 128.002 256 198.692 256 256 198.688 256 127.996 256 57.308 198.692 0 128.002 0m69.217 148.974c-13.348-8.821-20.975-16.275-27.62-29.639-4.543 9.157-15.151 22.772-33.046 33.482-8.934 27.792-51.432 80.98-65.186 73.44-4.072-2.23-4.846-5.167-3.926-8.198C68.428 210.462 84.144 193 84.144 193s.332 3.664 5.36 11.383c-6.64-20.616 10.973-46.054 15.639-54.714 7.332-2.337 7.863-11.75 7.863-11.75.469-14.552-6.031-25.087-12.33-31.388 4.525 5.524 5.99 13.871 6.205 21.516v.042c.023.864.023 1.712.02 2.557-.215 6.328-2.13 15.07-6.225 15.07l.012.055c-4.211-.18-9.41.718-14.055 2.17l-10.27 2.455s5.477-.251 8.434 2.304c-3.293 5.363-10.613 12.019-18.778 15.8-11.878 5.509-15.292-5.452-9.261-12.58a39 39 0 0 1 4.39-4.415c-.91-.942-1.484-2.204-1.635-3.805-.001-.008-.007-.016-.009-.024-.828-3.637-.371-8.359 4.775-15.863a40 40 0 0 1 3.694-4.872c.046-.057.085-.109.133-.164.062-.076.132-.148.197-.223l.111-.125q.55-.628 1.176-1.22c6.133-6.282 15.82-12.815 31.086-18.678 17.802-26.168 24.322-31.076 24.322-31.076 1.97-2.015 5.416-4.521 6.682-5.16-9.297-16.155-11.174-38.928-8.738-45.065a9 9 0 0 0-.53 1.024c.903-2.102 1.508-2.777 2.446-3.883 2.539-3.004 11.144-4.578 14.234 1.785 1.646 3.393 1.957 7.787 1.902 11.082-6.814-.355-12.996 7.426-12.996 7.426s5.645-2.664 12.657-2.71c0 0 1.869 1.624 4.2 4.677-3.148 5.912-8.324 18.437-4.576 31.586.622 2.591 1.56 4.818 2.727 6.713.045.081.082.163.127.248.094.122.178.224.265.337 6.198 9.33 17.557 10.422 17.557 10.422a29.25 29.25 0 0 1-12.54-12.07c-1.473-2.756-2.376-5.082-2.93-6.917-3.008-11.618 1.42-18.4 3.955-22.946 5.832-9.047 16.457-14.524 27.877-13.22 16.027 1.83 27.539 16.306 25.707 32.329-1.117 9.79-6.957 17.887-14.98 22.293 1.93 5.223-.133 11.555-.133 11.555 4.859 6.113 5.073 9.636 4.905 12.91-6.175-1.04-12.175 3.129-12.175 3.129s11.914-2.844 18.836 3.33c4.501 4.841 7.504 9.217 9.293 12.448 2.562 4.61 14.46 4.938 13.105 13.227-1.355 8.276-10.43 8.355-24.656-1.031"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
