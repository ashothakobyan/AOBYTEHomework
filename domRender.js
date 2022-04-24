const el = (type, attrs, children) => {
  class DomElement {
    constructor(type, attrs, children) {
      this.type = type;
      this.attrs = attrs;
      this.children = children;
    }
    draw = () => {
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
    };
  }

  return new DomElement(type, attrs, children);
};

const tree = el(
  "div",
  {},
  el("ul", {}, [
    el("li", {}, "Item 1"),
    el("li", {}, "Item 2"),
    el("li", {}, "Item 3"),
  ])
);

const tree2 = el(
  "div",
  { class: "some_classname", id: "some_id" },
  el("span", {}, "hello")
);

const tree3 = el("form", { action: "/some_action" }, [
  el("label", { for: "name" }, "First name:"),
  el("br", {}, null),
  el(
    "input",
    { type: "text", id: "name", name: "name", value: "My name" },
    null
  ),
  el("br", {}, null),
  el("label", { for: "last_name" }, "Last name:"),
  el("br", {}, null),
  el(
    "input",
    {
      type: "text",
      id: "last_name",
      name: "last_name",
      value: "My second name",
    },
    null
  ),
  el("br", {}, null),
  el("input", { type: "submit", value: "Submit" }, null),
]);
console.log(tree.draw());
console.log(tree2.draw());
console.log(tree3.draw());
