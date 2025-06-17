# ConstraintViolationJsonldJsonld

Unprocessable entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AccountJsonldContext**](AccountJsonldContext.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [readonly] [default to undefined]
**type** | **string** |  | [optional] [readonly] [default to undefined]
**status** | **number** |  | [optional] [default to 422]
**violations** | [**Array&lt;ConstraintViolationJsonViolationsInner&gt;**](ConstraintViolationJsonViolationsInner.md) |  | [optional] [default to undefined]
**detail** | **string** |  | [optional] [readonly] [default to undefined]
**description** | **string** |  | [optional] [readonly] [default to undefined]
**type** | **string** |  | [optional] [readonly] [default to undefined]
**title** | **string** |  | [optional] [readonly] [default to undefined]
**instance** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ConstraintViolationJsonldJsonld } from './api';

const instance: ConstraintViolationJsonldJsonld = {
    context,
    id,
    type,
    status,
    violations,
    detail,
    description,
    type,
    title,
    instance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
