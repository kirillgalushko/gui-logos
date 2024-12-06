import { defineComponent as i, computed as o, openBlock as m, createElementBlock as c, normalizeStyle as n, createElementVNode as e } from "vue";
const p = /* @__PURE__ */ i({
  __name: "LogoHotjar2",
  props: {
    width: {},
    height: {}
  },
  setup(q) {
    const t = q, h = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (v, l) => (m(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "133",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 133",
      style: n(h.value)
    }, l[0] || (l[0] = [
      e("g", null, [
        e("path", {
          fill: "#323232",
          d: "M133.964 100.262V.144h15.555v39.47q7.349-10.943 22.04-10.947 12.533 0 19.376 7.418 6.845 7.42 6.845 20.672v43.505h-15.556V58.918q0-17.14-15.27-17.142-7.637 0-12.533 4.61-4.894 4.61-4.9 12.964v40.911zm137.33-8.64q-10.372 10.371-26.073 10.371t-26.147-10.372Q208.63 81.25 208.63 65.255t10.444-26.288q10.444-10.297 26.147-10.3t26.073 10.3q10.374 10.301 10.373 26.288t-10.373 26.366m-40.839-8.79q5.542 6.483 14.766 6.483t14.765-6.482q5.543-6.482 5.546-17.578 0-10.947-5.618-17.43t-14.693-6.483q-9.221 0-14.766 6.41t-5.546 17.5q0 11.1 5.546 17.58m137.306-52.436v80.669q0 11.236-5.547 16.206t-14.186 4.971q-10.373 0-17.143-5.762l5.763-12.245q4.178 4.896 9.076 4.9 6.48 0 6.481-8.354V30.396zM311.91 9.8v20.596h27.802v13.108H311.91V78.51q0 9.653 7.059 9.652 6.625 0 11.956-12.101l12.101 6.195q-8.933 19.737-25.354 19.735-21.466 0-21.466-23.05V43.505h-10.801V30.396h11.236L300.244 9.8zM359.947 0c2.545 0 4.999.95 6.88 2.665a8.86 8.86 0 0 1 2.808 6.699 8.68 8.68 0 0 1-2.809 6.554 9.57 9.57 0 0 1-6.843 2.664 9.65 9.65 0 0 1-6.914-2.592 8.72 8.72 0 0 1-2.737-6.626 8.96 8.96 0 0 1 2.737-6.7A10.2 10.2 0 0 1 359.948 0m46.45 101.991q-11.959 0-19.375-5.978t-7.418-16.058q0-9.219 7.707-15.633t19.374-6.41q11.957 0 20.168 7.635v-8.5q0-7.489-3.818-11.597t-10.875-4.106q-14.262 0-17.72 14.55l-14.261-3.025q2.877-11.236 11.38-17.719 8.504-6.482 21.176-6.482 13.83 0 21.825 7.275t7.995 21.247v43.073H427.43v-8.789q-7.637 10.518-21.031 10.517m2.878-11.524q10.373 0 17.578-10.371v-2.163q-7.206-8.643-17.578-8.643-6.05 0-9.8 2.956a9.2 9.2 0 0 0-3.746 7.562 9.42 9.42 0 0 0 3.675 7.707q3.271 2.625 8.529 2.916zm48.417 9.795V30.396h15.126v12.1q5.76-13.253 19.88-13.253 8.352 0 13.829 5.474 5.476 5.474 5.472 14.693a34.2 34.2 0 0 1-1.872 10.804l-14.262-1.44q.44-2.866.576-5.762 0-10.804-8.93-10.804-6.052 0-10.157 6.41-4.104 6.41-4.106 16.927v34.717z"
        }),
        e("path", {
          fill: "#FF3C00",
          d: "M89.31 35.185c0 18.514-8.252 28.265-17.202 34.678l-1.738 1.202-1.745 1.126-1.737 1.061-1.718 1.004-6.497 3.646q-.507.29-1 .577l-1.913 1.153c-6.794 4.24-11.115 8.818-11.477 19.18l-.025 1.45H25.032c0-17.916 7.73-27.627 16.34-34.048l1.732-1.242q.435-.3.87-.59l1.745-1.127 1.737-1.06 3.404-1.96 4.81-2.69 1.972-1.153c7.334-4.413 12.04-8.924 12.419-19.758l.025-1.449zM64.28.145c0 17.914-7.729 27.625-16.339 34.046l-1.732 1.242q-.435.3-.87.59l-1.745 1.127-1.737 1.061-3.405 1.96-4.81 2.69-1.972 1.153q-.478.288-.942.577l-1.79 1.169c-5.756 3.952-9.357 8.591-9.687 18.012l-.025 1.45H0c0-19.112 8.793-28.884 18.07-35.29l1.744-1.162 1.742-1.093 1.73-1.031 7.352-4.142 1.972-1.153c7.334-4.414 12.04-8.925 12.419-19.757l.024-1.45z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};