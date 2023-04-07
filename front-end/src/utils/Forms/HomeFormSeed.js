//all groups must have:
// id, parentname, groupHeader, and at least one question styles qXX
//all questions must have:
// parentname, value: "", placeholder, input, and id
// optional description
// input can be "control", "select", "radio", "checkbox", or "range"
//  select, checkbox, and radio inputs must also have a an array of options called selections
//   and a name string

const formSeed = {
  group1: {
    id: "example",
    name: "example",
    parentname: "group1",
    groupHeader: "example",
    q01: {
      parentname: "q01",
      value: "",
      placeholder: "Name",
      input: "control",
      description: "Name",
      id: "example-name",
      name: "example-name",
    },
    q02: {
      parentname: "q02",
      value: "",
      placeholder: "",
      input: "date",
      description: "Today's Date",
      id: "example-today",
      name: "example-today",
    },
    q03: {
      parentname: "q03",
      value: "",
      placeholder: "",
      input: "radio",
      selections: ["Yes", "No"],
      description: "Yes or No?",
      id: "example-y-n",
      name: "example-y-n",
    },
  },
};

export default formSeed;
