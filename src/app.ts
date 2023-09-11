/**
 * LitElement Router
 *
 * https://github.com/hamedasemi/lit-element-router
 * https://www.npmjs.com/package/lit-element-router
 */
import { LitElement, html } from "lit-element";
import {
  execute,
  nodes,
  MinimizedFlowGraph
} from "@tokens-studio/graph-engine";

// import Button from "../graphs/Button";

type TypeAppearance = "primary" | "secondary" | "sparkle";
type TypeSize = "s" | "m" | "l";
type TypeEmphasis = "primary" | "secondary" | "ghost";

class App extends LitElement {
  @property()
  appearance: TypeAppearance;
  @property()
  size: TypeSize;
  @property()
  emphasis: TypeEmphasis;

  constructor() {
    super();
    this.appearance = "primary";
    this.size = "s";
    this.emphasis = "primary";
  }

  // async connectedCallback() {
  //   const output = await execute({
  //     graph: Button,
  //     nodes: nodes,
  //     inputValues: {
  //       appearance: this.appearance,
  //       size: this.size,
  //       emphasis: this.emphasis
  //     }
  //   });
  //   console.log("output", output);
  // }

  render() {
    return html` hi `;
  }
}

customElements.define("my-app1", App);
