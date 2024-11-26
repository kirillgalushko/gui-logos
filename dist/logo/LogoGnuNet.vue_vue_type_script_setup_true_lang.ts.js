import { defineComponent as e, computed as h, openBlock as v, createElementBlock as i, normalizeStyle as o, createElementVNode as a } from "vue";
const n = /* @__PURE__ */ e({
  __name: "LogoGnuNet",
  props: {
    width: {},
    height: {}
  },
  setup(q) {
    const l = q, t = h(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (z, m) => (v(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "216",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 216",
      style: o(t.value)
    }, m[0] || (m[0] = [
      a("g", null, [
        a("path", {
          fill: "#000",
          d: "M69.512 187.143q1.629 0 2.904.564 1.275.543 2.527 1.65v-1.754h4.324v19.259q0 2.005-.69 3.571a7.4 7.4 0 0 1-1.942 2.653q-1.233 1.086-2.924 1.65-1.67.585-3.74.585-5.075 0-8.668-3.07l2.047-3.342q2.987 2.569 6.622 2.569 2.234 0 3.593-1.107 1.378-1.086 1.378-3.426v-2.089q-1.337 1.149-2.57 1.713-1.231.543-2.86.543a7.8 7.8 0 0 1-3.49-.794 8.7 8.7 0 0 1-2.777-2.151q-1.149-1.379-1.818-3.196a11.4 11.4 0 0 1-.647-3.864q0-2.047.647-3.865.669-1.837 1.818-3.175a8.5 8.5 0 0 1 2.778-2.13 7.8 7.8 0 0 1 3.488-.794m38.804.46v12.031q0 2.256.857 3.133.855.878 2.485.878 2.382 0 3.906-1.943 1.525-1.942 1.525-5.368v-8.731h4.324v19.467h-4.324v-4.867q-.647 2.507-2.402 3.927t-4.324 1.42q-2.986 0-4.679-1.942-1.692-1.963-1.692-5.974v-12.031zm-14.136-.46q2.987 0 4.68 1.943 1.69 1.942 1.691 5.974v12.01h-4.324v-12.01q0-2.278-.856-3.154-.857-.878-2.486-.878-2.401 0-3.927 1.943-1.504 1.942-1.504 5.368v8.731H83.13v-19.467h4.324v4.887q.648-2.528 2.402-3.927 1.755-1.42 4.324-1.42m-23.603 3.885q-2.444 0-3.968 1.713-1.504 1.713-1.504 4.366 0 1.316.397 2.444a6.3 6.3 0 0 0 1.128 1.921 5.5 5.5 0 0 0 1.733 1.295q1.024.46 2.214.46 1.15 0 2.36-.46 1.233-.48 2.006-1.336v-8.648q-.773-.857-2.005-1.295-1.212-.46-2.36-.46"
        }),
        a("path", {
          fill: "#666",
          stroke: "#666",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-opacity": ".976",
          "stroke-width": ".397",
          d: "M127.896 200.974a3.511 3.511 0 1 1-.001 7.022 3.511 3.511 0 0 1 0-7.022m0-13.794a3.511 3.511 0 1 1-.001 7.022 3.511 3.511 0 0 1 0-7.022"
        }),
        a("path", {
          fill: "#000",
          d: "M164.586 187.143q2.36 0 4.282.815a8.86 8.86 0 0 1 3.28 2.318q1.379 1.525 2.151 3.74.773 2.192.773 4.97h-16.314q.314 2.006 1.9 3.343 1.61 1.316 4.304 1.316 2.11 0 3.655-.648 1.567-.668 2.695-1.754l2.214 3.05q-1.88 1.88-3.99 2.569-2.088.69-4.574.689-2.256 0-4.199-.752-1.942-.752-3.363-2.089a9.9 9.9 0 0 1-2.235-3.217q-.793-1.86-.793-4.136 0-2.214.73-4.073.752-1.88 2.09-3.238a9.4 9.4 0 0 1 3.237-2.13q1.88-.773 4.157-.773m19.797-7.332v7.792h8.167v3.906h-8.167v8.418q0 1.88.919 2.799.918.919 2.423.919 1.838 0 2.736-1.066.899-1.065 1.065-2.569l3.802.857q-.334 3.07-2.423 4.887-2.068 1.797-5.18 1.797-1.713 0-3.134-.564a7.1 7.1 0 0 1-2.423-1.567 7.1 7.1 0 0 1-1.566-2.402q-.543-1.42-.543-3.091v-8.418h-4.408v-3.906h4.408v-7.792zm-38.804 7.332q2.986 0 4.679 1.943 1.692 1.942 1.692 5.974v12.01h-4.324v-12.01q0-2.278-.857-3.154-.856-.878-2.485-.878-2.402 0-3.927 1.943-1.504 1.942-1.504 5.368v8.731h-4.324v-19.467h4.324v4.887q.647-2.528 2.402-3.927 1.754-1.42 4.324-1.42m19.007 3.885q-2.047 0-3.676 1.15-1.63 1.127-1.964 3.007h11.238q-.334-1.88-1.943-3.008-1.608-1.149-3.655-1.149"
        }),
        a("path", {
          fill: "#3498DB",
          "fill-opacity": ".976",
          d: "M214.352 0a3.68 3.68 0 0 1 3.657 4.083l31.453 13.312a3.679 3.679 0 1 1 2.327 5.956l-10.332 26.293a3.679 3.679 0 1 1-5.375 4.837l-41.054 9.221v.041a3.68 3.68 0 0 1-4.423 3.604l-14.262 28.541a3.68 3.68 0 0 1-2.306 6.325l-8.442 25.758a3.679 3.679 0 0 1-2.543 6.337l-.085-.002-14.378 36.158a3.679 3.679 0 1 1-5.671 4.37h-29.75a3.679 3.679 0 1 1-5.656-4.382l-18.959-58.974-.154-.002a3.679 3.679 0 0 1-2.656-6.021l-17.726-37.08-.186.005a3.68 3.68 0 0 1-3.512-2.584l-14.49-.284a3.68 3.68 0 0 1-7.013-2.04L14.6 47.136a3.679 3.679 0 1 1-4.598-5.745L3.801 23.418l-.123.002a3.679 3.679 0 1 1 3.28-5.346L42.306 4.425q-.075-.361-.075-.746a3.679 3.679 0 1 1 2.645 3.532l-9.758 19.515.042.022-3.015 6.03a3.67 3.67 0 0 1 .925 2.908l20.395 11.19a3.676 3.676 0 0 1 6.05.424l13.28-6.316a3.679 3.679 0 1 1 6.404 1.997l26.381 34.183q.291-.048.596-.048a3.679 3.679 0 0 1 1.927 6.814l7.786 20.277q.142-.01.286-.011a3.68 3.68 0 0 1 3.57 2.787l22.103-1.319 8.952-26.976a3.679 3.679 0 0 1 3.067-6.633l15.399-24.884a3.679 3.679 0 1 1 5.82-4.43l39.846-2.657a3.68 3.68 0 0 1 6.329-1.432l7.221-4.612-13.484-26.738A3.679 3.679 0 1 1 214.353 0m-78.86 156.37-22.273 15.561q.066.162.117.33l29.498-.248c.221-.58.585-1.09 1.048-1.487zm-7.595-10.56q-.457-.001-.883-.107l-14.973 24.692q.102.078.197.162l22.391-15.644-5.516-9.309c-.38.134-.79.206-1.216.206m33.26-11.514-13.761 13.207a3.68 3.68 0 0 1-2.622 4.819l2.182 17.385.137.028zm-51.17 3.622.262 31.75q.118.015.235.036l15.023-24.776a3.67 3.67 0 0 1-1.217-3.521l-12.099-4.804a3.68 3.68 0 0 1-2.205 1.315m31.976 13.931-5.082 3.55 8.344 14.082-2.153-17.163a3.7 3.7 0 0 1-1.109-.469m-50.99-38.369 18.007 55.948-.26-31.5a3.68 3.68 0 0 1-2.475-5.644zm47.556 19.987-7.331 7.038c.242.49.378 1.042.378 1.626 0 .996-.396 1.9-1.04 2.562l5.481 9.25 4.753-3.32a3.66 3.66 0 0 1-.518-1.883c0-1.254.627-2.36 1.584-3.025zm7.901-7.587-6.512 6.253 3.5 12.963a3.67 3.67 0 0 1 3.037.969l13.71-13.157a3.66 3.66 0 0 1-.767-2.704zm-30.255-14.326h-.05l-5.02 19.525a3.68 3.68 0 0 1 1.725 4.336l11.959 4.748a3.7 3.7 0 0 1 1.48-1.332l-8.819-27.503a3.7 3.7 0 0 1-1.275.226m19.308 14.08-5.295 13.5 7.839-7.526-1.547-5.728a3.7 3.7 0 0 1-.997-.245M118.57 110.67l8.915 27.805a3.7 3.7 0 0 1 1.13.047l5.452-13.901a3.67 3.67 0 0 1-.89-2.4c0-.6.144-1.167.399-1.667l-14.852-10.024zm-16.597-21.954L91.18 105.2a3.67 3.67 0 0 1 1.077 2.6c0 .96-.367 1.834-.97 2.489l16.309 20.761a3.66 3.66 0 0 1 1.729-.43l.154.003 5.009-19.478a3.68 3.68 0 0 1-1.135-5.629zm36.198 36.942 1.246 4.617 5.205-4.998-4.442-1.48a3.7 3.7 0 0 1-2.01 1.861m18.105-9.227-8.753 8.402 12.27 4.09a3.7 3.7 0 0 1 1.31-1.414zm15.46-14.84-11.346 10.89 2.811 14.472.03.002a3.7 3.7 0 0 1 1.277.294l8.3-25.161a3.7 3.7 0 0 1-1.072-.497m-12.496 11.995-1.934 1.856 4.14 9.496zm-8.005-4.819-11.178 11.641a3.66 3.66 0 0 1 .467 2.091l5.19 1.73 9.843-9.448-2.413-5.537-.093.002a3.66 3.66 0 0 1-1.816-.479m-9.815-1.807-21.584 1.287a3.7 3.7 0 0 1-.362 1.262l14.864 10.03a3.67 3.67 0 0 1 3.217-.931zm8.067-.48-6.251.372-3.958 11.929 10.719-11.163a3.7 3.7 0 0 1-.51-1.139m8.1-1.4-.81.29q.005.097.005.197a3.68 3.68 0 0 1-2.293 3.41l2.099 4.814 2.269-2.178zm12.886-4.617-11.61 4.16 1.144 5.885zm-18.73-19.248-8.078 24.341 5.724-.341a3.68 3.68 0 0 1 2.353-3.088zm-62.64-5.692v28.636q.331.048.641.152l11.203-17.11-6.08-8.975zm15.797 8.724-1.924 2.937 11.59 17.112-7.64-19.897a3.7 3.7 0 0 1-2.026-.152m48.182-2.368-.001 20.008h.023c1.369 0 2.563.749 3.197 1.86l.96-.345zM70.35 67.383l17.064 35.711V74.73l-16.65-7.805a4 4 0 0 1-.414.458m83.546 11.664 4.642 23.897 11.589-4.153a3.66 3.66 0 0 1 .671-2.38l-16.26-17.65q-.305.173-.642.286m18.257-8.491-15.747 4.836.004.164a3.67 3.67 0 0 1-.63 2.06l16.286 17.679a3.6 3.6 0 0 1 .947-.348zm16.04-4.925-14.786 4.54.872 24.723q.312.042.606.132l14.19-28.392a3.7 3.7 0 0 1-.882-1.003M97.856 79.626l4.093 6.042 1.543-2.357a3.7 3.7 0 0 1-.832-1.43zm-5.531-8.166 4.142 6.116 6.05 2.836q.051-.48.216-.916zm-13.1-26.388L86.62 64.35a3.679 3.679 0 0 1 5.29 4.658l11.77 9.085q.296-.275.648-.48zm9.877 26.04v3.01l4.376 2.053-3.573-5.275q-.383.15-.803.212m81.576-23.015-15.367 24.836q.375.37.635.834l16.144-4.958-.724-20.535a3.7 3.7 0 0 1-.688-.177M72.832 66.495l14.58 6.836v-2.365a3.68 3.68 0 0 1-2.484-2.958zm99.8-18.244.712 20.173 14.338-4.403a3.66 3.66 0 0 1 .539-2.213l-14.156-14.171c-.36.257-.77.45-1.21.564zM76.448 44.22q-.212 0-.418-.024L69.536 61.44a3.68 3.68 0 0 1 1.973 3.188l13.562 1.696a3.7 3.7 0 0 1 .546-1.05L77.483 44.07a3.7 3.7 0 0 1-1.036.149m-2.475-.957L49.96 62.965q.13.414.159.862l14.083.277a3.68 3.68 0 0 1 4.127-3.05l6.483-17.217a3.7 3.7 0 0 1-.839-.574m-57.916 2.774L43.471 61.9a3.67 3.67 0 0 1 2.976-1.517c.633 0 1.23.16 1.75.442l5.857-8.78A3.7 3.7 0 0 1 52.8 50.15zm193.545 4.136L196.01 61.75l38.247-8.608zm-34.419-3.808 14.232 14.25a3.66 3.66 0 0 1 1.936-.551c.746 0 1.44.222 2.02.604l12.808-10.907-30.847-3.71a4 4 0 0 1-.149.314M70.464 43.957l-10.45 4.975q.009.116.008.234a3.68 3.68 0 0 1-4.44 3.6l-4.964 7.475zm148.015.782a3.66 3.66 0 0 1-1.886-.52l-5.243 4.464 23.593 2.84-13.96-7.768a3.67 3.67 0 0 1-2.504.984m10.768-9.183-7.201 4.598a3.7 3.7 0 0 1-.12 2.193l14.37 7.996q.12-.157.256-.3zm20.583-13.14-18.795 11.998 7.35 14.572a3.7 3.7 0 0 1 1.604-.017l10.22-26.248a4 4 0 0 1-.379-.304M214.528 42.65l-18.238 1.215-15.53 1.138 27.166 3.268zm-185.11-3.723a3.66 3.66 0 0 1-2.497-.978l-11.026 5.554q.071.334.078.687l36.295 3.956L32.48 37.287a3.68 3.68 0 0 1-3.062 1.64M5.84 22.717 12.008 40.6q.143-.01.288-.01a3.66 3.66 0 0 1 1.955.561l7.861-9.553L5.878 22.69zm17.402 9.502-7.346 8.926 9.958-4.978a3.7 3.7 0 0 1 .197-2.406zM216.882 6.35l13.39 26.547 18.61-11.881a3.7 3.7 0 0 1-.217-1.704L217.189 6.02a4 4 0 0 1-.307.33M41.692 9.799 24.335 30.892l2.752 1.509a3.66 3.66 0 0 1 2.33-.833c.466 0 .911.087 1.321.244l2.172-4.341-.041-.022zm1.329-3.841L7.357 19.73v.01c0 .584-.136 1.136-.378 1.626l16.226 8.904L43.117 6.074z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  n as _
};
