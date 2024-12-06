import { defineComponent as i, computed as m, openBlock as a, createElementBlock as o, normalizeStyle as n, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoUdacity",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, l) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "97",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 97",
      style: n(h.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#2015FF",
          d: "M7.418 22.529 31.836 8.342l.015 39.783c-.046 14.745 10.299 27.971 24.596 31.45l.32.078-.204.258c-.324.425-.635.83-1.019 1.211a29 29 0 0 1-4.23 3.456 28.5 28.5 0 0 1-4.843 2.6 28.4 28.4 0 0 1-5.341 1.633c-1.925.386-3.589.56-5.37.56h-.173a29 29 0 0 1-5.744-.595 28.3 28.3 0 0 1-10.16-4.295 28.7 28.7 0 0 1-7.677-7.694 28.3 28.3 0 0 1-2.61-4.824 28 28 0 0 1-1.64-5.32c-.397-1.968-.445-4-.44-5.729L7.313 22.59zm61.438 50.135c1.412-3.97 2.133-7.856 2.145-11.546V19.103L89.512 8.515v39.787c-.005 1.804-.173 3.513-.5 5.078a24.9 24.9 0 0 1-3.827 8.98 25.4 25.4 0 0 1-6.856 6.788 25 25 0 0 1-4.303 2.31c-1.52.653-2.935 1.087-4.734 1.447l-.2.037-.357.062zM0 18.683l.017 42.212c-.059 19.553 15.863 35.51 35.492 35.57h.108a35.7 35.7 0 0 0 17.747-4.714l25.962-14.86c10.764-5.562 17.469-16.508 17.505-28.57l.004-44.087a.36.36 0 0 0-.176-.306L90.299.223a.36.36 0 0 0-.355-.002L63.86 14.885a.35.35 0 0 0-.181.309l.022 45.895a28.4 28.4 0 0 1-.596 5.722 28 28 0 0 1-2.1 6.258l-.065.14-.153-.02a26 26 0 0 1-1.508-.257l-.205-.04c-1.633-.334-4.957-1.276-8.92-3.826a25.4 25.4 0 0 1-6.818-6.833 25 25 0 0 1-3.772-9.002c-.292-1.442-.413-2.937-.406-5V4.2a.36.36 0 0 0-.172-.305L32.634.052a.36.36 0 0 0-.363-.005L.18 18.375a.36.36 0 0 0-.179.308"
        }),
        t("path", {
          fill: "#0B0B0B",
          d: "M345.262 23.046c10.706 0 16.528 5.29 17.51 6.265l.079.078.063.067.704.752-3.895 5.342-1.037-.982c-.05-.048-5.174-4.792-13.292-4.792-10.009 0-17.557 7.787-17.557 18.112 0 10.74 7.605 18.838 17.69 18.838 8.664 0 14.104-5.728 14.158-5.786l.979-1.057 4.233 5.159-.7.794c-.275.311-6.855 7.62-18.736 7.62-14.192 0-24.894-10.963-24.894-25.501 0-14.2 10.617-24.91 24.695-24.91m-160.414.597-.005 29.93c0 11.51-9.157 19.864-21.773 19.864-12.507 0-21.584-8.354-21.584-19.864V23.661h7.307v29.845c0 7.547 6.138 13.238 14.277 13.238 8.111 0 14.464-5.815 14.464-13.238V23.643zm102.464.023.03.073 19.936 49.096h-7.716l-.03-.073-6.105-14.978-20.647 4.203-4.421 10.848h-7.716l19.966-49.169zm-80.435-.024 16.255.025c14.945.001 24.601 9.637 24.601 24.55 0 14.946-9.695 24.604-24.699 24.604H206.76V23.64zm247.608.001v6.687h-16.822l-.005 42.489-7.308.001V30.33h-16.822v-6.687zm20.576 0 .036.05 14.428 20.602 14.323-20.652H512l-.12.18-18.685 28.05V72.82h-7.313V51.877L466.83 23.643zm-80.979.005v49.168h-7.313V23.648zM222.666 30.33h-8.592v35.808l8.592.024c11.144 0 17.797-6.709 17.797-17.945 0-11.2-6.653-17.887-17.797-17.887m61.294 4.232-7.875 19.316 14.543-2.96z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};