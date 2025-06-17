# LogApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**logsGetCollection**](#logsgetcollection) | **GET** /api/logs | Retrieves the collection of Log resources.|
|[**logsIdDelete**](#logsiddelete) | **DELETE** /api/logs/{id} | Removes the Log resource.|
|[**logsIdGet**](#logsidget) | **GET** /api/logs/{id} | Retrieves a Log resource.|
|[**logsIdPatch**](#logsidpatch) | **PATCH** /api/logs/{id} | Updates the Log resource.|
|[**logsPost**](#logspost) | **POST** /api/logs | Creates a Log resource.|

# **logsGetCollection**
> ApiLogsGetCollection200Response logsGetCollection()

Retrieves the collection of Log resources.

### Example

```typescript
import {
    LogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let page: number; //The collection page number (optional) (default to 1)

const { status, data } = await apiInstance.logsGetCollection(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The collection page number | (optional) defaults to 1|


### Return type

**ApiLogsGetCollection200Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Log collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logsIdDelete**
> logsIdDelete()

Removes the Log resource.

### Example

```typescript
import {
    LogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let id: string; //Log identifier (default to undefined)

const { status, data } = await apiInstance.logsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Log identifier | defaults to undefined|


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
|**204** | Log resource deleted |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logsIdGet**
> LogJsonld logsIdGet()

Retrieves a Log resource.

### Example

```typescript
import {
    LogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let id: string; //Log identifier (default to undefined)

const { status, data } = await apiInstance.logsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Log identifier | defaults to undefined|


### Return type

**LogJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Log resource |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logsIdPatch**
> LogJsonld logsIdPatch(log)

Updates the Log resource.

### Example

```typescript
import {
    LogApi,
    Configuration,
    Log
} from './api';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let id: string; //Log identifier (default to undefined)
let log: Log; //The updated Log resource

const { status, data } = await apiInstance.logsIdPatch(
    id,
    log
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **log** | **Log**| The updated Log resource | |
| **id** | [**string**] | Log identifier | defaults to undefined|


### Return type

**LogJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Log resource updated |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logsPost**
> LogJsonld logsPost(logJsonld)

Creates a Log resource.

### Example

```typescript
import {
    LogApi,
    Configuration,
    LogJsonld
} from './api';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let logJsonld: LogJsonld; //The new Log resource

const { status, data } = await apiInstance.logsPost(
    logJsonld
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logJsonld** | **LogJsonld**| The new Log resource | |


### Return type

**LogJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Log resource created |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

