const customElementNames = {
  kaskusButton: "kaskus-button",
  kaskusHeader: "kaskus-header",
  kaskusText: "kaskus-text"
};
function dynamicLoad(loaderList2) {
  var elements = Array.from(document.body.getElementsByTagName("*")).map((elem) => elem.tagName.toLowerCase());
  var uniqueElements = elements.filter(function(item, pos) {
    return elements.indexOf(item) == pos;
  });
  loaderList2.forEach((loader) => {
    if (uniqueElements.includes(loader.customElementName)) {
      loader.importLoader();
    }
  });
}
const loaderList = [
  {
    customElementName: customElementNames.kaskusButton,
    importLoader: () => import("./button.js")
  },
  {
    customElementName: customElementNames.kaskusHeader,
    importLoader: () => import("./header.js")
  },
  {
    customElementName: customElementNames.kaskusText,
    importLoader: () => import("./text.js")
  }
];
dynamicLoad(loaderList);
const reload = () => dynamicLoad(loaderList);
export { customElementNames as c, reload as r };
