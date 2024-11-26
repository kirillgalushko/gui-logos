import { defineComponent as o, computed as m, openBlock as h, createElementBlock as n, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoEnvoy2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, c = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, l) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "191",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 191",
      style: p(c.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#B31AAB",
          d: "m63.834 92.174.34 15.418 16.212 10.09-.34-15.418zm39.566 64.054-.34-15.079-14.172-8.842c-.226-.114-.453-.34-.567-.454l.34 15.192zM52.723 176.52l-37.071-22.9-.907-38.546 18.139-7.822-.34-15.418-29.023 12.47c-2.267 1.02-3.628 3.061-3.514 5.442l1.133 46.255c0 2.38 1.474 4.761 3.855 6.122l44.554 27.549c2.04 1.247 4.535 1.587 6.689 1.02.227-.114.453-.114.68-.227l27.322-11.79-14.851-9.183z"
        }),
        t("path", {
          fill: "#D163CE",
          d: "M172.668 91.267c-.113-2.721-1.7-5.555-4.421-7.143L114.17 50.68l-1.7.68.34 16.213L155.55 94.1l1.02 43.307 16.325 10.09.907-.34zm-64.734 76.184-50.109-31.177-1.247-52.15 22.9-9.863-.453-18.025L43.427 71.54c-2.607 1.134-4.195 3.515-4.081 6.35l1.474 61.219c0 2.834 1.7 5.555 4.421 7.142l58.839 36.505c2.38 1.474 5.328 1.927 7.822 1.134.227-.114.454-.227.68-.227l34.805-14.965-17.232-10.657z"
        }),
        t("path", {
          fill: "#E13EAF",
          d: "M249.193 48.413 173.689 1.705c-2.835-1.7-6.122-2.154-8.956-1.247-.227.113-.567.227-.794.34L90.362 32.54c-2.948 1.247-4.761 3.968-4.648 7.256l1.814 78.452c.113 3.174 2.04 6.348 5.101 8.162l75.391 46.709c2.721 1.7 6.122 2.154 8.956 1.247.227-.114.567-.227.794-.34l73.577-31.744c2.947-1.247 4.761-4.081 4.648-7.256l-1.814-78.451c0-3.175-1.927-6.236-4.988-8.163m-76.638 107.134-65.528-40.586-1.7-68.248 63.94-27.55 65.528 40.587 1.587 68.135z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
