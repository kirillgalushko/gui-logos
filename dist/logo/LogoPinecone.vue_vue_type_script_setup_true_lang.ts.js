import { defineComponent as c, computed as l, openBlock as i, createElementBlock as o, normalizeStyle as n, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ c({
  __name: "LogoPinecone",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, m) => (i(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "104",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 104",
      style: n(h.value)
    }, m[0] || (m[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "M115.417 23.283h26.49c19.169 0 24.025 11.56 24.025 20.981s-4.965 20.982-24.026 20.982h-16.343v33.048h-10.146zm10.146 8.914v24.134h13.372c8.044 0 16.09-1.884 16.09-12.067s-8.046-12.067-16.09-12.067zm53.632-9.277a6.994 6.994 0 1 1-6.994 7.248 7.03 7.03 0 0 1 6.994-7.248m-4.675 25.15h9.422v50.224h-9.422zm20.33 0h9.53v7.754h.217a17.72 17.72 0 0 1 16.524-9.023c9.748 0 18.12 5.834 18.12 19.17v32.323h-9.423V68.652c0-9.458-5.399-12.937-11.45-12.937-7.937 0-13.988 5.074-13.988 16.742v25.837h-9.53zm61.857 28.627c0 8.77 8.153 14.495 16.959 14.495a17.32 17.32 0 0 0 13.77-7.501l7.248 5.508a26.27 26.27 0 0 1-22.323 10.364c-15.583 0-25.43-10.954-25.825-25.47l-.012-.911A25.366 25.366 0 0 1 272.361 46.8c17.684 0 24.46 13.553 24.46 26.49v3.406zm30.15-7.646c-.218-8.371-4.893-14.495-14.496-14.495-8.212-.056-15.045 6.3-15.582 14.495zm53.232-7.61a15.87 15.87 0 0 0-12.502-5.617c-10.364 0-15.69 8.37-15.69 17.793a16.126 16.126 0 0 0 16.234 17.068 14.93 14.93 0 0 0 12.176-5.617l6.776 6.704a24.7 24.7 0 0 1-19.06 7.718 25.04 25.04 0 0 1-26.273-26.163 25.366 25.366 0 0 1 26.272-26.49 25.8 25.8 0 0 1 19.278 7.936zm35.187-14.64c14.51.24 26.103 12.154 25.944 26.666-.158 14.512-12.009 26.17-26.522 26.093-14.512-.08-26.236-11.865-26.238-26.378a26.38 26.38 0 0 1 25.702-26.376zm0 43.884c10.146 0 16.524-7.248 16.524-17.503s-6.378-17.467-16.524-17.467-16.56 7.248-16.56 17.467c0 9.935 6.028 17.096 15.72 17.486zM409.7 48.069h9.531v7.755a17.76 17.76 0 0 1 16.56-9.023c9.748 0 18.12 5.834 18.12 19.17v32.323h-9.531V68.652c0-9.458-5.4-12.937-11.415-12.937-7.972 0-13.988 5.074-13.988 16.742v25.837H409.7zm61.967 28.628c0 8.77 8.153 14.495 16.959 14.495a17.43 17.43 0 0 0 13.77-7.501l7.248 5.508a26.24 26.24 0 0 1-22.25 10.255c-15.548 0-25.428-10.954-25.825-25.47l-.013-.91a25.366 25.366 0 0 1 25.946-26.382c17.72 0 24.497 13.553 24.497 26.49v3.406zm30.077-7.646c-.218-8.371-4.856-14.495-14.495-14.495-8.22-.074-15.063 6.291-15.582 14.495z"
        }),
        t("path", {
          fill: "#201D1E",
          d: "M39.028 91.41a5.907 5.907 0 1 1 0 11.813 5.907 5.907 0 0 1 0-11.814m32.77-10.778 5.837 1.73L73.002 98a3.044 3.044 0 0 1-3.125 2.172l-1.432-.098-.035.028-14.87-1.043.414-6.074 9.99.678-6.54-9.435 5.003-3.469 6.55 9.447zm-63.53-10.81 6.072.43-.711 9.989 9.418-6.55 3.476 4.998-9.43 6.556 9.626 2.836-1.72 5.84-15.713-4.629a3.044 3.044 0 0 1-2.176-3.135zm39.209-8.506 10.96 13.232-4.94 4.092-6.522-7.875-2.115 12.107-6.318-1.104 2.116-12.127-8.78 5.178-3.257-5.527 14.758-8.694a3.21 3.21 0 0 1 4.098.718m30.664-8.878 5.475-2.979 7.976 14.66a3.116 3.116 0 0 1-.692 3.84l-1.129.976-11.514 10.02-4.09-4.702 7.74-6.735-11.53-2.077 1.106-6.134 11.523 2.076zM13.574 37.112l4.124 4.673-7.635 6.733 11.553 2.017-1.071 6.14L8.98 54.658l4.967 8.98-5.454 3.018L.39 52.005a3.116 3.116 0 0 1 .664-3.844zm39.05-4.822 10.922 13.197-4.94 4.09-6.522-7.878-2.115 12.11-6.318-1.104 2.11-12.08-8.748 5.129-3.243-5.534 13.437-7.878.013-.051.06.007 1.251-.73a3.21 3.21 0 0 1 4.092.722m14.075-6.49 2.39-5.757 15.452 6.413a3.116 3.116 0 0 1 1.875 3.42l-.258 1.43-2.638 15.01-6.139-1.081 1.769-10.048-10.252 5.666-3.013-5.457 10.272-5.67zM37.262 14.456l.265 6.227-10.208.436 7.7 8.799-4.691 4.104-7.712-8.812-1.797 10.06-6.135-1.097 2.94-16.44a3.116 3.116 0 0 1 2.935-2.565l1.444-.064.033-.024zm20.88-13.28 10.874 13.28-4.963 4.063-6.453-7.883-2.177 12.095-6.313-1.136 2.18-12.123-8.81 5.152-3.237-5.538 14.8-8.648a3.21 3.21 0 0 1 4.1.737"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};