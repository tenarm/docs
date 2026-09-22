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
import "./chunk-4GSDSCQC.js";
import {
  createRailroadEbnfServices
} from "./chunk-PC2L7ATV.js";
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

// node_modules/mermaid/dist/chunks/mermaid.core/ebnfDiagram-PWID7BFC.mjs
var langiumParser = createRailroadEbnfServices().RailroadEbnf.parser.LangiumParser;
var transformChoice = __name((choice) => {
  const alternatives = choice.alternatives.map(transformSequence);
  if (alternatives.length === 1) {
    return alternatives[0];
  }
  return {
    type: "choice",
    alternatives
  };
}, "transformChoice");
var transformSequence = __name((sequence) => {
  const elements = sequence.elements.map(transformTerm);
  if (elements.length === 1) {
    return elements[0];
  }
  return {
    type: "sequence",
    elements
  };
}, "transformSequence");
var transformPrimary = __name((primary) => {
  switch (primary.$type) {
    case "EbnfTerminal":
      return {
        type: "terminal",
        value: primary.value
      };
    case "EbnfNonTerminal":
      return {
        type: "nonterminal",
        name: primary.name
      };
    case "EbnfSpecial":
      return {
        type: "special",
        text: primary.text
      };
    case "EbnfGroup":
      return transformChoice(primary.element);
    case "EbnfOptional":
      return {
        type: "optional",
        element: transformChoice(primary.element)
      };
    case "EbnfRepetition":
      return {
        type: "repetition",
        element: transformChoice(primary.element),
        min: 0,
        max: Infinity
      };
    default:
      throw new Error(`Unsupported EBNF primary node: ${primary.$type}`);
  }
}, "transformPrimary");
var transformPostfix = __name((node, postfix) => {
  switch (postfix.$type) {
    case "EbnfOptionalPostfix":
      return {
        type: "optional",
        element: node
      };
    case "EbnfZeroOrMorePostfix":
      return {
        type: "repetition",
        element: node,
        min: 0,
        max: Infinity
      };
    case "EbnfOneOrMorePostfix":
      return {
        type: "repetition",
        element: node,
        min: 1,
        max: Infinity
      };
    case "EbnfExceptionPostfix":
      return {
        type: "sequence",
        elements: [
          node,
          { type: "terminal", value: "-" },
          transformPrimary(postfix.except)
        ]
      };
    default:
      throw new Error(`Unsupported EBNF postfix node: ${postfix.$type}`);
  }
}, "transformPostfix");
var transformTerm = __name((term) => {
  return term.postfixes.reduce((currentNode, postfix) => {
    return transformPostfix(currentNode, postfix);
  }, transformPrimary(term.base));
}, "transformTerm");
var transformRule = __name((rule) => {
  return {
    name: rule.name,
    definition: transformChoice(rule.definition)
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
    log.debug("[EBNF Parser] Starting Langium parse");
    const result = langiumParser.parse(input);
    if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
      throw new MermaidParseError(result);
    }
    const ast = result.value;
    log.debug("[EBNF Parser] Parsed rules:", ast.rules.length);
    populateDb(ast);
    log.debug("[EBNF Parser] Parse complete");
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
export {
  diagram
};
//# sourceMappingURL=ebnfDiagram-PWID7BFC-DSP3JDUE.js.map
