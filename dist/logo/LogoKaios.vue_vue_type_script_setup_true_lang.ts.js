import { defineComponent as o, computed as s, openBlock as h, createElementBlock as n, normalizeStyle as r, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoKaios",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "134",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 134",
      style: r(m.value)
    }, t[0] || (t[0] = [
      c("g", { "fill-rule": "evenodd" }, [
        c("path", {
          fill: "#5E3580",
          d: "M15.437.307C6.911.307 0 7.22 0 15.745v102.143c0 8.526 6.911 15.438 15.437 15.438s15.439-6.912 15.439-15.438V15.745c0-8.526-6.912-15.438-15.439-15.438m51.114 47.329c-4.795-6.848-14.234-8.513-21.082-3.718S36.956 58.152 41.752 65l43.321 61.87c4.795 6.848 14.233 8.511 21.082 3.717 6.848-4.796 8.513-14.234 3.718-21.082zm19.747-6.566c11.256 0 20.38-9.124 20.38-20.38S97.554.307 86.298.307 65.916 9.433 65.916 20.69s9.126 20.38 20.382 20.38m78.779 65.5c-10.672 0-19.356-8.682-19.356-19.356 0-10.673 8.684-19.355 19.356-19.355s19.356 8.682 19.356 19.355-8.683 19.356-19.356 19.356m0-65.468c25.468 0 46.113 20.645 46.113 46.112 0 .693-.022 1.381-.052 2.066v30.712c0 7.365-5.971 13.335-13.336 13.335-4.45 0-8.38-2.187-10.802-5.537a45.9 45.9 0 0 1-21.923 5.537c-25.467 0-46.112-20.646-46.112-46.113s20.645-46.112 46.112-46.112m75.63 0c8.481 0 15.356 6.875 15.356 15.357v61.51c0 8.482-6.875 15.358-15.355 15.358-8.482 0-15.356-6.876-15.356-15.357V56.458c0-8.482 6.874-15.357 15.356-15.357m96.39 63.419c-20.79 0-37.702-16.914-37.702-37.704s16.913-37.702 37.702-37.702c20.79 0 37.703 16.913 37.703 37.702 0 20.79-16.913 37.704-37.703 37.704m0-104.213c-36.732 0-66.509 29.777-66.509 66.51 0 36.731 29.777 66.51 66.51 66.51 36.732 0 66.508-29.779 66.508-66.51 0-36.733-29.776-66.51-66.509-66.51m133.87 50.08h-18.125c-5.786 0-10.496-4.71-10.496-10.499 0-6.32 5.855-10.084 11.638-10.54 7.119-.565 26.629-.16 33.544.04 7.918.288 14.717-6.083 14.948-14.104C502.71 7.26 496.395.57 488.375.336c-2.7-.08-26.707-.737-36.67.038-21.903 1.72-38.422 18.707-38.422 39.514 0 21.814 17.746 39.562 39.559 39.562h18.126c6.488 0 11.969 5.603 11.969 12.234 0 7.61-6.563 11.515-13.071 12.009-8.353.636-33.406.192-42.35-.038-8.027-.196-14.69 6.14-14.895 14.162-.2 8.023 6.138 14.69 14.162 14.894 2.2.054 15.448.376 27.682.376 6.918 0 13.512-.103 17.603-.414C495.206 130.914 512 113.678 512 91.683c0-22.77-18.408-41.296-41.032-41.296"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};