# BookApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**booksGetCollection**](#booksgetcollection) | **GET** /api/books | Retrieves the collection of Book resources.|
|[**booksIdDelete**](#booksiddelete) | **DELETE** /api/books/{id} | Removes the Book resource.|
|[**booksIdGet**](#booksidget) | **GET** /api/books/{id} | Retrieves a Book resource.|
|[**booksIdPatch**](#booksidpatch) | **PATCH** /api/books/{id} | Updates the Book resource.|
|[**booksPost**](#bookspost) | **POST** /api/books | Creates a Book resource.|

# **booksGetCollection**
> ApiBooksGetCollection200Response booksGetCollection()

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

**ApiBooksGetCollection200Response**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Book collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booksIdDelete**
> booksIdDelete()

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

void (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Book resource deleted |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booksIdGet**
> BookJsonld booksIdGet()

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

**BookJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Book resource |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booksIdPatch**
> BookJsonld booksIdPatch(book)

Updates the Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration,
    Book
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let id: string; //Book identifier (default to undefined)
let book: Book; //The updated Book resource

const { status, data } = await apiInstance.booksIdPatch(
    id,
    book
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **book** | **Book**| The updated Book resource | |
| **id** | [**string**] | Book identifier | defaults to undefined|


### Return type

**BookJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Book resource updated |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **booksPost**
> BookJsonld booksPost(bookJsonld)

Creates a Book resource.

### Example

```typescript
import {
    BookApi,
    Configuration,
    BookJsonld
} from './api';

const configuration = new Configuration();
const apiInstance = new BookApi(configuration);

let bookJsonld: BookJsonld; //The new Book resource

const { status, data } = await apiInstance.booksPost(
    bookJsonld
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookJsonld** | **BookJsonld**| The new Book resource | |


### Return type

**BookJsonld**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/ld+json
 - **Accept**: application/ld+json, application/problem+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Book resource created |  -  |
|**400** | Invalid input |  -  |
|**422** | An error occurred |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

