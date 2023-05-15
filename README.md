# StampApi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Stamp-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Stamp-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { StampApi } from "StampApi";
import { LogInResponse } from "StampApi/dist/sdk/models/operations";

const sdk = new StampApi();

sdk.auth.logIn({
  accessToken: "corrupti",
  authProvider: "provident",
}).then((res: LogInResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [auth](docs/auth/README.md)

* [logIn](docs/auth/README.md#login) - log in or sign up to stamp with an external auth provider
* [refreshToken](docs/auth/README.md#refreshtoken) - exchange token in header for a new one

### [post](docs/post/README.md)

* [createPost](docs/post/README.md#createpost) - create a new post
* [getRecentPosts](docs/post/README.md#getrecentposts) - get a list of most recent posts
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

