# log-input-search



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description | Type             | Default     |
| ------------- | --------- | ----------- | ---------------- | ----------- |
| `buttonProps` | --        |             | `LogButtonModel` | `undefined` |
| `inputProps`  | --        |             | `LogInputModel`  | `undefined` |


## Events

| Event   | Description | Type                  |
| ------- | ----------- | --------------------- |
| `value` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [log-input](../../atoms/log-input)
- [log-button](../../atoms/log-button)

### Graph
```mermaid
graph TD;
  log-input-search --> log-input
  log-input-search --> log-button
  style log-input-search fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
