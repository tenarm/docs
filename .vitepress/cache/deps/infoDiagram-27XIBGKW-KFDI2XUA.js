import {
  parse
} from "./chunk-Z5P7UEAM.js";
import "./chunk-6RTVIRIM.js";
import "./chunk-HW5R2CTG.js";
import "./chunk-H6JR2W23.js";
import "./chunk-NV2NCNIR.js";
import "./chunk-YLX7QKHT.js";
import "./chunk-I3K267EP.js";
import "./chunk-WGWCBCPA.js";
import "./chunk-4GSDSCQC.js";
import "./chunk-PC2L7ATV.js";
import "./chunk-FZLC7AKO.js";
import "./chunk-MYBSTYVM.js";
import "./chunk-RQBZGNYA.js";
import "./chunk-7VBERN3I.js";
import "./chunk-ATQ32DVC.js";
import "./chunk-M5TI5NGF.js";
import "./chunk-I4YHATUN.js";
import {
  selectSvgElement
} from "./chunk-CMQ267BK.js";
import {
  configureSvgSize
} from "./chunk-5LLSOQOS.js";
import {
  log
} from "./chunk-BAOJE7ZO.js";
import {
  __name
} from "./chunk-JNXZZ3FW.js";
import "./chunk-4TOVOM32.js";
import "./chunk-EQCVQC35.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-27XIBGKW.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.17.2" + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-27XIBGKW-KFDI2XUA.js.map
