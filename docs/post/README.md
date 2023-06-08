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
