import { defineComponent as n, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoMilligram",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "370",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 370",
      style: l(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#9B4DCA",
          d: "M128 0C36.468 150.218 0 178.702 0 241.794c0 70.692 57.308 128 128 128s128-57.308 128-128C256 178.15 218.973 149.942 128 0m0 348.777c-59.203 0-107.196-47.994-107.196-107.197 0-52.837 30.541-76.692 107.196-202.495C204.188 164.657 235.196 188.28 235.196 241.58c0 59.203-47.993 107.197-107.196 107.197m-13.27-44.966c-12.333-2.766-21.681-7.743-30.53-16.095-6.361-6.03-9.845-10.62-13.385-17.477-5.586-10.896-7.522-19.635-7.08-32.08.166-6.14.554-9.236 1.66-13.33 1.659-6.25 4.424-13.107 5.918-14.766.608-.664 1.106-1.44 1.106-1.77 0-.332.442-1.217.94-1.991 1.438-2.268 1.494-5.476.166-8.131-2.986-5.807-7.854-8.241-13.827-6.913-4.148.94-6.305 3.705-10.509 13.44-5.033 11.725-7.079 20.353-7.577 32.079-1.881 42.698 27.489 80.253 69.357 88.77 4.259.83 6.195.996 7.909.609 8.573-1.936 11.726-11.781 5.863-18.197-1.77-1.991-3.429-2.655-10.011-4.148"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
