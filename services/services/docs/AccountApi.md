# AccountApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsGetCollection**](#accountsgetcollection) | **GET** /api/accounts | Retrieves the collection of Account resources.|
|[**accountsIdDelete**](#accountsiddelete) | **DELETE** /api/accounts/{id} | Removes the Account resource.|
|[**accountsIdGet**](#accountsidget) | **GET** /api/accounts/{id} | Retrieves a Account resource.|
|[**accountsIdPatch**](#accountsidpatch) | **PATCH** /api/accounts/{id} | Updates the Account resource.|
|[**accountsPost**](#accountspost) | **POST** /api/accounts | Creates a Account resource.|

# **accountsGetCollection**
> any accountsGetCollection()

Retrieves the collection of Account resources.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let page: number; //The collection page number (optional) (default to 1)

const { status, data } = await apiInstance.accountsGetCollection(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The collection page number | (optional) defaults to 1|


### Return type

**any**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Encrypted response payload (base64 encoded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsIdDelete**
> any accountsIdDelete()

Removes the Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; //Account identifier (default to undefined)

const { status, data } = await apiInstance.accountsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Account identifier | defaults to undefined|


### Return type

**any**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Encrypted response payload (base64 encoded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsIdGet**
> any accountsIdGet()

Retrieves a Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; //Account identifier (default to undefined)

const { status, data } = await apiInstance.accountsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Account identifier | defaults to undefined|


### Return type

**any**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Encrypted response payload (base64 encoded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsIdPatch**
> any accountsIdPatch()

Updates the Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; //Account identifier (default to undefined)
let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.accountsIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Encrypted request payload (base64 encoded) | |
| **id** | [**string**] | Account identifier | defaults to undefined|


### Return type

**any**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Encrypted response payload (base64 encoded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsPost**
> any accountsPost()

Creates a Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.accountsPost(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Encrypted request payload (base64 encoded) | |


### Return type

**any**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Encrypted response payload (base64 encoded) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

