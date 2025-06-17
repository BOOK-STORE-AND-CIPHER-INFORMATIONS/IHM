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
> ApiRentsGetCollection200Response rentsGetCollection()

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

**ApiRentsGetCollection200Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rent collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentsIdDelete**
> rentsIdDelete()

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

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Rent resource deleted |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentsIdGet**
> RentJsonld rentsIdGet()

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

**RentJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rent resource |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentsIdPatch**
> RentJsonld rentsIdPatch(rent)

Updates the Rent resource.

### Example

```typescript
import {
    RentApi,
    Configuration,
    Rent
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let id: string; //Rent identifier (default to undefined)
let rent: Rent; //The updated Rent resource

const { status, data } = await apiInstance.rentsIdPatch(
    id,
    rent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rent** | **Rent**| The updated Rent resource | |
| **id** | [**string**] | Rent identifier | defaults to undefined|


### Return type

**RentJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rent resource updated |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentsPost**
> RentJsonld rentsPost(rentJsonld)

Creates a Rent resource.

### Example

```typescript
import {
    RentApi,
    Configuration,
    RentJsonld
} from './api';

const configuration = new Configuration();
const apiInstance = new RentApi(configuration);

let rentJsonld: RentJsonld; //The new Rent resource

const { status, data } = await apiInstance.rentsPost(
    rentJsonld
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rentJsonld** | **RentJsonld**| The new Rent resource | |


### Return type

**RentJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Rent resource created |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

