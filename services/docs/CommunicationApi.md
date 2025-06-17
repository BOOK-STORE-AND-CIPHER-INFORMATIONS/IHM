# CommunicationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**publicKeyGet**](#publickeyget) | **GET** /api/public_key | Retrieves a Communication resource.|

# **publicKeyGet**
> CommunicationPublicKeyOutputJsonld publicKeyGet()

Retrieves a Communication resource.

### Example

```typescript
import {
    CommunicationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CommunicationApi(configuration);

const { status, data } = await apiInstance.publicKeyGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CommunicationPublicKeyOutputJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Communication resource |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

