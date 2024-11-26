import { defineComponent as l, computed as i, openBlock as o, createElementBlock as c, normalizeStyle as n, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ l({
  __name: "LogoCardano",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const m = h, t = i(() => ({
      width: m.width || "1em",
      height: m.height || "1em",
      minWidth: m.width || "1em",
      minHeight: m.height || "1em"
    }));
    return (v, a) => (o(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "103",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 103",
      style: n(t.value)
    }, a[0] || (a[0] = [
      e("g", { fill: "#0033AD" }, [
        e("path", { d: "M52.378 99.618a3.084 3.084 0 1 1 6.159.352 3.084 3.084 0 0 1-6.159-.352m-25.26-3.337a2.425 2.425 0 1 1 4.053 2.661 2.425 2.425 0 0 1-4.054-2.661m54.18-.95a2.42 2.42 0 0 1 3.257 1.072 2.425 2.425 0 1 1-3.257-1.073M32.973 83.448a3.744 3.744 0 1 1 6.264 4.1 3.744 3.744 0 0 1-6.264-4.1m40.719-1.382a3.74 3.74 0 0 1 5.034 1.639 3.748 3.748 0 1 1-5.14-1.583zM51.434 79.78a4.407 4.407 0 1 1 7.928 3.853 4.407 4.407 0 0 1-7.928-3.853m-38.982-6.822a3.084 3.084 0 1 1-.092.048zm82.566.877a3.084 3.084 0 1 1 5.16 3.381 3.084 3.084 0 0 1-5.16-3.381M43.304 60.156a7.496 7.496 0 0 1 9.83 10.705 7.46 7.46 0 0 1-6.275 3.387 7.496 7.496 0 0 1-3.555-14.092m18.937-.564a7.496 7.496 0 0 1 8.99 3.76 7.5 7.5 0 0 1-3.319 10.052 7.6 7.6 0 0 1-3.375.82 7.496 7.496 0 0 1-2.296-14.632m-36.095 4.163a4.407 4.407 0 1 1 6.68 5.75 4.407 4.407 0 0 1-6.68-5.75m52.08.339a4.407 4.407 0 0 1 6.103-1.266 4.416 4.416 0 0 1 1.266 6.103 4.407 4.407 0 0 1-7.369-4.837m-47.74-13.038a7.496 7.496 0 1 1 7.63 7.925l-.137.001h-.41a7.51 7.51 0 0 1-7.068-7.794l.006-.136zm35.364-.084a7.5 7.5 0 0 1 7.916-7.055 7.4 7.4 0 0 1 5.16 2.482 7.496 7.496 0 0 1-5.434 12.487l-.152.002h-.435a7.5 7.5 0 0 1-7.055-7.916m-53.197.341a3.744 3.744 0 1 1 7.475.425 3.744 3.744 0 0 1-7.475-.425m78.553-.17a3.744 3.744 0 1 1 7.476.428 3.744 3.744 0 0 1-7.476-.427m-88.74-1.995.09.004a2.417 2.417 0 0 1 2.282 2.556 2.42 2.42 0 1 1-2.373-2.56m106.486-.25.1.004a2.425 2.425 0 1 1-.101-.004M46.793 28.671a7.47 7.47 0 0 1 6.701 4.096 7.5 7.5 0 0 1-6.693 10.888 7.47 7.47 0 0 1-6.7-4.125 7.5 7.5 0 0 1 6.692-10.859m17.683-.053a7.496 7.496 0 1 1-.02 14.992 7.496 7.496 0 0 1 .02-14.992m-38.74 5.33a4.407 4.407 0 1 1 7.37 4.833 4.407 4.407 0 0 1-7.37-4.834m54.133-1.635a4.403 4.403 0 0 1 5.918 1.954 4.407 4.407 0 1 1-5.918-1.954m-68.711-6.648a3.084 3.084 0 1 1 5.159 3.382 3.084 3.084 0 0 1-5.16-3.382m84.944-1.249a3.084 3.084 0 1 1 2.774 5.51 3.084 3.084 0 0 1-2.774-5.51m-44.906-3.494a4.407 4.407 0 1 1 8.8.505 4.407 4.407 0 0 1-8.8-.505m-16.928-6.797a3.744 3.744 0 1 1 3.369 6.687 3.744 3.744 0 0 1-3.369-6.687m37.818 1.202a3.748 3.748 0 1 1 6.275 4.1 3.748 3.748 0 0 1-6.275-4.1m-44.252-12.1a2.425 2.425 0 1 1 2.183 4.33 2.425 2.425 0 0 1-2.183-4.33m52.327.714a2.425 2.425 0 1 1 4.059 2.653 2.425 2.425 0 0 1-4.06-2.653M54.54.173a3.084 3.084 0 1 1 2.036 5.823A3.084 3.084 0 0 1 54.54.173M486.883 25.89C502.49 25.89 512 34.164 512 51.658c0 17.495-9.495 25.769-25.117 25.769s-25.043-8.274-25.043-25.769 9.437-25.768 25.043-25.768m-330.62-.016c12.288 0 21.8 6.134 21.99 18.863l.002.388h-9.507c0-7.405-5.083-11.395-12.34-11.395-9.92 0-14.64 5.689-14.74 16.851l-.002.34v1.45c0 11.612 4.653 17.203 14.745 17.203 7.612 0 12.597-3.914 12.696-11.035l.002-.216h9.146c0 12.996-9.433 19.091-21.991 19.091-15.246 0-24.101-7.84-24.101-25.768 0-17.494 8.855-25.772 24.1-25.772m58.82.885 19.394 49.8H224.46l-4.096-10.818h-22.778l-3.99 10.817h-9.585l19.383-49.8zm54.964 0c10.961 0 16.262 5.882 16.262 15.098 0 6.682-2.915 11.584-8.67 13.937l-.186.075 10.65 20.69H277.94l-9.42-19.252h-15.46v19.251h-9.294v-49.8zm48.858 0c15.024 0 24.158 7.84 24.158 24.9 0 16.889-8.96 24.741-23.717 24.897l-.45.002h-19.89v-49.8zm60.183 0 19.382 49.8h-10.019l-4.063-10.818h-22.794L357.6 76.558h-9.58l19.39-49.8zm37.556 0 21.632 29.692.076.113.163.25.174.273.183.293.382.622 1.203 2.004.172.277.05.079.054.078.36-.143-.005-.227-.028-.694-.065-1.478-.03-.794-.01-.347-.004-.295v-.085h-.009V26.759h8.925v49.8h-8.708l-21.778-29.98a25 25 0 0 1-.456-.686l-.148-.234-.146-.233-.213-.35-.272-.455-.13-.221-.302-.524-.597-1.05-.116-.195-.044-.07-.034-.05-.365.218.006.205.091 1.983.025.636.017.54.006.33.002.155v29.98h-8.929v-49.8zm70.24 6.971c-9.916 0-15.422 5.689-15.531 16.863l-.002.34v1.524c0 11.395 5.444 17.13 15.532 17.13 10.06 0 15.497-5.62 15.604-16.79l.002-.34v-1.524c0-11.399-5.513-17.203-15.606-17.203m-167.98.942h-10.596v33.973h10.597c9.343 0 14.486-5.263 14.66-15.937l.004-.325v-1.45c0-10.778-5.139-16.153-14.383-16.26zm-109.777.057h-.36l-.113.328-1.445 4.425-.427 1.289-.382 1.133-.15.435-.287.823-.136.383-.131.359-5.207 13.984 16.912-.004-5.079-13.648-.058-.151-.122-.323-.127-.346-.2-.56-.21-.598-.214-.628-.22-.65-.367-1.108-1.516-4.668-.146-.432zm164.018 0h-.37l-.112.328-1.445 4.425-.427 1.289-.382 1.133-.149.435-.287.823-.137.383-.13.359-5.2 13.984 16.913-.004-5.08-13.648-.118-.31-.124-.334-.197-.544-.207-.586-.286-.832-.293-.87-.294-.888-.467-1.428-1.097-3.386zm-103.827-.057H253.06V49.48h16.257c4.793 0 7.623-2.9 7.623-7.622 0-4.448-2.555-7.125-7.457-7.184z" })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
