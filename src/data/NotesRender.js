// importing files
import {
  javaScriptNotes,
  introductionToJavaScript,
  conditionalOperators,
  functions,
  scopeBlock,
  arrays,
  loops,
  higherOrderFunction,
  iterators,
  object,
  advanceobject,
  classes,
  transpilation,
  moduleExportImport,
  promises,
  asyncAwait,
  requestGetPost,
  requestFetch,
  whatNext,
} from "./Notes";

const notesRender = () => {
  let _notesMapping = [
    {
      id: "js0",
      name: "JavaScript Notes",
      fname: javaScriptNotes,
    },
    {
      id: "js1",
      name: "Introduction to JavaScript",
      fname: introductionToJavaScript,
    },
    {
      id: "js2",
      name: "Conditional Operators",
      fname: conditionalOperators,
    },
    {
      id: "js3",
      name: "Function",
      fname: functions,
    },
    {
      id: "js4",
      name: "Scope & Blocks",
      fname: scopeBlock,
    },
    {
      id: "js5",
      name: "Arrays",
      fname: arrays,
    },
    {
      id: "js6",
      name: "Loops",
      fname: loops,
    },
    {
      id: "js7",
      name: "Higher Order Function",
      fname: higherOrderFunction,
    },
    {
      id: "js8",
      name: "Iterators",
      fname: iterators,
    },
    {
      id: "js9",
      name: "Object",
      fname: object,
    },
    {
      id: "js10",
      name: "Advance Object",
      fname: advanceobject,
    },
    {
      id: "js11",
      name: "Classes",
      fname: classes,
    },
    {
      id: "js12",
      name: "Transpilation",
      fname: transpilation,
    },
    {
      id: "js13",
      name: "Module Export/Import",
      fname: moduleExportImport,
    },
    {
      id: "js14",
      name: "Promises",
      fname: promises,
    },
    {
      id: "js15",
      name: "Async/Await",
      fname: asyncAwait,
    },
    {
      id: "js16",
      name: "Request - GET/POST",
      fname: requestGetPost,
    },
    {
      id: "js17",
      name: "Request - FETCH",
      fname: requestFetch,
    },
    {
      id: "js18",
      name: "What Next ¯_(ツ)_/¯",
      fname: whatNext,
    },
  ];
  return _notesMapping;
};

export default notesRender;
