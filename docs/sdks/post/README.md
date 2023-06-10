# post

### Available Operations

* [createPost](#createpost) - create a new post
* [getRecentPosts](#getrecentposts) - get a list of most recent posts

## createPost

create a new post

### Example Usage

```typescript
import { StampApi } from "StampApi";
import { CreatePostResponse } from "StampApi/dist/sdk/models/operations";

const sdk = new StampApi();

sdk.post.createPost({
  description: "unde",
  link: "nulla",
  rootDomain: "corrupti",
  title: "Dr.",
}, {
  jwt: "",
}).then((res: CreatePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.PostPostRequest](../../models/shared/postpostrequest.md)               | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.CreatePostSecurity](../../models/operations/createpostsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreatePostResponse](../../models/operations/createpostresponse.md)>**


## getRecentPosts

get a list of most recent posts

### Example Usage

```typescript
import { StampApi } from "StampApi";
import { GetRecentPostsResponse } from "StampApi/dist/sdk/models/operations";

const sdk = new StampApi();

sdk.post.getRecentPosts({
  lastFetchedItemId: "vel",
  size: 623564,
}).then((res: GetRecentPostsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetRecentPostsRequest](../../models/operations/getrecentpostsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetRecentPostsResponse](../../models/operations/getrecentpostsresponse.md)>**

