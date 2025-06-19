# CommunicationExchangeOutputJsonld

Exchange client and server\'s public key and generate symmetric key for encrypting messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AccountJsonldContext**](AccountJsonldContext.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [readonly] [default to undefined]
**type** | **string** |  | [optional] [readonly] [default to undefined]
**public_key** | **string** |  | [optional] [default to undefined]
**symmetric_key** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CommunicationExchangeOutputJsonld } from './api';

const instance: CommunicationExchangeOutputJsonld = {
    context,
    id,
    type,
    public_key,
    symmetric_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
