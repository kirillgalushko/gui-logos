import { defineComponent as c, computed as m, openBlock as i, createElementBlock as o, normalizeStyle as n, createElementVNode as l } from "vue";
const s = /* @__PURE__ */ c({
  __name: "LogoSurvicate",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, t = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, h) => (i(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "96",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 96",
      style: n(t.value)
    }, h[0] || (h[0] = [
      l("g", { fill: "#171D1A" }, [
        l("path", { d: "M23.847 22.3V.01A23.8 23.8 0 0 0 7.01 7 24 24 0 0 0 .006 23.427l-.006.54a24 24 0 0 0 6.991 16.865 23.8 23.8 0 0 0 16.334 7.003l.52.005a23.8 23.8 0 0 0 16.793-7.009 24 24 0 0 0 6.99-16.864V.01a23.8 23.8 0 0 0-16.26 6.44 24 24 0 0 0-7.521 15.85m47.562 25.547h23.847a24.02 24.02 0 0 0-6.41-16.334 23.8 23.8 0 0 0-15.776-7.557h22.186c0-6.34-2.501-12.422-6.957-16.912A23.8 23.8 0 0 0 71.95.006L71.41 0a23.8 23.8 0 0 0-16.792 7.021 24 24 0 0 0-6.973 16.411l-.006.522a24 24 0 0 0 6.979 16.872 23.8 23.8 0 0 0 16.79 7.02m-47.552 0H.011a24 24 0 0 0 6.401 16.33 23.8 23.8 0 0 0 15.767 7.564H.01a24 24 0 0 0 6.957 16.912A23.8 23.8 0 0 0 23.32 95.69l.537.006a23.8 23.8 0 0 0 16.788-7.024 24 24 0 0 0 6.971-16.409l.006-.522a24 24 0 0 0-6.977-16.871 23.8 23.8 0 0 0-16.788-7.023m47.63.007h-.06a23.8 23.8 0 0 0-16.796 7.01 24 24 0 0 0-6.99 16.868v23.956c6.034 0 11.844-2.3 16.258-6.434a24 24 0 0 0 7.527-15.843v22.277A23.8 23.8 0 0 0 88.26 88.7a24 24 0 0 0 7.006-16.426l.006-.54a24 24 0 0 0-6.99-16.868 23.8 23.8 0 0 0-16.796-7.012m74.874 3.532-.85-.268-3.306-1.01-4.58-1.38-.86-.274-.577-.195-.372-.135-.323-.127-.278-.123-.236-.118-.135-.078-.118-.078-.103-.077-.087-.079-.074-.08-.06-.082-.048-.084-.037-.087a1 1 0 0 1-.026-.09l-.017-.095-.008-.099v-.051c0-1.207 1.992-1.666 3.731-1.696h.315l.284.01.31.022q.08.006.162.016l.338.043c1.494.221 3.314.9 3.314 2.679h15.13c0-8.136-7.296-15.29-20.194-15.29-9.699 0-18.51 5.358-18.51 14.216 0 7.6 5.43 11.89 14.33 14.216l6.077 1.533.97.256.647.179.579.17.35.111.475.162.283.107.132.053.245.106.113.054.209.108.186.11c.552.35.77.738.77 1.262 0 1.155-1.472 1.62-2.928 1.79l-.378.037-.372.026-.36.016-.34.007-.163.001c-4.191 0-7.032-1.34-7.032-3.577H117.81c0 8.403 5.163 13.313 13.242 15.198l.68.15c1.945.406 4.05.643 6.284.72l.794.02q.399.006.804.006c10.59 0 20.027-4.649 20.027-14.039l-.003-.332-.01-.337-.018-.342-.026-.346-.035-.35-.022-.177-.05-.355-.06-.359-.035-.18-.078-.363-.09-.365-.05-.183-.112-.368a11.2 11.2 0 0 0-1.214-2.598l-.245-.371c-1.824-2.652-5.18-5.216-11.233-7.146m50.49 2.65c0 8.245-4.229 10.827-8.208 11.214l-.378.03-.376.018-.187.004-.185.002c-4.116 0-6.533-1.833-7.2-8.098l-.062-.664q-.014-.17-.026-.344l-.044-.713a44 44 0 0 1-.055-1.928l-.002-20.085h-15.132v27.005c0 11.891 4.896 19.139 16.289 19.139a24.24 24.24 0 0 0 15.576-6.349l.894 5.455h14.239V33.474H196.86zm47.189-21.472a12.8 12.8 0 0 0-5.111 1.483 12.8 12.8 0 0 0-4.066 3.434l-.625-4.02H220v45.235h15.13V61.708c0-11.087 3.382-14.842 7.922-14.842 1.445.001 2.872.307 4.191.898l1.959-13.323a7.36 7.36 0 0 0-5.163-1.877m35.573 29.879-10.86-28.97h-16.91l18.958 45.24h17.526l18.963-45.24h-16.91zm39.697-33.802a7.15 7.15 0 0 0 3.955-1.21 7.13 7.13 0 0 0 2.623-3.208 7.2 7.2 0 0 0 .406-4.13 7.16 7.16 0 0 0-1.948-3.66 7.1 7.1 0 0 0-3.646-1.957 7.1 7.1 0 0 0-4.112.406 7.13 7.13 0 0 0-3.197 2.632 7.2 7.2 0 0 0-1.2 3.97v.192a7.1 7.1 0 0 0 2.124 4.963 7 7 0 0 0 4.995 2.002m7.577 4.831h-15.13v45.242h15.13zm6.212 22.605a23 23 0 0 0 1.568 8.968 22.9 22.9 0 0 0 4.92 7.647 22.8 22.8 0 0 0 7.499 5.119 22.7 22.7 0 0 0 8.888 1.782 19.94 19.94 0 0 0 12.372-3.755V61.532a13.34 13.34 0 0 1-9.701 3.755 9.14 9.14 0 0 1-6.694-2.58 9.24 9.24 0 0 1 0-13.26 9.15 9.15 0 0 1 6.694-2.58 13.46 13.46 0 0 1 9.7 3.577V36.318a19.94 19.94 0 0 0-12.371-3.755 22.85 22.85 0 0 0-8.872 1.812 22.9 22.9 0 0 0-7.48 5.12 23.08 23.08 0 0 0-6.523 16.582m76.02-16.628c-1.87-3.665-6.765-6.89-13.618-6.89-12.906 0-21.808 10.55-21.808 23.514 0 12.965 8.902 23.514 21.808 23.514 6.859 0 11.746-3.219 13.618-6.89l.894 5.99h14.241v-45.23h-14.241zM398.17 65.287h-.314a9.15 9.15 0 0 1-6.372-2.844 9.23 9.23 0 0 1-2.538-6.522 9.22 9.22 0 0 1 2.76-6.43 9.15 9.15 0 0 1 6.464-2.624c2.43 0 4.762.97 6.482 2.698a9.24 9.24 0 0 1 0 13.024 9.15 9.15 0 0 1-6.482 2.698m55.168-45.235h-15.132v13.412h-7.742V47.77h7.742v30.936h15.132V47.77h10.947V33.464H453.34zm37.027 46.125c-5.423 0-7.542-2.506-8.118-4.571l-.065-.261-.027-.128-.042-.252a5 5 0 0 1-.027-.243H512V56.79c0-13.234-8.547-24.23-22.52-24.23-13.883 0-22.517 10.73-22.517 23.247 0 12.696 8.991 23.783 23.316 23.783 13.174 0 20.196-9.655 21.098-15.736l-13.174-1.34a9.71 9.71 0 0 1-7.832 3.666zm-.886-20.205c4.451 0 7.211 2.145 7.388 4.47h-14.775c.178-2.325 2.936-4.47 7.387-4.47" })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
