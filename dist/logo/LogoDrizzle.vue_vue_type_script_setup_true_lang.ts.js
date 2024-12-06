import { defineComponent as c, computed as i, openBlock as o, createElementBlock as s, normalizeStyle as r, createStaticVNode as h } from "vue";
const m = /* @__PURE__ */ c({
  __name: "LogoDrizzle",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const a = e, l = i(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (p, t) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "683",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 683",
      style: r(l.value)
    }, t[0] || (t[0] = [
      h('<defs><radialGradient id="drizzle-gui-asset-a" cx="49.99%" cy="50%" r="55.431%" fx="49.99%" fy="50%" gradientTransform="matrix(.82793 0 0 1 .086 0)"><stop offset="0%" stop-color="#5E464D"></stop><stop offset="100%" stop-color="#5E464D"></stop></radialGradient></defs><g><g><path fill="url(#drizzle-gui-asset-a)" d="M504.395 242.484c0-128.505-120.434-233.315-248.938-233.315-128.505 0-248.99 105.147-248.99 233.651C6.467 243.156 0 361.056 0 361.056c1.345 37.971 128.246 72.012 255.922 72.012 128.53 0 256.078-34.04 256.078-72.012-.103 0-7.605-117.253-7.605-118.572"></path><path fill="#FFF" d="M117.356 264.522a288 288 0 0 0-5.561-42.059 294 294 0 0 0-10.916-39.213c-2.328-6.26-4.656-12.416-7.346-18.34s-9.57-23.564-10.605-26.513c-1.035-2.948-2.354-5.82-3.7-8.639a182 182 0 0 0-8.639-16.529l-.44-.75a22.607 22.607 0 0 1 26.384-32.773l2.587.828 2.302.776 4.63 1.475a375 375 0 0 1 8.64 3.31 362 362 0 0 1 16.71 7.32 345 345 0 0 1 31.996 17.176 318.2 318.2 0 0 1 57.708 44.62 273 273 0 0 1 42.562 53.582c.933 1.538-1.2 3.338-1.115 1.068a254.6 254.6 0 0 0-4.458-57.858 229 229 0 0 0-21.055-60.786 243 243 0 0 0-37.067-52.974l-.31-.31A22.659 22.659 0 0 1 219.347.192l1.94.259 1.578.233 3.026.517c1.966.336 3.906.698 5.82 1.112 3.803.776 7.553 1.656 11.252 2.587a292 292 0 0 1 21.857 6.492 325.2 325.2 0 0 1 115.804 68.805 330.5 330.5 0 0 1 57.113 69.606 383 383 0 0 1 6.13 10.384c.07.122-.005.436-.024.037a115.4 115.4 0 0 0-3.08-21.62 123 123 0 0 0-8.25-22.918 142.4 142.4 0 0 0-12.934-21.728 184 184 0 0 0-17.02-20.02 248 248 0 0 0-20.02-18.107 196 196 0 0 1 24.987 11.433 169 169 0 0 1 23.641 15.287 146 146 0 0 1 21.133 19.917 136.6 136.6 0 0 1 17.15 24.547 147.4 147.4 0 0 1 17.227 59.053c.51 5.16.51 10.36 0 15.52a126 126 0 0 1-2.975 15.287c-1.164 5.173-2.38 10.062-3.906 15.054a78 78 0 0 1-2.586 7.502l-1.268 3.724-.828 1.992-1.06 2.406a22.556 22.556 0 0 1-42.085-1.81l-.207-.673a338.2 338.2 0 0 0-32.928-71.366 284 284 0 0 0-49.12-59.88 279 279 0 0 0-75.649-49.896c-.383-.172 2.28 4.138 3.456 6.414a275 275 0 0 1 25.22 72.814 300 300 0 0 1 5.07 76.41 317 317 0 0 1-4.657 37.92c-1.19 6.285-2.586 12.519-4.138 18.778a190 190 0 0 1-2.587 9.416l-1.5 4.76-.802 2.586-1.009 2.845a22.633 22.633 0 0 1-43.3-2.12l-.155-.648a213.2 213.2 0 0 0-22.608-56.75 226.5 226.5 0 0 0-37.868-48.578 273.6 273.6 0 0 0-49.508-38.153 300 300 0 0 0-7.812-4.588c.304.008.875-.65.944-.1.42 3.315.715 6.656 1.048 9.94.62 7.76.957 15.364.853 22.969a249.5 249.5 0 0 1-4.656 44.62c-1.448 7.242-3.181 14.381-5.328 21.39a161 161 0 0 1-7.372 20.668"></path><path fill="#E911BD" d="M117.356 264.522a264 264 0 0 0 0-41.93 287 287 0 0 0-6.13-40.946 257 257 0 0 0-5.38-19.762c-2.07-6.466-4.579-12.752-6.7-19.141a245 245 0 0 0-3.31-9.545c-1.165-3.155-2.588-6.234-3.984-9.26-2.742-6.13-6.001-12.002-9.312-17.822l-.155-.259a8.796 8.796 0 0 1 3.285-12.002 8.7 8.7 0 0 1 6.958-.776c6.027 1.837 11.277 3.829 16.787 6.027s10.735 4.527 15.985 6.984a333 333 0 0 1 30.678 16.503 303.2 303.2 0 0 1 55.277 42.602 257.5 257.5 0 0 1 43.041 55.225 244.6 244.6 0 0 1 17.128 36.44c.042-.072-.552-.683-.521-.569q.465-2.271.905-4.547a286 286 0 0 0 4.19-34.118 267.7 267.7 0 0 0-4.345-68.339 243 243 0 0 0-22.323-64.459 257 257 0 0 0-39.214-56 8.82 8.82 0 0 1 7.76-14.693c4.087.517 7.476 1.164 11.123 1.914s7.14 1.552 10.657 2.587a215 215 0 0 1 20.693 6.182 310.6 310.6 0 0 1 110.734 65.727 316.4 316.4 0 0 1 54.682 66.683A368 368 0 0 1 453 210.966c3.248 7.997-1.134 3.657-.339-.53 1.527-8.33 2.406-16.71 3.182-25.143a123.7 123.7 0 0 0-6.363-50.232 134.5 134.5 0 0 0-26.41-44.516 199.6 199.6 0 0 0-40.61-34.61 195 195 0 0 1 45.137 30.16 140.1 140.1 0 0 1 33.057 44.517 138.7 138.7 0 0 1 12.468 55.173c.142 4.766-.04 9.536-.543 14.278-.544 4.734-1.449 9.415-2.432 14.071a162 162 0 0 1-3.57 13.839q-1.035 3.414-2.25 6.829c-.853 2.328-1.63 4.397-2.82 7.01a8.82 8.82 0 0 1-16.373-.803v-.18a350.4 350.4 0 0 0-34.299-74.315 298.6 298.6 0 0 0-51.732-62.985 292.8 292.8 0 0 0-104.5-62.079 268 268 0 0 0-14.92-4.59c-1.517-.418-4.927-6.806.347.14a275 275 0 0 1 25.152 39.784 261.3 261.3 0 0 1 23.952 69.14 287 287 0 0 1 4.63 72.866 300 300 0 0 1-4.475 36.213 286 286 0 0 1-3.906 17.874 285 285 0 0 1-2.457 8.898c-.88 2.975-1.759 5.794-2.949 9.053a8.846 8.846 0 0 1-16.865-.905v-.207a228 228 0 0 0-24.107-60.424 239.4 239.4 0 0 0-40.093-51.422 287 287 0 0 0-51.94-40.145 313 313 0 0 0-38.42-19.723c-.012.033.024-.135.012-.105a246 246 0 0 1 7.834 18.923 128 128 0 0 1 5.173 21.262c1.268 7.165 2.173 14.356 2.82 21.546a256.6 256.6 0 0 1 0 42.99 241 241 0 0 1-2.587 21.185 181 181 0 0 1-4.449 20.72"></path></g><path fill="#5E464D" d="M291.308 527.661a7.76 7.76 0 0 1 7.035-.258 6.13 6.13 0 0 1 2.587 5.768 14.4 14.4 0 0 1-1.959 7.121l-.395.639-46.947 74.443 43.093-17.848 52.095-21.624a7.76 7.76 0 0 1 7.036-.233 6.1 6.1 0 0 1 2.586 5.743 14.4 14.4 0 0 1-1.958 7.121l-.396.639-46.947 74.469 43.093-17.874a5.56 5.56 0 0 1 5.174 0 4.48 4.48 0 0 1 2.355 4.035 9.97 9.97 0 0 1-2.097 5.898 11.9 11.9 0 0 1-4.558 3.84l-.615.273-52.328 21.676a10.35 10.35 0 0 1-7.527.776 4.915 4.915 0 0 1-3.026-5.173c.06-2.621.82-5.174 2.196-7.396l.39-.597 48.293-75.504-42.42 17.563-53.544 22.193a10.35 10.35 0 0 1-7.553.776 4.915 4.915 0 0 1-3.027-5.173c.06-2.62.821-5.173 2.197-7.395l.39-.598 48.396-75.504-42.421 17.564c-1.62.85-3.554.85-5.173 0a4.42 4.42 0 0 1-2.018-4.19c.04-2.145.745-4.224 2.018-5.95a11.2 11.2 0 0 1 4.55-3.92l.623-.27zm159.26 14.46a39 39 0 0 1 21.468 5.768 37.6 37.6 0 0 1 13.761 15.52 47.5 47.5 0 0 1 4.677 19.746l.005 1.283a7.32 7.32 0 0 1-7.76 7.553h-56.906a27.42 27.42 0 0 0 8.743 18.21c4.718 4.172 11.248 6.365 19.635 6.534l1.058.01a47 47 0 0 0 22.633-5.173 6.8 6.8 0 0 1 3.027-.673 6.73 6.73 0 0 1 4.681 1.837 6.1 6.1 0 0 1 2.018 4.708 7.19 7.19 0 0 1-4.346 6.182 58.8 58.8 0 0 1-12.933 5.535 60 60 0 0 1-14.916 1.882l-1.509-.02q-20.435-.025-31.92-11.691-11.484-11.64-11.484-32.773a54.3 54.3 0 0 1 4.372-21.96 37.2 37.2 0 0 1 13.398-16.27 38.54 38.54 0 0 1 22.297-6.208M98.37 506.063a7.1 7.1 0 0 1 5.354 2.276 7.45 7.45 0 0 1 2.199 5.432v108.846a7.2 7.2 0 0 1-2.199 5.354 7.27 7.27 0 0 1-5.354 2.173 7.76 7.76 0 0 1-5.458-2.173 7.14 7.14 0 0 1-2.25-5.354v-4.397a38.52 38.52 0 0 1-28.583 12.778 39.06 39.06 0 0 1-19.787-5.303 39.9 39.9 0 0 1-15.106-15.52 51.73 51.73 0 0 1 0-47.439 40 40 0 0 1 15.106-15.52 39.3 39.3 0 0 1 19.684-5.173 38.52 38.52 0 0 1 28.686 12.752v-41.024a7.42 7.42 0 0 1 2.25-5.535 7.76 7.76 0 0 1 5.458-2.173m76.384 36.056a7.02 7.02 0 0 1 5.173 2.174 7.48 7.48 0 0 1 2.095 5.38 6.78 6.78 0 0 1-2.173 5.174 7.9 7.9 0 0 1-4.982 1.992h-1.38a28.45 28.45 0 0 0-14.77 3.957 33.9 33.9 0 0 0-11.046 10.864v50.957a7.1 7.1 0 0 1-2.276 5.354 7.53 7.53 0 0 1-4.926 2.165l-.506.008a7.35 7.35 0 0 1-5.458-2.173 7.27 7.27 0 0 1-2.172-5.354v-71.935a7.55 7.55 0 0 1 2.172-5.457 7.22 7.22 0 0 1 5.38-2.277 7.42 7.42 0 0 1 5.433 2.277 7.35 7.35 0 0 1 2.276 5.457v7.191q11.717-15.753 26.332-15.754zm34.96 3.013a7.48 7.48 0 0 1 2.186 5.057l-.002 72.428a7.1 7.1 0 0 1-2.276 5.354 7.53 7.53 0 0 1-5.432 2.173 7.3 7.3 0 0 1-5.38-2.173 7.27 7.27 0 0 1-2.225-5.354v-71.935a7.55 7.55 0 0 1 2.173-5.457 7.2 7.2 0 0 1 5.38-2.277 7.48 7.48 0 0 1 5.576 2.184m177.383-36.903a7.42 7.42 0 0 1 2.167 5.594v108.794a7.1 7.1 0 0 1-2.276 5.354 7.53 7.53 0 0 1-5.432 2.173c-2.034.06-4-.728-5.432-2.173a7.27 7.27 0 0 1-2.173-5.354V513.77a7.53 7.53 0 0 1 2.173-5.432 7.14 7.14 0 0 1 4.873-2.269l.507-.007a7.42 7.42 0 0 1 5.593 2.166M44.206 564.262c-5.018 5.173-7.553 12.675-7.553 22.297s2.586 17.046 7.553 22.297a26.4 26.4 0 0 0 19.969 7.89 31.84 31.84 0 0 0 14.485-3.441 41.7 41.7 0 0 0 12.002-9.157v-35.075a41.2 41.2 0 0 0-12.002-9.13 31.5 31.5 0 0 0-14.485-3.44 26.4 26.4 0 0 0-19.97 7.76m395.135-6.7a22.5 22.5 0 0 0-9.208 8.123 27.2 27.2 0 0 0-4.19 13.735h49.456a27 27 0 0 0-4.268-13.735 23.3 23.3 0 0 0-9.312-8.122 25.48 25.48 0 0 0-22.478 0M204.836 508.52a8.28 8.28 0 0 1 5.68 2.216l.373.37a8.15 8.15 0 0 1 2.587 6.028v.672a8.15 8.15 0 0 1-2.215 5.657l-.372.37a8.28 8.28 0 0 1-6.053 2.587h-.983a8.28 8.28 0 0 1-5.679-2.216l-.373-.371a8.15 8.15 0 0 1-2.587-6.027v-.672a8.15 8.15 0 0 1 2.215-5.657l.372-.37a8.28 8.28 0 0 1 6.052-2.587z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};