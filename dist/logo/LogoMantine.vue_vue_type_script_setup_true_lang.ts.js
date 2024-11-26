import { defineComponent as i, computed as m, openBlock as a, createElementBlock as o, normalizeStyle as n, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoMantine",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const q = h, l = m(() => ({
      width: q.width || "1em",
      height: q.height || "1em",
      minWidth: q.width || "1em",
      minHeight: q.height || "1em"
    }));
    return (v, e) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "134",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 134",
      style: n(l.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("g", null, [
          t("path", {
            fill: "#339AF0",
            d: "M133.275 66.982C133.275 29.989 103.44 0 66.638 0 29.834 0 0 29.989 0 66.982s29.834 66.982 66.637 66.982 66.638-29.99 66.638-66.982"
          }),
          t("path", {
            fill: "#FFF",
            d: "M57.567 33.377a5.05 5.05 0 0 1 3.762.947 41 41 0 0 1 6.08 5.563l.456.517h14.373c2.803 0 5.073 2.277 5.073 5.09 0 2.75-2.174 4.989-4.887 5.087l-.186.003h-7.94a40.4 40.4 0 0 1 3.346 16.184 40.4 40.4 0 0 1-3.112 15.634l-.234.549h7.935c2.804 0 5.074 2.278 5.074 5.09 0 2.75-2.175 4.99-4.888 5.087l-.186.004H67.856a41.2 41.2 0 0 1-6.531 6.073 5.06 5.06 0 0 1-7.096-1.055 5.105 5.105 0 0 1-.275-5.654 5 5 0 0 1 1.329-1.467C63.044 85.246 67.5 76.404 67.5 66.767S63.044 48.29 55.283 42.506a5.1 5.1 0 0 1-1.33-1.468 5.12 5.12 0 0 1 .15-5.478l.126-.18a5.1 5.1 0 0 1 3.338-2.003m-.914 24.682a7.5 7.5 0 0 1 2.461 1.695 7.6 7.6 0 0 1 1.617 2.53 7.68 7.68 0 0 1-1.747 8.22 7.47 7.47 0 0 1-5.25 2.162 7.47 7.47 0 0 1-5.251-2.162 7.64 7.64 0 0 1-2.265-5.255 7.7 7.7 0 0 1 .52-2.966 7.6 7.6 0 0 1 1.616-2.529 7.5 7.5 0 0 1 2.461-1.695 7.45 7.45 0 0 1 5.838 0"
          })
        ]),
        t("path", {
          fill: "#000",
          d: "M239.767 104.084q2.445 0 4.535-1.07t2.09-3.108V36.21q0-3.668-2.039-5.146-2.038-1.479-4.586-1.478-2.344 0-4.076.51-1.733.509-3.109 2.038t-3.21 4.484l-12.535 22.828-12.433-22.828q-1.63-2.955-3.108-4.484-1.479-1.53-3.16-2.038-1.68-.51-4.127-.51-2.445 0-4.535 1.478t-2.09 5.146v63.695q0 2.038 2.09 3.108t4.535 1.07q2.548 0 4.586-1.07t2.038-3.108V55.269l11.72 22.012q.917 1.53 2.09 2.09 1.17.56 2.292.56 1.222 0 2.446-.611 1.223-.612 2.14-2.039l11.822-21.197v43.822q0 2.038 2.089 3.108t4.535 1.07m28.252.917q5.298 0 9.019-2.446 3.72-2.445 6.471-5.605v2.956q0 1.732 1.682 2.955 1.68 1.223 4.229 1.223 2.751 0 4.586-1.223 1.834-1.222 1.834-2.955V74.937q0-5.198-2.19-9.681-2.193-4.484-6.982-7.338-4.79-2.853-12.739-2.853-3.567 0-7.337.917t-6.37 2.599-2.598 3.821q0 2.243 1.172 4.383 1.17 2.14 3.312 2.14 1.323 0 2.446-.816 1.12-.815 3.21-1.58 2.089-.764 5.962-.764 3.463 0 5.35 1.427a8.3 8.3 0 0 1 2.751 3.567c.57 1.39.865 2.88.867 4.382v1.325h-4.179q-7.032 0-12.382 1.325t-8.357 4.586q-3.006 3.26-3.006 9.07 0 6.93 3.924 10.242 3.922 3.312 9.325 3.312m5.299-9.783q-2.243 0-3.822-1.325-1.58-1.326-1.58-4.178 0-2.855 1.886-4.23t4.943-1.783a49 49 0 0 1 6.42-.408h1.529v2.14q0 2.445-1.478 4.688t-3.618 3.669-4.28 1.427m69.175 8.866q2.549 0 4.586-1.07t2.038-3.108V75.753q0-5.707-2.394-10.395t-6.37-7.49-8.764-2.803q-5.096 0-8.612 2.395t-5.044 5.35v-3.057q0-1.835-1.682-2.956t-4.127-1.12q-2.854 0-4.688 1.12-1.835 1.122-1.835 2.956v40.153q0 1.529 1.835 2.853 1.835 1.326 4.688 1.325 2.751 0 4.688-1.325t1.936-2.853V75.753q0-2.854 1.223-4.892 1.222-2.038 3.16-3.16 1.935-1.12 3.974-1.12 2.445 0 4.484 1.376 2.037 1.375 3.21 3.414a8.65 8.65 0 0 1 1.172 4.382v24.153q0 2.038 2.14 3.108t4.382 1.07m38.983 0q2.853 0 4.23-1.732 1.375-1.733 1.375-3.873 0-2.039-1.376-3.77-1.375-1.734-4.23-1.733h-3.974q-3.159 0-4.433-1.223t-1.274-4.179V65.256h12.026q1.63 0 2.497-1.478.866-1.477.866-3.312t-.866-3.312q-.867-1.478-2.497-1.478h-12.026V38.148q0-1.835-2.089-2.956t-4.535-1.12q-2.242 0-4.382 1.12-2.14 1.122-2.14 2.956v49.426q0 8.561 4.84 12.535 4.842 3.975 14.013 3.975zm18.962-59.21q2.955 0 5.044-1.988 2.09-1.986 2.09-4.433 0-2.65-2.09-4.535-2.088-1.885-5.044-1.885t-5.096 1.885q-2.14 1.887-2.14 4.535 0 2.446 2.14 4.433 2.14 1.988 5.096 1.988m0 59.21q2.751 0 4.688-1.325 1.935-1.325 1.936-2.853V59.753q0-1.835-1.936-2.956t-4.688-1.12q-2.854 0-4.688 1.12-1.834 1.122-1.834 2.956v40.153q0 1.529 1.834 2.853 1.835 1.326 4.688 1.325m53.624 0q2.547 0 4.586-1.07 2.037-1.07 2.038-3.108V75.753q0-5.707-2.395-10.395t-6.37-7.49q-3.973-2.803-8.764-2.803-5.095 0-8.611 2.395-3.515 2.395-5.045 5.35v-3.057q0-1.835-1.681-2.956t-4.128-1.12q-2.853 0-4.687 1.12-1.835 1.122-1.835 2.956v40.153q0 1.529 1.835 2.853 1.835 1.326 4.687 1.325 2.752 0 4.688-1.325t1.937-2.853V75.753q0-2.854 1.223-4.892 1.222-2.038 3.159-3.16 1.935-1.12 3.974-1.12 2.446 0 4.484 1.376 2.04 1.375 3.21 3.414a8.65 8.65 0 0 1 1.173 4.382v24.153q0 2.038 2.14 3.108t4.382 1.07m39.186.917q5.504 0 9.53-1.376 4.023-1.376 6.216-3.363 2.19-1.987 2.19-3.72 0-1.02-.61-2.394a7.1 7.1 0 0 0-1.733-2.395 3.8 3.8 0 0 0-2.65-1.02q-1.427 0-3.057.918a51 51 0 0 1-3.873 1.936q-2.242 1.02-5.605 1.02-5.3 0-8.611-2.701-3.313-2.7-3.313-7.083v-1.529h20.688q2.344 0 4.535-.458 2.19-.46 3.618-2.344Q512 78.606 512 74.224q0-5.708-2.955-9.987-2.956-4.281-7.695-6.726-4.738-2.446-10.446-2.446-6.216 0-11.26 2.802-5.046 2.802-8.052 7.44-3.006 4.636-3.006 10.14v8.662q0 6.218 3.16 10.956 3.158 4.74 8.713 7.337 5.553 2.6 12.79 2.6m3.363-29.452h-14.879v-2.854q0-2.445 1.274-4.229a8.44 8.44 0 0 1 3.312-2.751 10.1 10.1 0 0 1 4.383-.969q2.445 0 4.484 1.02 2.038 1.02 3.26 2.853 1.224 1.835 1.224 4.178 0 1.631-.663 2.191t-2.395.56"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
