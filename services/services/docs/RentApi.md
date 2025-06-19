# RentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**rentsGetCollection**](#rentsgetcollection) | **GET** /api/rents | Retrieves the collection of Rent resources.|
|[**rentsIdDelete**](#rentsiddelete) | **DELETE** /api/rents/{id} | Removes the Rent resource.|
|[**rentsIdGet**](#rentsidget) | **GET** /api/rents/{id} | Retrieves a Rent resource.|
|[**rentsIdPatch**](#rentsidpatch) | **PATCH** /api/rents/{id} | Updates the Rent resource.|
|[**rentsPost**](#rentspost) | **POST** /api/rents | Creates a Rent resource.|

# **rentsGetCollection**
> any rentsGetCollection()

Retrieves the collection of Rent resources.

### Example

```typescript
import {
    RentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let page: number; //The collection page number (optional) (default to 1)

const { status, data } = await apiInstance.rentsGetCollection(
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

# **rentsIdDelete**
> any rentsIdDelete()

Removes the Rent resource.

### Example

```typescript
import {
    RentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let id: string; //Rent identifier (default to undefined)

const { status, data } = await apiInstance.rentsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Rent identifier | defaults to undefined|


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

# **rentsIdGet**
> any rentsIdGet()

Retrieves a Rent resource.

### Example

```typescript
import {
    RentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let id: string; //Rent identifier (default to undefined)

const { status, data } = await apiInstance.rentsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Rent identifier | defaults to undefined|


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

# **rentsIdPatch**
> any rentsIdPatch()

Updates the Rent resource.

### Example

```typescript
import {
    RentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let id: string; //Rent identifier (default to undefined)
let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.rentsIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Encrypted request payload (base64 encoded) | |
| **id** | [**string**] | Rent identifier | defaults to undefined|


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

# **rentsPost**
> any rentsPost()

Creates a Rent resource.

### Example

```typescript
import {
    RentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.rentsPost(
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

