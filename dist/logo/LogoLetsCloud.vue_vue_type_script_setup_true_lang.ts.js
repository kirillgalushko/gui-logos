import { defineComponent as l, computed as m, openBlock as o, createElementBlock as c, normalizeStyle as n, createElementVNode as a } from "vue";
const s = /* @__PURE__ */ l({
  __name: "LogoLetsCloud",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (o(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "62",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 62",
      style: n(i.value)
    }, t[0] || (t[0] = [
      a("g", null, [
        a("path", {
          fill: "#47545F",
          d: "M329.964 1.545a30.4 30.4 0 0 1 8.653 5.072c.518.36.932.849 1.202 1.418.22.555.326 1.147.312 1.743.024.97-.386 1.9-1.117 2.536a3.75 3.75 0 0 1-2.572.998 4.18 4.18 0 0 1-2.693-.998 22.4 22.4 0 0 0-6.141-3.894 21.3 21.3 0 0 0-7.764-1.202 20.43 20.43 0 0 0-11.033 3.149 22.84 22.84 0 0 0-8.005 8.581 24.24 24.24 0 0 0-2.957 11.803 24.17 24.17 0 0 0 2.957 11.85 22.84 22.84 0 0 0 8.005 8.534 20.43 20.43 0 0 0 11.033 3.149 23.27 23.27 0 0 0 14.146-5 4.42 4.42 0 0 1 2.536-.926 3.16 3.16 0 0 1 2.404 1.034 3.86 3.86 0 0 1 .961 2.728 3.9 3.9 0 0 1-1.202 2.849 29.24 29.24 0 0 1-18.845 6.694 28.7 28.7 0 0 1-15.048-4.122 29.3 29.3 0 0 1-10.733-11.154 31.65 31.65 0 0 1-3.918-15.624 31.25 31.25 0 0 1 3.918-15.504 29.7 29.7 0 0 1 10.733-11.154A28.5 28.5 0 0 1 319.844.007a29.9 29.9 0 0 1 10.12 1.538M421.9 18.702a3.924 3.924 0 0 1 3.924 3.924v18.918q0 6.225 3.342 9.422a12.33 12.33 0 0 0 8.881 3.197 13.14 13.14 0 0 0 5.89-1.31 10.43 10.43 0 0 0 4.17-3.57 8.76 8.76 0 0 0 1.503-5V22.65a3.77 3.77 0 0 1 1.117-2.848 4.255 4.255 0 0 1 5.65 0v-.024a3.85 3.85 0 0 1 1.08 2.848v34.302a3.88 3.88 0 0 1-1.08 2.812 3.942 3.942 0 0 1-6.767-2.812v-.842a17.1 17.1 0 0 1-5.842 3.81 19.4 19.4 0 0 1-7.21 1.346 19.6 19.6 0 0 1-9.568-2.343 16.25 16.25 0 0 1-6.61-6.73 22.15 22.15 0 0 1-2.404-10.65V22.627a3.924 3.924 0 0 1 3.924-3.924m88.31-14.514v-.048c.655.832.937 1.898.781 2.945l-3.605 34.854a21.45 21.45 0 0 1-3.906 10.54 20.74 20.74 0 0 1-19.327 8.582 21.3 21.3 0 0 1-10.468-3.894 20.2 20.2 0 0 1-6.827-8.413 21.63 21.63 0 0 1-1.646-11.105 22.94 22.94 0 0 1 3.678-10.565 19.4 19.4 0 0 1 7.824-6.899c8.655-4.134 19.034-1.257 24.326 6.743l2.115-20.66a3.77 3.77 0 0 1 1.43-2.657 4.255 4.255 0 0 1 5.625.577M184.092 21.124a17.26 17.26 0 0 1 6.61 7.307 24.1 24.1 0 0 1 2.308 10.817 3.22 3.22 0 0 1-.986 2.332 3.5 3.5 0 0 1-2.32.962h-29.446a13.55 13.55 0 0 0 4.88 8.689 15.62 15.62 0 0 0 14.687 2.404 14.3 14.3 0 0 0 4.062-2.02 4 4 0 0 1 2.536-.841 3.3 3.3 0 0 1 2.308.77 3.37 3.37 0 0 1 1.382 2.62 2.79 2.79 0 0 1-1.202 2.307 21.3 21.3 0 0 1-6.502 3.39 23.5 23.5 0 0 1-18.725-1.419 19.8 19.8 0 0 1-7.812-7.572 21.5 21.5 0 0 1-2.813-10.997 22.75 22.75 0 0 1 2.692-11.021 19.23 19.23 0 0 1 7.38-7.62 21.1 21.1 0 0 1 10.733-2.728 19.34 19.34 0 0 1 10.228 2.62m86.956-1.07a15.3 15.3 0 0 1 6.273 4.459c.598.664.95 1.512.998 2.404a3.08 3.08 0 0 1-1.31 2.404 3.6 3.6 0 0 1-2.152.612 5.25 5.25 0 0 1-3.605-1.466 11.5 11.5 0 0 0-4.075-2.5 16.4 16.4 0 0 0-5.228-.733 12.45 12.45 0 0 0-5.805 1.202 3.68 3.68 0 0 0-2.271 3.341 4.2 4.2 0 0 0 .769 2.572 6.8 6.8 0 0 0 2.92 1.923 37 37 0 0 0 6.214 1.791q8.413 1.695 11.887 4.687a9.76 9.76 0 0 1 3.497 7.765c.02 2.284-.65 4.52-1.923 6.418a12.8 12.8 0 0 1-5.613 4.567 22 22 0 0 1-8.966 1.658 29.6 29.6 0 0 1-9.879-1.61 18.86 18.86 0 0 1-7.211-4.23 3.26 3.26 0 0 1-.998-2.405 3.6 3.6 0 0 1 1.539-3.004 4.66 4.66 0 0 1 2.692-1.082 4.12 4.12 0 0 1 2.92 1.382 11.9 11.9 0 0 0 4.387 2.813 16.3 16.3 0 0 0 6.226 1.201 13.2 13.2 0 0 0 6.803-1.466 4.42 4.42 0 0 0 2.403-3.918 4.64 4.64 0 0 0-2.403-3.966 23.5 23.5 0 0 0-8.077-2.656q-14.747-2.825-14.747-12.163a9.5 9.5 0 0 1 2.235-6.382 13.57 13.57 0 0 1 5.841-3.918 22.5 22.5 0 0 1 7.693-1.31c3.064-.052 6.11.495 8.966 1.61m127.747 1.154a19.65 19.65 0 0 1 7.536 7.572 22.2 22.2 0 0 1 2.728 11.081 22.27 22.27 0 0 1-2.692 10.997 19.37 19.37 0 0 1-7.5 7.572 23.44 23.44 0 0 1-21.958 0 19.23 19.23 0 0 1-7.536-7.572 22.25 22.25 0 0 1-2.692-10.997 22.4 22.4 0 0 1 2.692-11.081 19.3 19.3 0 0 1 7.536-7.572 22 22 0 0 1 10.997-2.728 21.63 21.63 0 0 1 10.89 2.728M112.532.764a3.94 3.94 0 0 1 3.954 3.822V52.89h27.848a4.002 4.002 0 1 1 0 8.005h-31.85a3.74 3.74 0 0 1-2.8-1.202 3.93 3.93 0 0 1-1.118-2.622V4.814a3.87 3.87 0 0 1 1.202-2.848 3.77 3.77 0 0 1 2.764-1.202m241.685.527a3.85 3.85 0 0 1 1.923 3.33v41.995a9.2 9.2 0 0 0 1.082 4.687 3.17 3.17 0 0 0 2.764 1.85h1.923c.953-.03 1.87.367 2.5 1.082a4 4 0 0 1 .962 2.765 3.3 3.3 0 0 1-1.466 2.764 6.2 6.2 0 0 1-3.774 1.082h-.157a10.35 10.35 0 0 1-5.949-1.803 11.77 11.77 0 0 1-4.11-5.072 17.8 17.8 0 0 1-1.467-7.343V4.622a3.846 3.846 0 0 1 5.77-3.33m-147.494 4.1a3.846 3.846 0 0 1 3.846 3.846v11.081h6.538c.96-.043 1.9.289 2.62.926a3.2 3.2 0 0 1 .998 2.404 3.02 3.02 0 0 1-.998 2.307 3.7 3.7 0 0 1-2.62.926h-6.538v19.05a7.88 7.88 0 0 0 1.695 5.156 5.17 5.17 0 0 0 4.158 2.079h2.62a3.03 3.03 0 0 1 2.32 1.07 4 4 0 0 1 .961 2.764 3.46 3.46 0 0 1-1.274 2.764 4.88 4.88 0 0 1-3.269 1.082h-1.382a12.66 12.66 0 0 1-6.875-1.947 13.65 13.65 0 0 1-4.88-5.349 16.2 16.2 0 0 1-1.766-7.62V26.93h-3.534c-.96.043-1.9-.289-2.62-.926a3 3 0 0 1-.997-2.307 3.2 3.2 0 0 1 .997-2.404 3.7 3.7 0 0 1 2.62-.925h3.534V9.237a3.846 3.846 0 0 1 3.846-3.846m274.028 21.285a13.6 13.6 0 0 0-5.456 4.58 14.9 14.9 0 0 0-2.548 7.21 15.1 15.1 0 0 0 1.045 7.537 13.5 13.5 0 0 0 4.363 5.672 13.8 13.8 0 0 0 13.846 1.419l.012-.06a13.2 13.2 0 0 0 5.384-4.664 15.4 15.4 0 0 0 2.512-7.211 15.2 15.2 0 0 0-1.01-7.5 13.58 13.58 0 0 0-18.148-6.983m-99.888.577a12.97 12.97 0 0 0-4.88 5.156 15.6 15.6 0 0 0-1.766 7.464 15.34 15.34 0 0 0 1.766 7.428 13 13 0 0 0 4.88 5.12 14.34 14.34 0 0 0 14.074 0 12.75 12.75 0 0 0 4.808-5.12 15.6 15.6 0 0 0 1.73-7.428 15.84 15.84 0 0 0-1.73-7.464 12.7 12.7 0 0 0-4.808-5.156 14.34 14.34 0 0 0-14.074 0m-216.11.902a13.8 13.8 0 0 0-4.422 8.233h25.612a13.64 13.64 0 0 0-3.846-8.233 11.3 11.3 0 0 0-8.233-3.077 13.3 13.3 0 0 0-9.11 3.077"
        }),
        a("g", null, [
          a("path", {
            fill: "#0DABE3",
            d: "M17.5 48.839h64.624a4.495 4.495 0 1 1 0 8.966H17.5a4.495 4.495 0 1 1 0-8.966m71.788-14.627a4.483 4.483 0 1 1 0 8.966H29.194a4.483 4.483 0 0 1 0-8.966zM13.485 19.537a4.543 4.543 0 1 1 0 9.086 4.543 4.543 0 0 1 0-9.086m69.228.024a4.363 4.363 0 0 1 4.23 4.483 4.363 4.363 0 0 1-4.23 4.483l-56.644.036a4.363 4.363 0 0 1-4.219-4.519 4.363 4.363 0 0 1 4.219-4.483zM63.447 6.232a4.483 4.483 0 0 1 0 8.966h-29.65a4.483 4.483 0 0 1 0-8.966z"
          }),
          a("path", {
            fill: "#80D2EB",
            d: "M29.194 43.178H4.483a4.483 4.483 0 0 1 0-8.966h24.71a4.483 4.483 0 0 0 0 8.966"
          })
        ]),
        a("circle", {
          cx: "232.816",
          cy: "23.239",
          r: "4.543",
          fill: "#00AFE6"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};