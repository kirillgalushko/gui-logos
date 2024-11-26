import { defineComponent as l, computed as o, openBlock as h, createElementBlock as s, normalizeStyle as a, createElementVNode as c } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoOpenGraph",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const e = m, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (h(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "209",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 209",
      style: a(i.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#B8C6C9",
          d: "M231.941 142.042c-3.532 0-6.955.772-9.98 2.146-1.325-.806-1.998-1.588-3.998-2.35V52.714L127.75.214 51.988 44.935c-1.286-.753-2.58-1.539-3.907-2.343-.109-13.167-10.843-23.847-24.035-23.847C10.785 18.745 0 29.534 0 42.795c0 13.26 10.79 24.049 24.052 24.049 3.532 0 7.03-.772 10.054-2.146 1.253.762 2.86 1.502 3.86 2.224v89.93l90.084 52.143 76.497-44.746c1.124.662 2.23 1.345 3.385 2.046.11 13.168 10.835 23.847 24.027 23.847 13.261 0 24.041-10.79 24.041-24.05s-10.798-24.05-24.059-24.05"
        }),
        c("g", { fill: "#759BC5" }, [
          c("path", { d: "m127.876 194.069 77.148-45.14v-88.65L127.872 15.36 50.766 60.908v88.543zm115.057-27.779c0 6.048-4.898 10.95-10.937 10.95-6.041 0-10.937-4.902-10.937-10.95s4.896-10.95 10.937-10.95 10.937 4.903 10.937 10.95M13.072 42.784c0-6.047 4.896-10.95 10.937-10.95s10.937 4.903 10.937 10.95-4.897 10.95-10.937 10.95-10.937-4.903-10.937-10.95" })
        ]),
        c("path", {
          fill: "#343532",
          d: "M232.096 172.75a6.57 6.57 0 0 1-6.565-6.566 6.57 6.57 0 0 1 6.565-6.564 6.57 6.57 0 0 1 6.564 6.564 6.57 6.57 0 0 1-6.564 6.565m-89.16 7.354c7.145-10.292 15.613-25.042 20.823-42.76 11.066 2.271 21.394 5.951 32.598 11.542zM89.016 78.04c-1.727 7.203-2.91 14.875-3.178 22.945-10.058.003-19.858.003-30.867.003V65.571c11.01 5.935 22.598 9.936 34.044 12.47M24.033 49.347a6.57 6.57 0 0 1-6.566-6.565 6.57 6.57 0 0 1 6.566-6.564 6.57 6.57 0 0 1 6.564 6.564 6.57 6.57 0 0 1-6.564 6.565m87.425-19.163C104.28 40.208 96.065 54.267 90.934 71.32c-10.346-2.25-20.104-5.769-30.61-10.965zm19.385 97.081c.006-2.691.014-5.424.022-8.189 5.673-1.137 10.176-5.512 11.524-11.106 6.932.006 13.555.01 20.052.011-.264 7.48-1.347 14.677-2.99 21.497-8.787-1.43-18.115-2.104-28.608-2.213m-.012 7c9.867.102 18.592.701 26.78 1.975-6.926 22.825-19.529 40.672-26.634 49.495a5850 5850 0 0 1-.146-51.47m-39.881 4.054c5.14 17.12 13.366 31.122 20.55 41.066l-52.484-30.332c6.425-3.019 17.44-7.492 31.934-10.734m22.536-30.346c1.327 5.503 5.709 9.821 11.253 11.041-.009 2.791-.017 5.552-.023 8.269a177 177 0 0 0-29.545 2.97c-1.7-6.985-2.812-14.432-3.061-22.268 6.964-.002 14.016-.006 21.376-.012m11.225-26.276q.01 4.143.024 8.27c-5.53 1.217-9.903 5.519-11.24 11.003-7.36.006-14.41.01-21.374.013a109 109 0 0 1 2.998-21.758c9.085 1.583 18.711 2.337 29.592 2.472m-.069-53.737c.01 15.356.02 31.085.052 46.735-10.243-.126-19.26-.795-27.733-2.215 7.121-23.304 20.274-40.677 27.678-49.144zm38.968 43.15c-5.194-17.348-13.513-31.767-20.568-41.88l53.776 31.27c-6.64 3.016-18.107 7.486-33.207 10.61m-32.84-43.154-.004-4.699c7.015 8.575 19.693 26.218 26.717 49.006a174 174 0 0 1-26.662 2.427 30724 30724 0 0 1-.052-46.734m-2.833 84.41c-4.343 0-7.877-3.533-7.877-7.877s3.534-7.877 7.877-7.877c4.344 0 7.878 3.534 7.878 7.877 0 4.344-3.534 7.878-7.878 7.878m-3.083 73.846c-7.312-8.343-20.582-25.763-27.801-49.143a168.7 168.7 0 0 1 27.651-2.783 5831 5831 0 0 0 .15 51.926m17.524-85.245c-1.361-5.574-5.856-9.932-11.517-11.065l-.023-8.21a183 183 0 0 0 28.53-2.603c1.694 6.926 2.811 14.254 3.075 21.89-6.5-.002-13.13-.006-20.065-.012m57.711-.01c-10.008.014-21.207.022-31.838.022-.257-8.066-1.556-15.777-3.291-23.043 16.321-3.385 29.125-8.292 35.13-11.488zM54.971 107.99c11.01 0 20.852 0 30.905-.003.244 8.297 1.332 16.153 3.083 23.505-15.62 3.495-26.982 8.378-33.988 11.59zm110.246 22.616c1.678-7.151 2.616-14.721 2.872-22.624 10.629 0 21.993-.008 32.001-.023v35.327c-11.009-6.128-22.947-10.183-34.873-12.68m66.879 20.261c-4.114 0-8.043 1.639-10.797 4.287-4.16-2.61-8.198-4.99-12.201-7.172V57.746L127.722 10.31 51.136 55.554c-4.087-2.288-8.278-4.817-12.746-7.62.58-1.613.936-3.342.936-5.152 0-8.446-6.86-15.316-15.305-15.316S8.71 34.336 8.71 42.782 15.585 58.1 24.03 58.1c4.114 0 7.617-1.638 10.372-4.286 4.082 2.56 8.56 4.9 11.562 7.048v91.023L127.72 199l77.605-45.284a303 303 0 0 1 12.307 7.316 15.2 15.2 0 0 0-.883 5.152c0 8.446 6.886 15.318 15.332 15.318s15.324-6.872 15.324-15.318-6.863-15.317-15.31-15.317"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
