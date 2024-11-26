import { defineComponent as t, computed as m, openBlock as V, createElementBlock as i, normalizeStyle as l, createElementVNode as a } from "vue";
const n = /* @__PURE__ */ t({
  __name: "LogoCampaignmonitor",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const c = e, v = m(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (o, h) => (V(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "51",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 51",
      style: l(v.value)
    }, h[0] || (h[0] = [
      a("g", null, [
        a("path", {
          fill: "#002B45",
          d: "M252.242 0c-2.039 0-3.608.438-3.608 2.323v1.844c0 1.885 1.569 2.372 3.608 2.372 2.045 0 3.612-.487 3.612-2.37V2.323c0-1.885-1.567-2.323-3.612-2.323m1.468 10.228h-2.877a1.73 1.73 0 0 0-1.73 1.727V36.68a1.73 1.73 0 0 0 1.73 1.729h2.877a1.73 1.73 0 0 0 1.727-1.73V11.956c0-.954-.773-1.727-1.727-1.727m-84.037-.288c-4.187 0-7.118 1.832-9.315 4.763-1.462-2.931-4.29-4.763-8.268-4.763-4.238 0-6.644 2.303-8.422 4.763v-2.75a1.725 1.725 0 0 0-1.73-1.725h-2.875c-.953 0-1.726.772-1.727 1.725V36.68a1.73 1.73 0 0 0 1.727 1.729h2.876a1.727 1.727 0 0 0 1.727-1.73V22.555c0-4.24 2.408-6.858 5.913-6.858s5.6 2.408 5.6 6.7V36.68a1.73 1.73 0 0 0 1.727 1.729h2.876a1.727 1.727 0 0 0 1.727-1.73V22.555c0-4.45 2.46-6.858 5.913-6.858 3.56 0 5.598 2.358 5.598 6.75l.002 14.23a1.73 1.73 0 0 0 1.725 1.732h2.878a1.73 1.73 0 0 0 1.727-1.73V20.51c0-6.75-3.661-10.57-9.68-10.57M436.78 0c-2.039 0-3.612.438-3.612 2.323v1.844c0 1.885 1.573 2.372 3.612 2.372 2.043 0 3.612-.487 3.612-2.37V2.323c0-1.885-1.57-2.323-3.612-2.323m1.467 10.228h-2.878c-.954 0-1.727.773-1.727 1.727V36.68a1.73 1.73 0 0 0 1.727 1.729h2.878a1.727 1.727 0 0 0 1.723-1.73V11.956c0-.955-.77-1.727-1.723-1.727M89.549 7.344a12.34 12.34 0 0 1 7.536 2.533c.66.508 1.594.445 2.18-.146l2.215-2.215a1.664 1.664 0 0 0-.138-2.475A18.68 18.68 0 0 0 89.551.92C79.125.92 70.64 9.4 70.64 19.83s8.484 18.912 18.91 18.912a18.68 18.68 0 0 0 11.791-4.122 1.656 1.656 0 0 0 .138-2.473l-2.216-2.213a1.664 1.664 0 0 0-2.181-.148 12.34 12.34 0 0 1-7.532 2.53c-6.893-.007-12.478-5.593-12.485-12.485.01-6.89 5.592-12.475 12.483-12.485m190.642 17.06c0 5.286-3.63 8.846-7.763 8.846-4.189 0-7.475-3.402-7.475-8.846V24.3c0-5.335 3.342-8.84 7.475-8.84s7.763 3.556 7.763 8.84zm5.179-14.178h-2.876a1.727 1.727 0 0 0-1.729 1.727v2.773c-2.039-2.877-4.919-4.76-9.419-4.76-6.488 0-12.818 5.128-12.818 14.335v.105c0 9.158 6.277 14.337 12.818 14.337 4.603 0 7.483-2.112 9.42-4.677l.05-.066v2.556c0 4.763-3.677 9.123-8.805 9.123-3.15 0-6.04-1.46-7.484-3.914a1.727 1.727 0 0 0-2.369-.578l-1.216.807a1.733 1.733 0 0 0-.586 2.375c2.379 3.888 6.595 6.474 11.932 6.474 9.16 0 14.809-6.54 14.809-14.39v-24.5c0-.954-.773-1.727-1.727-1.727m133.992-.262c-4.295 0-6.857 2.177-8.635 4.737v-2.75A1.727 1.727 0 0 0 409 10.228h-2.88a1.727 1.727 0 0 0-1.723 1.725V36.68c0 .952.77 1.726 1.723 1.729H409c.951 0 1.727-.776 1.727-1.99V21.532a6.071 6.071 0 1 1 12.14 0v15.147a1.73 1.73 0 0 0 1.724 1.729h2.88a1.73 1.73 0 0 0 1.727-1.73V20.534c0-6.381-3.612-10.567-9.836-10.567m-112.857 0c-4.295 0-6.857 2.177-8.637 4.737v-2.75a1.727 1.727 0 0 0-1.727-1.725h-2.878a1.725 1.725 0 0 0-1.723 1.725V36.68a1.727 1.727 0 0 0 1.723 1.729h2.878c.953 0 1.727-.776 1.727-1.99V21.532a6.071 6.071 0 0 1 12.143 0v15.147c0 .952.77 1.726 1.723 1.729h2.88a1.73 1.73 0 0 0 1.727-1.73V20.534c0-6.381-3.614-10.567-9.836-10.567m204.733.325a2 2 0 0 0-.18-.073 8.3 8.3 0 0 0-2.048-.252 8.3 8.3 0 0 0-7.489 4.713v-2.724c0-.954-.773-1.727-1.727-1.727h-2.88a1.73 1.73 0 0 0-1.727 1.727v24.726a1.733 1.733 0 0 0 1.727 1.727h2.88a1.73 1.73 0 0 0 1.727-1.727V26.214c0-8.45 4.412-9.972 6.956-9.764.5.039.937.108 1.31.157q.16.018.32.026c.592 0 1.086-.42 1.198-.979l.636-4.066a1.22 1.22 0 0 0-.703-1.297M394.801 24.368v.09c0 4.831-3.364 8.74-8.275 8.792-4.912-.053-8.276-3.961-8.276-8.793v-.177c0-4.83 3.364-8.74 8.276-8.792 4.911.054 8.275 3.962 8.275 8.794zm-8.275-14.402c-8.477 0-14.7 6.434-14.7 14.335v.136c0 7.9 6.223 14.336 14.7 14.336s14.701-6.436 14.701-14.336V24.3c0-7.897-6.223-14.333-14.7-14.333m98.952 14.402v.09c0 4.831-3.363 8.74-8.274 8.792-4.913-.053-8.276-3.961-8.276-8.793v-.177c0-4.83 3.363-8.74 8.276-8.792 4.91.054 8.274 3.962 8.274 8.794zm-8.274-14.402c-8.477 0-14.7 6.434-14.7 14.335v.136c0 7.9 6.223 14.336 14.7 14.336s14.7-6.436 14.7-14.336V24.3c0-7.897-6.222-14.333-14.7-14.333M366.82 1.306h-2.887a1.73 1.73 0 0 0-1.382.697l-11.898 16.253-11.896-16.253a1.74 1.74 0 0 0-1.384-.696h-2.887a1.73 1.73 0 0 0-1.727 1.729v33.643c0 .954.772 1.728 1.727 1.729h2.88a1.73 1.73 0 0 0 1.726-1.73V13.344l10.509 13.48.024.03.084.107h.004a1.253 1.253 0 0 0 1.88 0h.003l.085-.107.024-.03 10.508-13.48v23.334a1.73 1.73 0 0 0 1.727 1.729h2.88a1.73 1.73 0 0 0 1.727-1.73V3.037a1.73 1.73 0 0 0-1.727-1.73m-160.881 23.1c0 5.286-3.63 8.846-7.763 8.846-4.188 0-7.475-3.402-7.475-8.846V24.3c0-5.335 3.34-8.84 7.475-8.84 4.133 0 7.763 3.558 7.763 8.84zm-6.393-14.44c-4.5 0-7.378 1.857-9.42 4.737v-2.748a1.725 1.725 0 0 0-1.726-1.727h-2.876a1.725 1.725 0 0 0-1.727 1.727v36.288a1.73 1.73 0 0 0 1.727 1.731h2.876a1.73 1.73 0 0 0 1.727-1.73V34c1.938 2.566 4.816 4.743 9.419 4.743 6.54 0 12.82-5.18 12.82-14.337V24.3c0-9.207-6.332-14.335-12.82-14.335m-74.503 14.44c0 5.286-3.631 8.846-7.765 8.846-4.186 0-7.472-3.402-7.472-8.846V24.3c0-5.335 3.34-8.84 7.472-8.84 4.135 0 7.765 3.558 7.765 8.84zm8.116 9.527a1.22 1.22 0 0 1-1.22-1.22V11.956c0-.954-.773-1.727-1.726-1.727h-2.878c-.954 0-1.727.773-1.727 1.727v2.748c-2.041-2.878-4.919-4.737-9.42-4.737-6.487 0-12.819 5.128-12.819 14.335v.105c0 9.158 6.279 14.337 12.82 14.337 4.74 0 8.084-2.125 9.523-4.743a6.075 6.075 0 0 0 5.84 4.408h1.607a1.22 1.22 0 0 0 1.222-1.22v-2.033a1.22 1.22 0 0 0-1.222-1.222m103.583-9.527c0 5.286-3.632 8.846-7.765 8.846-4.186 0-7.473-3.402-7.473-8.846V24.3c0-5.335 3.34-8.84 7.473-8.84s7.765 3.558 7.765 8.84zm8.116 9.527a1.22 1.22 0 0 1-1.22-1.22V11.956c0-.954-.773-1.727-1.727-1.727h-2.878c-.953 0-1.727.773-1.727 1.727v2.748c-2.04-2.878-4.918-4.737-9.419-4.737-6.487 0-12.82 5.128-12.82 14.335v.105c0 9.158 6.28 14.337 12.82 14.337 4.74 0 8.085-2.125 9.524-4.743a6.07 6.07 0 0 0 5.84 4.408h1.607a1.22 1.22 0 0 0 1.22-1.22v-2.033a1.22 1.22 0 0 0-1.22-1.222m214.511-23.705h-6.012V2.517a1.22 1.22 0 0 0-1.92-.991l-3.009 2.112a3.21 3.21 0 0 0-1.405 2.656v3.934h-2.039c-.954 0-1.728.772-1.731 1.725v1.78a1.73 1.73 0 0 0 1.731 1.728h2.039v15.202c0 6.07 3.292 8.11 7.954 8.11 2.47 0 5.008-.955 5.008-.955s.86-.257.641-1.26c-.073-.343-.503-2.71-.503-2.71-.105-.582-.345-1.038-1.168-.913-.405.065-1.17.185-2.201.185-2.146-.006-3.397-.993-3.397-3.454V15.461h6.012a1.725 1.725 0 0 0 1.727-1.727v-1.78c0-.95-.77-1.726-1.727-1.726"
        }),
        a("path", {
          fill: "#7856FF",
          d: "M50.568 4.69a1.934 1.934 0 0 0-2.698-.474L.345 37.488a1.93 1.93 0 0 0 1.585.825l.002.002h47.051c1.07 0 1.937-.868 1.937-1.938V5.767a1.93 1.93 0 0 0-.352-1.081M3.046 4.214A1.936 1.936 0 0 0 0 5.767v30.667L22.626 17.9 3.048 4.21"
        })
      ], -1)
    ]), 4));
  }
});
export {
  n as _
};
