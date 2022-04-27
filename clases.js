class DomElement {
  constructor(type, attrs, children) {
    this.type = type;
    this.attrs = attrs;
    this.children = children;
  }
  draw = () => {
    let isCorrespond;
    if (this.type === "div") {
      let Divelemnent = new DivElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "ul") {
      let Divelemnent = new UlElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "li") {
      let Divelemnent = new LiElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "span") {
      let Divelemnent = new SpanElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "form") {
      let Divelemnent = new FormElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "br") {
      let Divelemnent = new BrElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "label") {
      let Divelemnent = new LabelElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    } else if (this.type === "input") {
      let Divelemnent = new InputElement(this.type, this.attrs);
      isCorrespond = Divelemnent.isCorrespond();
    }
    if (isCorrespond) {
      let element = document.createElement(this.type);
      if (
        !Array.isArray(this.children) &&
        typeof this.children === "object" &&
        this.children !== null
      ) {
        element.appendChild(this.children.draw());
      } else if (Array.isArray(this.children)) {
        this.children.forEach((child) => element.appendChild(child.draw()));
      } else if (typeof this.children === "string") {
        element.appendChild(document.createTextNode(this.children));
      }

      if (Object.keys(this.attrs).length) {
        for (const [key, value] of Object.entries(this.attrs)) {
          element.setAttribute(key, value);
        }
      }

      return element;
    } else {
      throw new Error("There are dont such type Element or atr");
    }
  };
}

class DivElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      "accesskey",
      "autocapitalize",
      "class",
      "contenteditable",
      "data-*",
      "dir",
      "draggable",
      "hidden",
      "id",
      "inputmode",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "part",
      "slot",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate",
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class UlElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      class DivElement extends DomElement {
        constructor(type, attrs) {
          super(type, attrs);
          this.attrsEx = [
            "accesskey",
            "autocapitalize",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "id",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "part",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
          ];
        }
        isCorrespond() {
          Object.keys(this.attrs).forEach((attr) => {
            if (!this.attrsEx.includes(attr)) {
              return false;
            }
          });
          return true;
        }
      },
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class LiElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      class DivElement extends DomElement {
        constructor(type, attrs) {
          super(type, attrs);

          this.attrsEx = [
            "accesskey",
            "autocapitalize",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "id",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "part",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
          ];
        }
        isCorrespond() {
          Object.keys(this.attrs).forEach((attr) => {
            if (!this.attrsEx.includes(attr)) {
              return false;
            }
          });
          return true;
        }
      },
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class SpanElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      class DivElement extends DomElement {
        constructor(type, attrs) {
          super(type, attrs);

          this.attrsEx = [
            "accesskey",
            "autocapitalize",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "id",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "part",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
          ];
        }
        isCorrespond() {
          Object.keys(this.attrs).forEach((attr) => {
            if (!this.attrsEx.includes(attr)) {
              return false;
            }
          });
          return true;
        }
      },
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class FormElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      class DivElement extends DomElement {
        constructor(type, attrs) {
          super(type, attrs);
          this.attrsEx = [
            "enctype",
            "autocomplete",
            "action",
            "accept-charset",
            "method",
            "name",
            "target",
            "rel",
            "accesskey",
            "autocapitalize",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "id",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "part",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
          ];
        }
        isCorrespond() {
          Object.keys(this.attrs).forEach((attr) => {
            if (!this.attrsEx.includes(attr)) {
              return false;
            }
          });
          return true;
        }
      },
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class BrElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      "accesskey",
      "autocapitalize",
      "class",
      "contenteditable",
      "data-*",
      "dir",
      "draggable",
      "hidden",
      "id",
      "inputmode",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "part",
      "slot",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate",
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class LabelElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      class DivElement extends DomElement {
        constructor(type, attrs) {
          super(type, attrs);

          this.attrsEx = [
            "for",
            "form",
            "accesskey",
            "autocapitalize",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "id",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "part",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
          ];
        }
        isCorrespond() {
          Object.keys(this.attrs).forEach((attr) => {
            if (!this.attrsEx.includes(attr)) {
              return false;
            }
          });
          return true;
        }
      },
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}

class InputElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);

    this.attrsEx = [
      class DivElement extends DomElement {
        constructor(type, attrs) {
          super(type, attrs);
          this.attrsEx = [
            "height",
            "size",
            "width",
            "value",
            "type",
            "disabled",
            "checked",
            "accept",
            "alt",
            "autocomplete",
            "autofocus",
            "accesskey",
            "autocapitalize",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "id",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "part",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
          ];
        }
        isCorrespond() {
          Object.keys(this.attrs).forEach((attr) => {
            if (!this.attrsEx.includes(attr)) {
              return false;
            }
          });
          return true;
        }
      },
    ];
  }
  isCorrespond() {
    Object.keys(this.attrs).forEach((attr) => {
      if (!this.attrsEx.includes(attr)) {
        return false;
      }
    });
    return true;
  }
}
export default DomElement;
export { DivElement };
