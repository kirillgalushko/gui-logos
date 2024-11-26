import { defineComponent as c, computed as v, openBlock as l, createElementBlock as i, normalizeStyle as m, createElementVNode as a } from "vue";
const p = /* @__PURE__ */ c({
  __name: "LogoRome",
  props: {
    width: {},
    height: {}
  },
  setup(q) {
    const t = q, h = v(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (o, e) => (l(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "127",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 127",
      style: m(h.value)
    }, e[0] || (e[0] = [
      a("g", null, [
        a("g", null, [
          a("path", {
            fill: "#27272A",
            d: "M18.768 75.029v50.018H.01V75.03zm106.29 0v50.018H106.3V75.03zM44.156 11.605l4.953 10.33a3.276 3.276 0 0 1-1.869 4.516c-16.628 5.905-28.483 21.168-28.483 39.067v3.275H0v-3.275C0 40.16 16.631 18.52 40.067 9.94a3.28 3.28 0 0 1 4.089 1.664m40.828-1.709c23.443 8.608 40.074 30.258 40.074 55.605v3.275H106.3V65.5c0-17.9-11.842-33.159-28.483-39.067a3.276 3.276 0 0 1-1.869-4.516l4.946-10.358a3.28 3.28 0 0 1 4.089-1.664"
          }),
          a("path", {
            fill: "#FFC905",
            d: "M62.534 29.772c20.716 0 37.514 15.995 37.514 35.729v59.546H81.291V65.501c0-9.869-8.399-17.865-18.757-17.865s-18.757 7.99-18.757 17.865v59.546H25.02V65.501c0-19.734 16.798-35.73 37.514-35.73M74.434.806a3.282 3.282 0 0 1 2.522 4.661l-.9 1.883-6.964 14.589a3.3 3.3 0 0 1-3.168 1.858 61 61 0 0 0-6.78 0 3.3 3.3 0 0 1-3.164-1.858L49.012 7.35l-.9-1.883A3.282 3.282 0 0 1 50.634.806a88.3 88.3 0 0 1 23.8 0"
          })
        ]),
        a("path", {
          fill: "#27272A",
          d: "M484.58 59.22q2.09-.003 4.03.185 10.017.941 16.03 6.745 6.325 6.11 7.068 16.569.1 1.403.101 2.9.008.665-.1 1.32c-.03.4-.211.773-.508 1.042q-.621.428-3.4.428h-39.144q-.486 1.093-.486 4.012 0 11.91 5.165 18.84 5.164 6.93 14.04 6.93a24.15 24.15 0 0 0 10.15-2.31 39 39 0 0 0 9.788-6.565l3.4 4.255q-7.885 8.923-18.544 11.487a38.5 38.5 0 0 1-9.049 1.043 40.3 40.3 0 0 1-9.333-1.043 33 33 0 0 1-4.342-1.337 29.77 29.77 0 0 1-17.323-16.958q-2.43-5.954-2.431-13.248a36.2 36.2 0 0 1 2.553-13.8 31.6 31.6 0 0 1 7.232-10.828 33.5 33.5 0 0 1 11.063-7.114 35.8 35.8 0 0 1 10.045-2.368q1.904-.18 3.995-.185m-206.829.018q1.969-.002 3.88.184a37.5 37.5 0 0 1 9.917 2.31 36.9 36.9 0 0 1 11.428 6.867 32.3 32.3 0 0 1 7.795 10.375 30.4 30.4 0 0 1 2.855 13.203 32.15 32.15 0 0 1-2.855 13.613 33.1 33.1 0 0 1-7.78 10.699 36.6 36.6 0 0 1-11.429 7.051 36 36 0 0 1-4.832 1.518 39.15 39.15 0 0 1-17.885 0 36 36 0 0 1-4.696-1.459 35.1 35.1 0 0 1-11.303-6.989 32.5 32.5 0 0 1-7.642-10.768 33.1 33.1 0 0 1-2.779-13.675 31.3 31.3 0 0 1 2.78-13.252 31.7 31.7 0 0 1 7.641-10.455 35.4 35.4 0 0 1 11.303-6.808 37.6 37.6 0 0 1 9.75-2.23 40 40 0 0 1 3.852-.184m-91.138-27.976q17.663-.003 27.284 6.21 9.622 6.215 9.622 17.299c0 1.55-.117 3.1-.347 4.634a23.9 23.9 0 0 1-5.513 12.296q-5.85 6.825-18.635 9.132l28.257 32.401c1.893 2.23 4.268 4 6.947 5.176a20.1 20.1 0 0 0 8.177 1.764v4.863h-28.869l-30.22-37.028q-3.042-3.654-5.297-4.932t-4.203-1.279v23.912c-.048 2.47.156 4.94.611 7.368q.605 2.862 2.432 4.446 1.823 1.587 5.297 2.133 3.474.545 9.32.545v4.863h-48.373v-4.863a31.5 31.5 0 0 0 6.516-.545q2.497-.56 3.898-2.085 1.4-1.524 1.886-4.265c.363-2.316.527-4.659.49-7.003V50.033a52 52 0 0 0-.348-6.881q-.368-2.619-1.584-4.14a6.13 6.13 0 0 0-3.473-2.085 36 36 0 0 0-6.023-.802v-4.863Zm154.294 28.153 1.46 10.573h.729q5.116-5.69 10.281-8.12 5.166-2.433 11.974-2.432 8.02 0 13.251 2.779a18.47 18.47 0 0 1 7.899 8.023h.486a30.9 30.9 0 0 1 10.456-7.96 30.2 30.2 0 0 1 13.008-2.856q7.29.007 12.703 1.82 5.411 1.814 8.447 5.21 2.436 2.796 3.589 7.295 1.152 4.499 1.153 12.522v18.701q.01 4.981.305 7.903t1.39 4.498a5.1 5.1 0 0 0 3.16 2.084c1.886.386 3.8.622 5.722.705v4.863h-38.414v-4.863a28 28 0 0 0 5.773-.667 5.77 5.77 0 0 0 3.282-2.066q1.157-1.518 1.46-4.196a68 68 0 0 0 .305-7.295V90.013a66.5 66.5 0 0 0-.73-10.698q-.729-4.374-2.31-7.051a9.1 9.1 0 0 0-4.195-3.821q-2.613-1.157-6.381-1.157-4.252.021-6.99 2.084a16.85 16.85 0 0 0-4.56 5.35Q391 80.435 391 88.943v16.02q0 4.98.242 7.902.243 2.921 1.338 4.498a5.12 5.12 0 0 0 3.223 2.084c1.947.395 3.92.639 5.905.73v4.863h-38.535v-4.863c1.94-.096 3.87-.34 5.773-.73a5.62 5.62 0 0 0 3.282-1.945q1.157-1.455 1.46-4.193.345-3.67.305-7.357V90.031a66.5 66.5 0 0 0-.73-10.699q-.733-4.373-2.372-7.051a9.38 9.38 0 0 0-4.314-3.821q-2.672-1.157-6.687-1.157t-6.624 1.946a15 15 0 0 0-4.318 5.227 26 26 0 0 0-2.431 6.687 35.3 35.3 0 0 0-.851 7.78v16.616q.014 4.707.243 7.463.243 2.918 1.337 4.44a5.18 5.18 0 0 0 3.161 2.004c1.883.393 3.793.637 5.714.729v4.863h-38.43v-4.863a40 40 0 0 0 5.835-.73q2.17-.489 3.282-1.945 1.111-1.455 1.459-4.192c.276-2.442.398-4.9.365-7.357V90.899q-.004-6.93-.184-11.55t-.667-6.321a8.7 8.7 0 0 0-.914-2.49 3.8 3.8 0 0 0-1.702-1.46 9.2 9.2 0 0 0-2.977-.73q-1.823-.183-4.741-.183V64.03zm-63.142 6.874a12.43 12.43 0 0 0-6.686 1.886 16.16 16.16 0 0 0-5.166 5.287 27.5 27.5 0 0 0-3.282 8.187 45.5 45.5 0 0 0-1.153 10.64 47.4 47.4 0 0 0 1.153 10.938 27.4 27.4 0 0 0 3.282 8.267 16.4 16.4 0 0 0 5.107 5.29 12.34 12.34 0 0 0 6.745 1.89c2.42.026 4.8-.626 6.867-1.883a16.3 16.3 0 0 0 5.29-5.35 28.5 28.5 0 0 0 3.405-8.336 44.7 44.7 0 0 0 1.215-10.8 42.7 42.7 0 0 0-1.215-10.576 28.6 28.6 0 0 0-3.404-8.205 16.3 16.3 0 0 0-5.29-5.349 12.96 12.96 0 0 0-6.868-1.886m206.649-.019-.313.002q-5.22.003-9.3 4.317-4.077 4.314-5.286 11.001h17.625q4.863-.003 6.252-.549c.931-.365 1.4-1.233 1.39-2.612q-.004-5.346-3.04-8.753a9.83 9.83 0 0 0-7.641-3.404Zm-297.801-28.2h-10.591q-2.192 0-2.192 2.084v34.35h7.92q11.434 0 17.107-4.464 4.484-3.517 5.415-10.65c.172-1.334.255-2.68.25-4.025q-.003-7.798-4.752-12.547-4.748-4.748-13.157-4.748"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
