import DomElement, { DivElement } from "./clases.js";

const el = (type, attrs, children) => {
  return new DivElement(type, attrs, children);
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
