# LogApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsAccountIdlogsGetCollection**](#accountsaccountidlogsgetcollection) | **GET** /api/accounts/{account_id}/logs | Retrieves the collection of Log resources.|
|[**logsGetCollection**](#logsgetcollection) | **GET** /api/logs | Retrieves the collection of Log resources.|

# **accountsAccountIdlogsGetCollection**
> any accountsAccountIdlogsGetCollection()

Retrieves the collection of Log resources.

### Example

```typescript
import {
    LogApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LogApi(configuration);

let accountId: string; //Log identifier (default to undefined)
let page: number; //The collection page number (optional) (default to 1)

const { status, data } = await apiInstance.accountsAccountIdlogsGetCollection(
    accountId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Log identifier | defaults to undefined|
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

# **logsGetCollection**
> any logsGetCollection()

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

