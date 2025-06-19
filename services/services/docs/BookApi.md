# BookApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**booksGetCollection**](#booksgetcollection) | **GET** /api/books | Retrieves the collection of Book resources.|
|[**booksIdDelete**](#booksiddelete) | **DELETE** /api/books/{id} | Removes the Book resource.|
|[**booksIdGet**](#booksidget) | **GET** /api/books/{id} | Retrieves a Book resource.|
|[**booksIdPatch**](#booksidpatch) | **PATCH** /api/books/{id} | Updates the Book resource.|
|[**booksIdPut**](#booksidput) | **PUT** /api/books/{id} | Replaces the Book resource.|
|[**booksPost**](#bookspost) | **POST** /api/books | Creates a Book resource.|

# **booksGetCollection**
> any booksGetCollection()

Retrieves the collection of Book resources.

### Example

```typescript
import {
    BookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let page: number; //The collection page number (optional) (default to 1)

const { status, data } = await apiInstance.booksGetCollection(
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

# **booksIdDelete**
> any booksIdDelete()

Removes the Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let id: string; //Book identifier (default to undefined)

const { status, data } = await apiInstance.booksIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Book identifier | defaults to undefined|


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

# **booksIdGet**
> any booksIdGet()

Retrieves a Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let id: string; //Book identifier (default to undefined)

const { status, data } = await apiInstance.booksIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Book identifier | defaults to undefined|


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

# **booksIdPatch**
> any booksIdPatch()

Updates the Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let id: string; //Book identifier (default to undefined)
let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.booksIdPatch(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Encrypted request payload (base64 encoded) | |
| **id** | [**string**] | Book identifier | defaults to undefined|


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

# **booksIdPut**
> any booksIdPut()

Replaces the Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let id: string; //Book identifier (default to undefined)
let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.booksIdPut(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **any**| Encrypted request payload (base64 encoded) | |
| **id** | [**string**] | Book identifier | defaults to undefined|


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

# **booksPost**
> any booksPost()

Creates a Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let body: any; //Encrypted request payload (base64 encoded) (optional)

const { status, data } = await apiInstance.booksPost(
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

