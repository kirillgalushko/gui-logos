import { defineComponent as i, computed as n, openBlock as s, createElementBlock as r, normalizeStyle as p, createStaticVNode as a } from "vue";
const g = /* @__PURE__ */ i({
  __name: "LogoMadge",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, l = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (h, e) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "372",
      version: "1.1",
      viewBox: "0 0 256 372",
      style: p(l.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="madge-gui-asset-a" x1="32.157%" x2="70.686%" y1="46.417%" y2="49.75%"><stop offset="0%" stop-color="#91C5AA"></stop><stop offset="100%" stop-color="#3965AF"></stop></linearGradient><linearGradient id="madge-gui-asset-b" x1="53.539%" x2="53.539%" y1="68.101%" y2="19.969%"><stop offset="0%" stop-color="#803FA5"></stop><stop offset="100%" stop-color="#4B114A"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><polygon fill="#C4BAFF" fill-rule="nonzero" points="129.793852 61.025375 189.270332 283.036907 70.3173724 283.036907"></polygon><polygon fill="#6750E5" fill-opacity=".498" fill-rule="nonzero" points="119.568669 0 254.513595 283.122117 70.0919786 283.122117" transform="matrix(-1 0 0 1 324.606 0)"></polygon><polygon fill="#6750E5" fill-opacity=".498" fill-rule="nonzero" points="56.920184 0 189.488854 283.122117 0 283.122117"></polygon><path fill="url(#madge-gui-asset-a)" fill-rule="nonzero" d="M53.336 351.582H21.4L13.088 369.7H.96l36.915-79.289 35.61 79.289H61.163zM48.746 341l-11.065-25.366L26.085 341zm26.23 28.7v-74.6H90.63q11.258 0 17.78 2.222 7.006 2.175 12.708 7.392 11.547 10.532 11.547 27.686 0 17.2-12.03 27.83-6.04 5.316-12.66 7.393-6.185 2.078-17.539 2.078zm11.258-10.58h5.073q7.585 0 12.61-1.595 5.026-1.69 9.084-5.363 8.31-7.586 8.31-19.762 0-12.273-8.213-19.907-7.392-6.812-21.791-6.812h-5.073zm91.12-28.266h30.826v2.464q0 8.407-1.981 14.882-1.933 5.99-6.523 11.21-10.389 11.691-26.43 11.692-15.654 0-26.816-11.306-11.16-11.354-11.161-27.251 0-16.234 11.355-27.54 11.355-11.355 27.637-11.355 8.745 0 16.331 3.575 7.248 3.577 14.254 11.596l-8.021 7.683q-9.18-12.224-22.37-12.224-11.839 0-19.86 8.165-8.02 8.02-8.02 20.1 0 12.465 8.939 20.535 8.358 7.49 18.119 7.489 8.31 0 14.93-5.605 6.62-5.653 7.392-13.529h-18.602zm78.315-25.173H225.76v17.925h29.04v10.582h-29.04v24.931h29.909v10.582h-41.166v-74.602h41.166z"></path><polygon fill="url(#madge-gui-asset-b)" fill-rule="nonzero" points="26.5414959 263.875684 66.2341711 61.1312002 130.966175 207.693527 198.018086 61.1312002 233.681159 263.875684 204.491286 263.875684 186.293484 150.046311 130.47828 272.547849 76.2504523 149.923994 55.9760039 263.875684"></polygon><path stroke="#A28BCA" stroke-linecap="square" stroke-opacity=".356" stroke-width="2" d="m44.666 243.948 24.739-133.313m59.784 124.38L70.092 107.198m61.846 126.44 60.471-126.44m22.677 139.497L192.41 109.948"></path><path fill="#DCC6FF" fill-rule="nonzero" d="M215.773 243.26a4.123 4.123 0 1 1 0 8.247 4.123 4.123 0 0 1 0-8.247m-171.794 0a4.123 4.123 0 1 1 0 8.247 4.123 4.123 0 0 1 0-8.247m86.584-8.246a4.123 4.123 0 1 1 0 8.246 4.123 4.123 0 0 1 0-8.246M70.092 105.825a4.123 4.123 0 1 1 0 8.246 4.123 4.123 0 0 1 0-8.246m122.317 0a4.123 4.123 0 1 1 0 8.246 4.123 4.123 0 0 1 0-8.246"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
