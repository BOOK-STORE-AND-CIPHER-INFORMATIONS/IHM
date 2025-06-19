# CommunicationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**exchangePost**](#exchangepost) | **POST** /api/exchange | Creates a Communication resource.|

# **exchangePost**
> CommunicationExchangeOutputJsonld exchangePost(communicationExchangeInputJsonld)

Creates a Communication resource.

### Example

```typescript
import {
    CommunicationApi,
    Configuration,
    CommunicationExchangeInputJsonld
} from './api';

const configuration = new Configuration();
const apiInstance = new CommunicationApi(configuration);

let communicationExchangeInputJsonld: CommunicationExchangeInputJsonld; //The new Communication resource

const { status, data } = await apiInstance.exchangePost(
    communicationExchangeInputJsonld
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **communicationExchangeInputJsonld** | **CommunicationExchangeInputJsonld**| The new Communication resource | |


### Return type

**CommunicationExchangeOutputJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Communication resource created |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

