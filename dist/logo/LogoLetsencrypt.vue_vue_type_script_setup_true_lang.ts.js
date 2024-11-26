import { defineComponent as s, computed as m, openBlock as l, createElementBlock as a, normalizeStyle as i, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ s({
  __name: "LogoLetsencrypt",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const h = e, t = m(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (o, v) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "199",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 199",
      style: i(t.value)
    }, v[0] || (v[0] = [
      c("g", null, [
        c("g", null, [
          c("path", {
            fill: "#FFA400",
            d: "M223.435 66.68h-14.766v-7.616c0-6.062-4.974-11.036-11.036-11.036s-11.035 4.974-11.035 11.036v7.616h-14.766v-7.616c0-14.3 11.657-25.802 25.801-25.802 14.3 0 25.802 11.658 25.802 25.802z"
          }),
          c("path", {
            fill: "#003A70",
            d: "M229.497 66.68H165.77c-2.798 0-4.974 2.176-4.974 4.974v47.095c0 2.798 2.176 4.974 4.974 4.974h63.727c2.797 0 4.973-2.176 4.973-4.974V71.654c-.155-2.798-2.331-4.974-4.973-4.974m-28.755 30.93v6.373c0 1.71-1.4 3.265-3.264 3.265-1.71 0-3.264-1.4-3.264-3.265v-6.372c-2.02-1.088-3.264-3.264-3.264-5.751 0-3.575 2.953-6.528 6.528-6.528s6.528 2.953 6.528 6.528c.155 2.487-1.244 4.663-3.264 5.75"
          }),
          c("path", {
            fill: "#FFA400",
            d: "M159.242 59.686h-15.388a4.51 4.51 0 0 1-4.508-4.508 4.51 4.51 0 0 1 4.508-4.507h15.388a4.51 4.51 0 0 1 4.507 4.507 4.51 4.51 0 0 1-4.507 4.508m10.88-24.248c-.933 0-2.02-.31-2.798-1.088L155.2 24.403c-1.865-1.555-2.176-4.352-.621-6.373 1.554-1.865 4.352-2.176 6.372-.622l12.124 9.948c1.865 1.554 2.176 4.352.622 6.373-1.088 1.088-2.332 1.71-3.575 1.71m27.511-10.57a4.51 4.51 0 0 1-4.507-4.508V4.818a4.51 4.51 0 0 1 4.507-4.507 4.51 4.51 0 0 1 4.508 4.507v15.543a4.51 4.51 0 0 1-4.508 4.508m27.357 10.569c-1.244 0-2.643-.621-3.42-1.71-1.555-1.865-1.244-4.818.621-6.372l12.124-9.948c1.865-1.554 4.818-1.243 6.373.622 1.554 1.865 1.243 4.818-.622 6.373l-12.124 9.947c-.932.777-1.865 1.088-2.953 1.088m26.268 24.248h-15.543a4.51 4.51 0 0 1-4.508-4.508 4.51 4.51 0 0 1 4.508-4.507h15.543a4.51 4.51 0 0 1 4.507 4.507 4.51 4.51 0 0 1-4.507 4.508"
          })
        ]),
        c("path", {
          fill: "#003A70",
          d: "M.391 123.101V72.897h12.124v39.635h19.429v10.57zm71.654-17.252v2.797H46.399c.155.933.466 1.866.932 2.643.467.777 1.088 1.554 1.865 2.02.778.622 1.71 1.088 2.643 1.4a9.8 9.8 0 0 0 2.953.465c1.865 0 3.42-.31 4.663-1.088a8.56 8.56 0 0 0 3.108-2.642l8.083 5.13c-1.71 2.486-3.886 4.196-6.528 5.595-2.643 1.243-5.907 2.02-9.482 2.02-2.642 0-5.129-.466-7.46-1.243s-4.352-2.02-6.217-3.575c-1.71-1.554-3.11-3.575-4.197-5.906-1.088-2.332-1.554-4.974-1.554-7.927s.466-5.44 1.554-7.772c.932-2.331 2.331-4.352 4.041-5.906s3.73-2.953 6.062-3.73q3.497-1.4 7.46-1.4c2.643 0 4.974.467 7.15 1.244q3.264 1.4 5.596 3.73c1.554 1.71 2.798 3.73 3.575 6.062.932 2.487 1.399 5.13 1.399 8.083m-10.725-4.352c0-1.866-.622-3.42-1.71-4.819s-2.953-2.02-5.284-2.02c-1.088 0-2.176.155-3.109.466-.933.31-1.71.777-2.487 1.399-.777.621-1.243 1.399-1.71 2.176s-.621 1.71-.777 2.642H61.32zm29.377-4.974v13.522q0 2.565.932 3.73c.622.778 1.71 1.244 3.42 1.244.621 0 1.243 0 1.865-.155.621-.156 1.243-.311 1.554-.467l.156 8.55c-.778.31-1.866.465-3.11.776-1.243.156-2.486.311-3.73.311-2.33 0-4.352-.31-5.906-.933-1.554-.621-2.953-1.398-3.886-2.486-.932-1.088-1.71-2.487-2.02-4.042s-.622-3.264-.622-5.129V96.523H73.6v-8.704h5.595v-9.326h11.502v9.326h8.237v8.704zm18.962-24.558c-3.42 0-6.217 2.487-6.217 5.75 0 3.42 2.331 5.596 5.75 5.596.312 0 .623 0 .778-.155-.622 2.487-2.953 4.352-5.285 4.663h-.466v5.44h.622c2.798-.311 5.44-1.555 7.46-3.42 2.643-2.487 4.042-6.217 4.042-10.57 0-4.196-2.798-7.304-6.684-7.304m26.89 26.268a12.5 12.5 0 0 0-3.264-2.332 9.1 9.1 0 0 0-4.042-.933c-1.088 0-2.02.156-2.953.622s-1.399 1.088-1.399 2.176c0 .933.467 1.71 1.555 2.176s2.642.933 4.973 1.4c1.4.31 2.643.62 4.042 1.243 1.399.621 2.487 1.243 3.575 2.02a8.56 8.56 0 0 1 2.642 3.109c.622 1.243.933 2.642.933 4.352q0 3.264-1.4 5.595c-.932 1.555-2.02 2.798-3.574 3.73-1.4.933-3.109 1.555-4.819 2.021-1.865.467-3.575.622-5.44.622q-4.429 0-8.393-1.399c-2.798-.932-5.13-2.331-6.839-4.041l6.528-6.839a14.7 14.7 0 0 0 3.886 2.798c1.554.777 3.109 1.088 4.818 1.088.933 0 1.865-.156 2.798-.622q1.4-.699 1.399-2.331c0-1.088-.622-1.866-1.71-2.487-1.088-.467-2.953-1.088-5.284-1.555-1.244-.31-2.487-.621-3.73-1.088q-1.866-.7-3.265-1.865c-.932-.777-1.71-1.865-2.331-2.953q-.933-1.864-.933-4.197c0-2.176.466-3.885 1.399-5.44.933-1.554 2.02-2.642 3.42-3.575 1.398-.932 2.953-1.71 4.662-2.02 1.71-.467 3.42-.622 5.13-.622 2.642 0 5.284.466 7.771 1.243s4.663 2.021 6.373 3.73zm-136.158 83v-50.205H34.12v10.259H12.048v9.481h20.828v9.637H12.048v10.414h23.315v10.414zm65.592 0v-19.274c0-.932-.155-1.865-.31-2.797a8.2 8.2 0 0 0-.778-2.332 3.75 3.75 0 0 0-1.554-1.554c-.622-.467-1.555-.622-2.643-.622s-2.02.155-2.797.622-1.4.932-2.021 1.71c-.466.777-.933 1.554-1.244 2.486a8.8 8.8 0 0 0-.466 2.798v19.118H42.513v-35.283h11.19v4.819h.156c.467-.777.933-1.555 1.71-2.176.622-.778 1.554-1.4 2.332-1.866.932-.466 1.865-.932 2.953-1.243a12.1 12.1 0 0 1 3.42-.466c2.33 0 4.351.466 6.061 1.243s2.953 2.02 4.041 3.264c1.088 1.4 1.71 2.953 2.176 4.663s.622 3.42.622 5.285v21.76H65.983zm41.656-23.937a7.05 7.05 0 0 0-2.643-2.02c-1.088-.467-2.331-.777-3.42-.777-1.243 0-2.33.31-3.263.777-.933.466-1.866 1.088-2.487 2.02-.622.933-1.244 1.71-1.71 2.798s-.622 2.176-.622 3.42.156 2.331.622 3.42c.31 1.087.933 2.02 1.71 2.797s1.554 1.554 2.642 2.02c1.088.467 2.176.778 3.42.778s2.331-.156 3.574-.622c1.088-.466 2.021-1.088 2.798-2.02l6.373 7.926c-1.399 1.4-3.42 2.487-5.596 3.264-2.331.777-4.818 1.244-7.305 1.244a24.7 24.7 0 0 1-7.771-1.244c-2.487-.777-4.508-2.02-6.373-3.73-1.71-1.554-3.109-3.575-4.197-5.906-1.088-2.332-1.554-4.974-1.554-7.927 0-2.954.466-5.44 1.554-7.772s2.487-4.352 4.197-5.906c1.71-1.555 3.886-2.954 6.373-3.73 2.486-.933 4.973-1.244 7.771-1.244 1.244 0 2.487.155 3.73.31 1.244.312 2.487.622 3.575.933 1.088.467 2.176.933 3.264 1.555.933.621 1.866 1.243 2.487 2.02zm33.884-1.71c-.467-.155-1.089-.31-1.555-.31h-1.399c-1.554 0-2.797.31-3.885.777-1.088.622-1.866 1.243-2.487 2.02-.622.778-1.088 1.71-1.4 2.643-.31.932-.466 1.71-.466 2.487v18.03h-11.657V145.95h11.191v5.13h.156c.932-1.866 2.176-3.265 3.885-4.353 1.71-1.088 3.575-1.71 5.751-1.71h1.4c.466 0 .776.156 1.087.156zm27.355 30.931c-.777 1.866-1.554 3.42-2.331 4.974-.933 1.4-1.865 2.643-3.109 3.73-1.243 1.089-2.642 1.71-4.196 2.332-1.555.466-3.575.777-5.751.777-1.088 0-2.176 0-3.42-.155-1.088-.156-2.176-.311-2.953-.622l1.243-9.792 1.866.466c.621.156 1.243.156 1.865.156 1.865 0 3.108-.467 3.886-1.244.777-.777 1.554-2.02 2.02-3.575l1.088-2.953-14.766-34.661h12.901l7.927 22.693h.155l6.995-22.693h12.279zm58.132-23.003c0 2.486-.311 4.818-1.088 7.15-.778 2.33-1.866 4.196-3.264 6.061-1.4 1.71-3.264 3.109-5.285 4.197-2.02 1.088-4.508 1.554-7.15 1.554-2.176 0-4.197-.466-6.217-1.243-1.865-.933-3.42-2.02-4.508-3.575h-.155v20.983h-11.657v-52.225h11.035v4.352h.156c1.088-1.399 2.642-2.642 4.507-3.73s4.197-1.554 6.84-1.554c2.486 0 4.817.466 6.993 1.554 2.021.932 3.886 2.331 5.285 4.041s2.487 3.73 3.264 5.906c.777 1.71 1.244 4.042 1.244 6.529m-11.347 0q0-1.632-.466-3.264c-.311-1.088-.933-2.021-1.554-2.798a7.05 7.05 0 0 0-2.643-2.02c-1.088-.467-2.176-.778-3.575-.778s-2.487.31-3.575.777c-1.088.466-1.865 1.244-2.642 2.02-.777.778-1.243 1.866-1.71 2.954s-.621 2.176-.621 3.264.155 2.176.621 3.264c.467 1.088.933 2.02 1.71 2.953.777.777 1.554 1.555 2.642 2.02 1.088.467 2.176.778 3.575.778s2.643-.31 3.575-.777c1.088-.466 1.865-1.244 2.643-2.02.621-.778 1.243-1.866 1.554-2.954.31-1.243.466-2.331.466-3.42m29.843-8.86v13.523q0 2.565.933 3.73c.621.777 1.71 1.243 3.419 1.243.622 0 1.243 0 1.865-.155.622-.156 1.244-.311 1.555-.466l.155 8.548c-.777.311-1.865.467-3.109.777-1.243.156-2.487.311-3.73.311-2.331 0-4.352-.31-5.906-.932-1.555-.622-2.954-1.4-3.886-2.487-.933-1.088-1.71-2.487-2.02-4.041-.312-1.555-.623-3.264-.623-5.13v-14.921h-5.595v-8.704h5.595v-9.326h11.347v9.326h8.238v8.704z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
