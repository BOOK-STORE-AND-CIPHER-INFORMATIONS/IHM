# LoginCheckApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkPost**](#checkpost) | **POST** /api/login | Creates a user token.|

# **checkPost**
> LoginCheckPost200Response checkPost(loginCheckPostRequest)

Creates a user token.

### Example

```typescript
import {
    LoginCheckApi,
    Configuration,
    LoginCheckPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LoginCheckApi(configuration);

let loginCheckPostRequest: LoginCheckPostRequest; //The login data

const { status, data } = await apiInstance.checkPost(
    loginCheckPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginCheckPostRequest** | **LoginCheckPostRequest**| The login data | |


### Return type

**LoginCheckPost200Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User token created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

