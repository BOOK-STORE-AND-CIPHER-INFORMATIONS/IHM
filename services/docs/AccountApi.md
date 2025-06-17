# AccountApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsGetCollection**](#accountsgetcollection) | **GET** /api/accounts | Retrieves the collection of Account resources.|
|[**accountsPost**](#accountspost) | **POST** /api/accounts | Creates a Account resource.|
|[**accountsUsernameDelete**](#accountsusernamedelete) | **DELETE** /api/accounts/{username} | Removes the Account resource.|
|[**accountsUsernameGet**](#accountsusernameget) | **GET** /api/accounts/{username} | Retrieves a Account resource.|
|[**accountsUsernamePatch**](#accountsusernamepatch) | **PATCH** /api/accounts/{username} | Updates the Account resource.|

# **accountsGetCollection**
> ApiAccountsGetCollection200Response accountsGetCollection()

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

**ApiAccountsGetCollection200Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Account collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsPost**
> AccountJsonld accountsPost(accountJsonld)

Creates a Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration,
    AccountJsonld
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let accountJsonld: AccountJsonld; //The new Account resource

const { status, data } = await apiInstance.accountsPost(
    accountJsonld
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountJsonld** | **AccountJsonld**| The new Account resource | |


### Return type

**AccountJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Account resource created |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsUsernameDelete**
> accountsUsernameDelete()

Removes the Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let username: string; //Account identifier (default to undefined)

const { status, data } = await apiInstance.accountsUsernameDelete(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Account identifier | defaults to undefined|


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
|**204** | Account resource deleted |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsUsernameGet**
> AccountJsonld accountsUsernameGet()

Retrieves a Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let username: string; //Account identifier (default to undefined)

const { status, data } = await apiInstance.accountsUsernameGet(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Account identifier | defaults to undefined|


### Return type

**AccountJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Account resource |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsUsernamePatch**
> AccountJsonld accountsUsernamePatch(account)

Updates the Account resource.

### Example

```typescript
import {
    AccountApi,
    Configuration,
    Account
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let username: string; //Account identifier (default to undefined)
let account: Account; //The updated Account resource

const { status, data } = await apiInstance.accountsUsernamePatch(
    username,
    account
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **account** | **Account**| The updated Account resource | |
| **username** | [**string**] | Account identifier | defaults to undefined|


### Return type

**AccountJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Account resource updated |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

