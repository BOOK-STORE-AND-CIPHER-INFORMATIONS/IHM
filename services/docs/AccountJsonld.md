# AccountJsonld



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AccountJsonldContext**](AccountJsonldContext.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [readonly] [default to undefined]
**type** | **string** |  | [optional] [readonly] [default to undefined]
**username** | **string** |  | [default to undefined]
**password** | **string** |  | [default to undefined]
**ipAddress** | **string** |  | [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**logs** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**userIdentifier** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { AccountJsonld } from './api';

const instance: AccountJsonld = {
    context,
    id,
    type,
    username,
    password,
    ipAddress,
    roles,
    logs,
    userIdentifier,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
