# react-stream

Model processing/validation API. Strongly typed. Isomorphic, intended to run in nodejs/nashorn and browser environment alike.

Java model classes are being converted into typescript interfaces and wrapped into observables. Model is fed to field graph that describe data flow. Can be asyncronous. React components connect to logic nodes and are updated when new data is available in node.

This approach separates appearence logic from business model logic allowing latter to be processed (for example for validation purposes) regardless of UI state.
