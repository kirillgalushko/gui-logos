import { defineComponent as n, computed as c, openBlock as h, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoGit3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#DE4C36",
          d: "M251.172 116.594 139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.8 19.8 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.7 19.7 0 0 1 6.421-4.281V94.196a19.4 19.4 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442 4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};