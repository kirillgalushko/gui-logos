import { defineComponent as l, computed as q, openBlock as m, createElementBlock as v, normalizeStyle as o, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ l({
  __name: "LogoPrismic",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const a = t, h = q(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (i, c) => (m(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "132",
      version: "1.1",
      viewBox: "0 0 512 132",
      style: o(h.value)
    }, c[0] || (c[0] = [
      e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        e("path", {
          fill: "#212735",
          d: "m120.438 71.34 9.712 9.731a4.13 4.13 0 0 1 1.203 2.91v5.475c0 14.666-1.525 19.987-4.388 25.351a29.87 29.87 0 0 1-12.41 12.44c-5.354 2.863-10.663 4.391-25.3 4.391H63.552a.823.823 0 0 1-.578-1.404v.004l9.709-9.73a4.1 4.1 0 0 1 2.903-1.207h11.88c10.978 0 14.956-1.145 18.971-3.298a22.4 22.4 0 0 0 9.31-9.328c2.11-3.956 3.252-7.879 3.29-18.47V71.922a.823.823 0 0 1 1.401-.581M1.4 63.11l9.716 9.73a4.13 4.13 0 0 1 1.203 2.91v11.907c0 11.002 1.141 14.992 3.291 19.014a22.4 22.4 0 0 0 9.306 9.328c4.015 2.154 7.997 3.298 18.974 3.298h15.702a.823.823 0 0 1 .585 1.404l-9.716 9.73a4.1 4.1 0 0 1-2.9 1.207H42.1c-14.638 0-19.944-1.528-25.297-4.395a29.87 29.87 0 0 1-12.414-12.44C1.565 109.513.043 104.266 0 90.058V63.69a.823.823 0 0 1 1.4-.581M193.51 36.66q5.743 0 10.333 2.13c3.06 1.415 5.668 3.364 7.825 5.832a25.2 25.2 0 0 1 4.9 8.724q1.672 5.021 1.671 10.798a32.2 32.2 0 0 1-1.773 10.798 27.1 27.1 0 0 1-4.955 8.725 22.9 22.9 0 0 1-7.668 5.833 22.6 22.6 0 0 1-9.81 2.128c-2.366 0-4.45-.256-6.26-.765a21 21 0 0 1-4.798-1.963 19.2 19.2 0 0 1-3.547-2.56 18.3 18.3 0 0 1-2.403-2.673.314.314 0 0 0-.314.311v26.415a4.79 4.79 0 0 1-4.79 4.79h-2.936a4.79 4.79 0 0 1-4.79-4.79V42.761a4.79 4.79 0 0 1 4.79-4.79h3.173a3.926 3.926 0 0 1 3.928 3.927v3.715c0 .117.095.208.208.208 1.81-3.2 4.242-5.521 7.306-6.98a22.8 22.8 0 0 1 9.91-2.18M99.917 50.77l9.712 9.74a4.12 4.12 0 0 1 1.2 2.911v31.206c0 9.087-7.35 16.455-16.419 16.455H84.015a.823.823 0 0 1-.593-1.39v-.003l12.652-13.27a8.2 8.2 0 0 0 1.913-2.999 8.2 8.2 0 0 0 .526-2.907V51.35a.823.823 0 0 1 1.404-.581M21.914 83.605h-.004l13.245 12.681a8.2 8.2 0 0 0 2.99 1.913c.9.343 1.88.53 2.904.53h39.075a.823.823 0 0 1 .578 1.404l-9.72 9.734a4.1 4.1 0 0 1-2.9 1.203h-31.14a16.437 16.437 0 0 1-16.417-16.455V84.197a.823.823 0 0 1 1.39-.592M496 36.661c3.203 0 6.417.637 9.654 1.91q1.849.728 4.362 2.599a4.79 4.79 0 0 1 .6 7.156l-1.938 2.022a4.79 4.79 0 0 1-6.414.46 13 13 0 0 0-1.357-.95A9.53 9.53 0 0 0 496 48.44c-2.293 0-4.348.44-6.154 1.31a14.6 14.6 0 0 0-4.644 3.488 14.9 14.9 0 0 0-2.922 5.017 17.7 17.7 0 0 0-.99 5.887c0 2.04.329 4 .99 5.89a14.8 14.8 0 0 0 2.926 5.018 14.6 14.6 0 0 0 4.64 3.492c1.806.87 3.861 1.309 6.154 1.309q2.925-.001 5.426-1.255.51-.257 1.097-.69a4.79 4.79 0 0 1 6.421.676l1.902 2.135a4.563 4.563 0 0 1-1.123 6.984 29.2 29.2 0 0 1-9.756 3.547q-2.296.38-3.967.381c-3.639.02-7.25-.645-10.64-1.964a25.4 25.4 0 0 1-8.663-5.562 26.4 26.4 0 0 1-5.789-8.67q-2.139-5.073-2.139-11.288 0-6.213 2.14-11.288a26.4 26.4 0 0 1 5.788-8.67 25.4 25.4 0 0 1 8.662-5.561A28.9 28.9 0 0 1 496 36.66m-176.443 0q5.008 0 9.913 1.8 1.776.652 3.964 2.413a4.79 4.79 0 0 1 .274 7.222l-1.558 1.466a4.79 4.79 0 0 1-6.12.37c-2.542-1.866-4.806-2.802-6.784-2.802q-2.505.002-4.907 1.31-2.398 1.308-2.399 4.252-.002 2.401 1.982 3.492c1.324.724 2.991 1.346 5.01 1.854q3.026.762 6.52 1.58a25 25 0 0 1 6.523 2.508q3.025 1.688 5.01 4.637c1.32 1.963 1.981 4.65 1.981 8.07q0 4.688-1.93 7.905a15.5 15.5 0 0 1-5.01 5.182 21.7 21.7 0 0 1-6.937 2.834c-2.533.577-5.124.87-7.722.874-3.895 0-7.478-.585-10.75-1.745q-1.92-.684-4.608-2.746a4.79 4.79 0 0 1-.435-7.225l1.298-1.273a4.79 4.79 0 0 1 6.52-.175q1.14 1.004 1.974 1.547 2.766 1.803 6.728 1.802 1.36 0 2.82-.329a9 9 0 0 0 2.713-1.09 6.6 6.6 0 0 0 2.037-1.908q.78-1.145.782-2.67 0-2.73-1.985-4.036-1.981-1.311-5.01-2.129a105 105 0 0 0-6.52-1.524 24.5 24.5 0 0 1-6.52-2.293 13.9 13.9 0 0 1-5.01-4.417q-1.98-2.837-1.981-7.851 0-4.36 1.719-7.58a15.6 15.6 0 0 1 4.541-5.288 19.2 19.2 0 0 1 6.472-3.057 28.4 28.4 0 0 1 7.405-.98m130.958 1.31a4.79 4.79 0 0 1 4.79 4.79v42.767a4.79 4.79 0 0 1-4.79 4.79h-2.936a4.79 4.79 0 0 1-4.79-4.79V42.761a4.79 4.79 0 0 1 4.79-4.79zm-41.22-1.31q5.006 0 8.45 1.745a14.9 14.9 0 0 1 5.583 4.797q2.138 3.054 3.076 7.145.941 4.092.94 8.776v26.4a4.79 4.79 0 0 1-4.79 4.79h-2.94a4.79 4.79 0 0 1-4.791-4.79v-24.87q0-2.398-.417-4.633a11.4 11.4 0 0 0-1.463-3.927 7.54 7.54 0 0 0-2.815-2.67c-1.185-.657-2.713-.983-4.593-.983q-2.918-.001-4.955 1.145a9.8 9.8 0 0 0-3.338 3.053A12.8 12.8 0 0 0 395.36 57a21.7 21.7 0 0 0-.574 4.962v23.567a4.79 4.79 0 0 1-4.79 4.79h-2.94a4.79 4.79 0 0 1-4.79-4.79v-26.4q.002-4.91-1.982-7.8c-1.324-1.923-3.51-2.889-6.574-2.889q-3.13.002-5.27 1.09a10.3 10.3 0 0 0-3.547 2.947 11.9 11.9 0 0 0-2.036 4.253 19.8 19.8 0 0 0-.622 5.017v23.782a4.79 4.79 0 0 1-4.794 4.79h-2.94a4.79 4.79 0 0 1-4.79-4.79V42.761a4.79 4.79 0 0 1 4.79-4.79h2.315a4.79 4.79 0 0 1 4.79 4.79v3.39a20.5 20.5 0 0 1 5.584-6.601q3.701-2.89 9.964-2.889 11.791 0 15.65 9.705 2.714-5.014 6.783-7.36c2.714-1.562 5.946-2.345 9.705-2.345m-150.255 0c.764 0 1.514.073 2.241.22a2.786 2.786 0 0 1 2.246 2.731v7.182a2.614 2.614 0 0 1-3.08 2.574c-.98-.18-1.975-.271-2.972-.274-2.925 0-5.27.563-7.043 1.69-1.773 1.13-3.13 2.416-4.07 3.875a13.2 13.2 0 0 0-1.88 4.359q-.469 2.182-.467 3.273v23.237a4.79 4.79 0 0 1-4.79 4.79h-2.94a4.79 4.79 0 0 1-4.79-4.79V42.761a4.79 4.79 0 0 1 4.79-4.79h3.583a4.145 4.145 0 0 1 4.147 4.142v3.939c0 .113.091.208.208.208q2.085-4.585 5.946-7.09 3.862-2.508 8.87-2.509m22.547 1.31a4.79 4.79 0 0 1 4.79 4.79v42.767a4.79 4.79 0 0 1-4.79 4.79h-2.94a4.79 4.79 0 0 1-4.79-4.79V42.761a4.79 4.79 0 0 1 4.79-4.79zM47.339 20.568a.823.823 0 0 1 .592 1.389L35.275 35.232a8.2 8.2 0 0 0-1.908 2.998 8.2 8.2 0 0 0-.53 2.907v39.162a.823.823 0 0 1-1.401.578l-9.712-9.741a4.12 4.12 0 0 1-1.2-2.907V37.023c0-9.086 7.35-16.454 16.419-16.454zm143.668 27.87c-2.296 0-4.351.44-6.157 1.31a14.6 14.6 0 0 0-4.644 3.488 14.9 14.9 0 0 0-2.922 5.017 17.7 17.7 0 0 0-.987 5.887c0 2.04.329 4 .987 5.89q.992 2.838 2.925 5.018a14.6 14.6 0 0 0 4.644 3.492q2.71 1.307 6.154 1.309c2.297 0 4.348-.44 6.154-1.31a14.6 14.6 0 0 0 4.644-3.491c1.288-1.452 2.26-3.127 2.926-5.017.658-1.89.987-3.85.987-5.888q0-3.055-.987-5.887a14.9 14.9 0 0 0-2.926-5.02 14.6 14.6 0 0 0-4.644-3.489q-2.709-1.31-6.154-1.309M114.555 4.395a29.87 29.87 0 0 1 12.41 12.44c2.824 5.29 4.346 10.537 4.387 24.746l.001 26.366a.822.822 0 0 1-1.404.582v-.004l-9.708-9.726a4.12 4.12 0 0 1-1.203-2.911V43.982c0-11.003-1.145-14.992-3.291-19.015a22.4 22.4 0 0 0-9.31-9.328c-4.011-2.153-7.993-3.298-18.97-3.298H71.76a.823.823 0 0 1-.578-1.404l9.709-9.73A4.1 4.1 0 0 1 83.795 0h5.46c14.637 0 19.946 1.528 25.3 4.395M67.8 0a.823.823 0 0 1 .578 1.404l-9.708 9.73a4.1 4.1 0 0 1-2.904 1.207h-11.88c-10.977 0-14.96 1.145-18.974 3.298a22.4 22.4 0 0 0-9.31 9.328c-2.147 4.023-3.291 8.012-3.291 19.015V59.72a.823.823 0 0 1-1.4.581l-9.705-9.73A4.12 4.12 0 0 1 0 47.661v-5.475C0 27.52 1.525 22.2 4.388 16.836a29.87 29.87 0 0 1 12.41-12.44C22.079 1.567 27.315.042 41.492 0zm26.61 20.569c9.068 0 16.418 7.368 16.418 16.454v10.418a.823.823 0 0 1-1.39.592l-13.237-12.68a8.2 8.2 0 0 0-2.995-1.913 8.2 8.2 0 0 0-2.903-.53H51.229a.823.823 0 0 1-.581-1.405l9.723-9.733a4.1 4.1 0 0 1 2.9-1.203zm185.6-8.229q3.444.001 5.792 2.234 2.347 2.238 2.347 5.617 0 3.384-2.347 5.616-2.348 2.238-5.792 2.238-3.44 0-5.686-2.344a7.7 7.7 0 0 1-2.242-5.51q-.001-3.16 2.242-5.507 2.248-2.343 5.686-2.344m168.932 0q3.444.001 5.792 2.234 2.348 2.238 2.348 5.617 0 3.384-2.348 5.616-2.348 2.238-5.792 2.238t-5.686-2.344a7.7 7.7 0 0 1-2.245-5.51q.001-3.16 2.245-5.507 2.242-2.343 5.686-2.344"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
