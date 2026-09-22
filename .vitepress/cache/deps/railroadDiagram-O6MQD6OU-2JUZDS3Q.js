import {
  db,
  getStyles,
  renderer
} from "./chunk-SUNG47OA.js";
import {
  populateCommonDb
} from "./chunk-UOR73F4S.js";
import {
  MermaidParseError
} from "./chunk-Z5P7UEAM.js";
import "./chunk-6RTVIRIM.js";
import "./chunk-HW5R2CTG.js";
import "./chunk-H6JR2W23.js";
import "./chunk-NV2NCNIR.js";
import "./chunk-YLX7QKHT.js";
import "./chunk-I3K267EP.js";
import "./chunk-WGWCBCPA.js";
import {
  createRailroadServices
} from "./chunk-4GSDSCQC.js";
import "./chunk-PC2L7ATV.js";
import "./chunk-FZLC7AKO.js";
import "./chunk-MYBSTYVM.js";
import "./chunk-RQBZGNYA.js";
import "./chunk-7VBERN3I.js";
import "./chunk-ATQ32DVC.js";
import "./chunk-M5TI5NGF.js";
import "./chunk-I4YHATUN.js";
import "./chunk-CMQ267BK.js";
import "./chunk-5LLSOQOS.js";
import {
  log
} from "./chunk-BAOJE7ZO.js";
import {
  __name
} from "./chunk-JNXZZ3FW.js";
import "./chunk-4TOVOM32.js";
import "./chunk-EQCVQC35.js";

// node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-O6MQD6OU.mjs
var langiumParser = createRailroadServices().Railroad.parser.LangiumParser;
var transformExpression = __name((expr) => {
  switch (expr.$type) {
    case "RailroadTerminalExpr":
      return {
        type: "terminal",
        value: expr.value
      };
    case "RailroadNonTerminalExpr":
      return {
        type: "nonterminal",
        name: expr.name
      };
    case "RailroadSpecialExpr":
      return {
        type: "special",
        text: expr.text
      };
    case "RailroadSequenceExpr": {
      const elements = expr.elements.map(transformExpression);
      return elements.length === 1 ? elements[0] : { type: "sequence", elements };
    }
    case "RailroadChoiceExpr": {
      const alternatives = expr.alternatives.map(transformExpression);
      return alternatives.length === 1 ? alternatives[0] : { type: "choice", alternatives };
    }
    case "RailroadOptionalExpr":
      return {
        type: "optional",
        element: transformExpression(expr.element)
      };
    case "RailroadOneOrMoreExpr":
      return {
        type: "repetition",
        element: transformExpression(expr.element),
        min: 1,
        max: Infinity
      };
    case "RailroadZeroOrMoreExpr":
      return {
        type: "repetition",
        element: transformExpression(expr.element),
        min: 0,
        max: Infinity
      };
    default:
      throw new Error(`Unsupported railroad expression: ${expr.$type}`);
  }
}, "transformExpression");
var transformRule = __name((rule) => {
  return {
    name: rule.name,
    definition: transformExpression(rule.definition)
  };
}, "transformRule");
var populateDb = __name((ast) => {
  populateCommonDb(ast, db);
  if (ast.title) {
    db.setTitle(ast.title);
  }
  ast.rules.map((rule) => db.addRule(transformRule(rule)));
}, "populateDb");
var parser = {
  parse: __name((input) => {
    db.clear();
    log.debug("[Railroad Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new MermaidParseError(result);
    }
    const ast = result.value;
    log.debug("[Railroad Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    log.debug("[Railroad Parser] Parse complete");
  }, "parse"),
  parser: {
    yy: db
  }
};
var diagram = {
  parser,
  db,
  renderer,
  styles: getStyles
};
var railroadDiagram_default = diagram;
export {
  railroadDiagram_default as default,
  diagram
};
//# sourceMappingURL=railroadDiagram-O6MQD6OU-2JUZDS3Q.js.map
