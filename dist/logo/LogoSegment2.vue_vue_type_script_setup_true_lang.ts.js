import { defineComponent as o, computed as m, openBlock as h, createElementBlock as n, normalizeStyle as s, createElementVNode as a } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoSegment2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "265",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 265",
      style: s(i.value)
    }, t[0] || (t[0] = [
      a("g", null, [
        a("path", {
          fill: "#4FB58B",
          d: "m233.56 141.927.17.013 17.892 1.87a4.93 4.93 0 0 1 3.225 1.707l.133.163-.17.085a4.93 4.93 0 0 1 1.02 3.74 133.27 133.27 0 0 1-41.604 81.083 128.86 128.86 0 0 1-87.629 34.38 127.5 127.5 0 0 1-46.156-8.57l-.802-.312a4.72 4.72 0 0 1-2.686-2.533l-.077-.187a4.9 4.9 0 0 1-.083-3.66l7.062-17.23a4.846 4.846 0 0 1 6.118-2.799l.163.06c36.097 13.939 76.98 6.089 105.349-20.227a104.46 104.46 0 0 0 32.891-63.32 4.93 4.93 0 0 1 5.013-4.27zm-190.08 64.31.251-.002.253.002c8.12.093 14.658 6.659 14.746 14.749v.253l-.002.252c-.141 8.284-6.97 14.886-15.254 14.745s-14.885-6.97-14.745-15.254c.139-8.115 6.695-14.615 14.75-14.745M4.93 147.082h146.316a4.973 4.973 0 0 1 4.928 4.844l.002.171v18.316a4.974 4.974 0 0 1-4.76 5.01l-.17.005H4.93A4.975 4.975 0 0 1 0 170.584v-18.659a4.975 4.975 0 0 1 4.755-4.838zM169.56 7.311a4.97 4.97 0 0 1 2.848 2.635 5.1 5.1 0 0 1 0 3.867l-6.375 16.999a4.845 4.845 0 0 1-6.162 2.974A101.23 101.23 0 0 0 62.13 51.252a105.27 105.27 0 0 0-34.507 54.99 4.93 4.93 0 0 1-4.76 3.698h-1.105L4.25 105.733a4.9 4.9 0 0 1-3.103-2.295h-.085A4.93 4.93 0 0 1 .51 99.57a133.4 133.4 0 0 1 44.41-70.204C79.739.7 127.019-7.666 169.56 7.311m-64.807 73.434H251.07a4.97 4.97 0 0 1 4.922 4.67l.008.174v18.317a4.973 4.973 0 0 1-4.76 5.01l-.17.005H104.754a4.97 4.97 0 0 1-4.886-4.842l-.002-.173V85.759a4.97 4.97 0 0 1 4.715-5.008zm101.572-55.883.252-.002.253.002c8.12.093 14.658 6.659 14.746 14.748v.253q0 .128-.002.253c-.14 8.284-6.97 14.885-15.254 14.744-8.284-.14-14.885-6.97-14.744-15.253.138-8.116 6.694-14.616 14.749-14.745"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};