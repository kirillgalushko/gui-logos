import { defineComponent as m, computed as a, openBlock as h, createElementBlock as n, normalizeStyle as p, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ m({
  __name: "LogoAmp",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, c) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "164",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 164",
      style: p(o.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#1D5FE6",
          d: "M81.778 0c45.342.357 81.67 35.451 81.826 82.635.142 43.251-35.188 81.9-83.882 80.952C35.305 162.72-.974 126.542.02 79.302.897 37.58 34.937.432 81.778 0M64.55 94.173c2.909 0 5.818.007 8.726-.003 1.391-.005 2.262.31 1.938 2.053-.713 3.834-1.297 7.691-1.924 11.54q-1.77 10.88-3.529 21.763c-.112.691-.474 1.43.417 1.907 1.516.811 5.663-.221 6.52-1.652Q93 102.574 109.288 75.359c2.255-3.774 1.072-5.814-3.353-5.847q-7.636-.054-15.273 0c-1.58.009-2.655-.2-2.274-2.269 1.136-6.153 2.173-12.325 3.213-18.496q1.22-7.247 2.339-14.51c.111-.723.55-1.617-.626-2.047a6.16 6.16 0 0 0-6.733 2.338 51547 51547 0 0 0-25.063 41.784c-2.52 4.203-5.115 8.362-7.515 12.633-1.8 3.199-.618 5.18 2.912 5.218 2.545.028 5.09.006 7.636.011"
        }),
        t("path", {
          fill: "#1D60E6",
          d: "M374.141 98.005c5.112-13.325 10.048-26.168 14.962-39.017 2.781-7.275 5.559-14.552 8.258-21.855a2.95 2.95 0 0 1 3.265-2.154c7.638.065 15.278.085 22.916-.011 2.177-.026 2.755.775 2.751 2.875q-.087 43.637.002 87.274c.005 2.072-.646 2.63-2.653 2.59-5.91-.12-11.825-.155-17.732.012-2.395.068-3.105-.62-3.09-3.044.11-15.908.07-31.817.073-47.727a4.6 4.6 0 0 0-.573-2.458c-1.681 4.806-3.376 9.607-5.042 14.418-4.176 12.06-8.391 24.11-12.462 36.208-.709 2.102-1.763 2.679-3.889 2.602-4.722-.171-9.467-.246-14.18.024-2.555.147-3.453-.95-4.179-3.076-4.825-14.129-9.733-28.231-14.622-42.339-.905-2.612-1.838-5.214-2.794-7.918-.963.863-.67 1.822-.67 2.686.001 15.909-.023 31.818.083 47.726.016 2.257-.594 2.958-2.887 2.897-5.998-.158-12.003-.104-18.004-.02-1.687.025-2.422-.333-2.418-2.218q.073-43.908.002-87.818c-.003-2.056.801-2.694 2.744-2.68 7.639.059 15.279.07 22.916-.01a3.144 3.144 0 0 1 3.405 2.372q11.21 29.01 22.533 57.974c.293.75.694 1.458 1.285 2.688zm-107.83-62.999c3.544 0 7.094.103 10.632-.04a3.065 3.065 0 0 1 3.384 2.408 18140 18140 0 0 0 17.189 46.888c4.974 13.5 10 26.982 14.984 40.48 1.074 2.903 1.038 2.92-2.078 2.922-6.362.003-12.73-.098-19.088.058-2.032.049-2.84-.68-3.405-2.504-1.256-4.062-2.812-8.031-4.061-12.095a2.904 2.904 0 0 0-3.308-2.384q-14.59.118-29.18-.003a2.773 2.773 0 0 0-3.095 2.29c-1.347 4.225-2.857 8.4-4.24 12.615-.438 1.328-.978 2.09-2.619 2.066a691 691 0 0 0-20.18-.01c-2.122.026-2.175-.694-1.528-2.427 5.153-13.82 10.231-27.667 15.33-41.507 5.723-15.541 11.471-31.074 17.128-46.638a2.84 2.84 0 0 1 3.226-2.147c3.634.091 7.272.028 10.908.028m-.193 58.025c2.907 0 5.817-.062 8.723.024 1.614.048 2.159-.356 1.577-2.03-3.171-9.136-6.28-18.293-9.42-27.44-.186-.54.035-1.464-.897-1.402-.581.04-.701.707-.885 1.24a6947 6947 0 0 1-9.53 27.706c-.52 1.5-.083 1.957 1.439 1.922 2.996-.069 5.995-.02 8.993-.02m174.757-11.823c0-14.538.05-29.077-.052-43.615-.016-2.359.596-3.15 3.037-3.108 12.99.219 25.996-.356 38.977.357 14.915.819 27.026 9.78 28.552 26.208 1.02 10.985-1.632 20.323-10.423 27.388-5.888 4.73-12.942 6.387-20.274 6.845-4.618.289-9.27.178-13.902.055-2.036-.055-2.794.345-2.755 2.63.156 8.994.008 17.992.106 26.986.023 2.118-.565 2.818-2.759 2.762q-8.992-.225-17.993.002c-2.115.053-2.566-.648-2.555-2.623.075-14.629.04-29.257.04-43.887m23.224-16.215c0 3.271.064 6.543-.028 9.811-.044 1.539.456 2.089 2.022 2.033 3.086-.11 6.186.095 9.266-.085 9.585-.561 13.336-4.878 12.47-14.16a9.605 9.605 0 0 0-7.538-8.584c-4.936-1.217-9.947-.403-14.918-.652-1.412-.07-1.286.89-1.281 1.825.015 3.271.005 6.542.007 9.812"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
