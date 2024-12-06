import { defineComponent as o, computed as h, openBlock as s, createElementBlock as n, normalizeStyle as l, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoIonic2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (s(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "173",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 173",
      style: l(m.value)
    }, t[0] || (t[0] = [
      c("g", { fill: "#3880FF" }, [
        c("path", { d: "M86.51 0c14.027 0 27.234 3.278 39.622 9.625l1.638.82-1.434 1.125c-3.48 2.765-6.245 6.348-7.985 10.443l-.512 1.126-1.024-.512c-9.521-4.504-19.657-6.859-30.202-6.859-39.007 0-70.642 31.738-70.642 70.642s31.533 70.642 70.54 70.642c39.006 0 70.642-31.738 70.642-70.642 0-9.317-1.74-18.428-5.427-27.028l-.511-1.126 1.126-.512c4.197-1.536 7.883-4.096 10.852-7.372l1.126-1.433.717 1.638c5.221 11.364 7.78 23.445 7.78 35.628 0 47.607-38.801 86.408-86.408 86.408S0 133.812 0 86.205 38.802-.203 86.51.001m0 47.096c21.603 0 39.314 17.61 39.417 39.416 0 21.807-17.61 39.416-39.416 39.416-21.807 0-39.416-17.609-39.416-39.416S64.806 47.096 86.51 47.096m56.412-32.557c9.951 0 18.019 8.068 18.019 18.02 0 9.95-8.068 18.018-18.02 18.018-9.95 0-18.018-8.067-18.018-18.019s8.067-18.019 18.019-18.019M480.57 46.994c6.757 0 12.695 2.252 17.2 4.914 6.04 3.583 10.442 7.167 14.23 13.002l-13.105 8.907s-7.166-11.262-18.837-11.262c-13.822 0-22.831 10.648-22.831 23.957s9.112 23.957 22.83 23.957c11.672 0 18.736-11.466 18.736-11.364L512 107.91c-3.788 5.835-8.19 9.316-14.23 13.002-4.505 2.662-10.546 4.914-17.2 4.914-22.831 0-40.236-17.2-40.338-39.416.102-22.216 17.507-39.416 40.337-39.416m-197.49.102c18.94 0 39.416 13.412 39.314 39.416 0 22.83-17.508 39.314-39.007 39.314-23.753 0-39.724-18.326-39.724-39.723 0-20.988 16.483-39.007 39.416-39.007m-47.505 1.74v75.25H217.35v-75.25zm196.671 0v75.25h-18.223v-75.25zm-60.301-1.74c23.035 0 31.635 15.869 31.942 35.628v41.26h-18.223V80.88c0-10.033-6.86-18.53-15.562-18.53-9.01 0-21.09 7.269-21.09 16.176v45.559h-18.224v-75.25h15.152l1.127 8.089.086-.082c2.319-2.164 12.158-9.747 24.792-9.747m-88.66 15.46c-12.696 0-22.422 10.135-22.422 23.854 0 13.821 9.828 23.957 22.319 23.957 11.466 0 22.114-9.42 22.114-23.855 0-14.742-10.75-23.957-22.012-23.957" })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};