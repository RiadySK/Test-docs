import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";
import { c as customElementNames } from "./index.js";
import { c as color } from "./const.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let KaskusButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.text = "World";
    this.count = 0;
    this.variant = "primary";
    this.size = "regular";
  }
  render() {
    return html`
      <button @click=${this._onClick} part="button" class="${this.variant} ${this.size}">
        ${this.text}
      </button>
      <slot></slot>
    `;
  }
  _onClick() {
  }
};
KaskusButton.styles = css`
    :host {
      color: blue;
    }

    button {
      border-radius: 3px;
      width: 100%;
      cursor: pointer;
    }

    .primary {
      color: ${color.white};
      background-color: ${color.primary};
      border: solid 1px ${color.primary};
    }

    .primary:hover {
      background-color: #006094;
    }

    .secondary {
      color: #0082c6;
      background-color: #ffffff;
      border: solid 1px ${color.primary};
    }

    .secondary:hover {
      background-color: #e8f4fd;
    }

    .alternate {
      color: #5c5c5c;
      background-color: ${color.white};
      border: solid 1px ${color.secondaryGrey};
    }

    .alternate:hover {
      background-color: ${color["grey-1"]};
    }

    .disable {
      color: ${color["grey-4"]};
      background-color: ${color["grey-2"]};
      border: solid 1px ${color["grey-2"]};
      cursor: default;
    }

    .disable-alternate {
      color: ${color["grey-4"]};
      background-color: ${color["grey-0"]};
      border: solid 1px ${color["grey-4"]};
      cursor: default;
    }

    .text-button {
      color: ${color.primary};
      background-color: transparent;
      border: none;
    }

    .text-button:hover {
      text-decoration: underline;
    }

    .regular {
      padding: 10px;
      font-size: 14px;
    }

    .small {
      padding: 5px;
      font-size: 12px;
    }

    .large {
      padding: 10px;
      font-size: 18px;
    }
  `;
__decorateClass([
  property()
], KaskusButton.prototype, "text", 2);
__decorateClass([
  property({ type: Number })
], KaskusButton.prototype, "count", 2);
__decorateClass([
  property()
], KaskusButton.prototype, "variant", 2);
__decorateClass([
  property({ type: Number })
], KaskusButton.prototype, "size", 2);
KaskusButton = __decorateClass([
  customElement(customElementNames.kaskusButton)
], KaskusButton);
export { KaskusButton };
