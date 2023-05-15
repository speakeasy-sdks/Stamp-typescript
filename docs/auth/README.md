# auth

### Available Operations

* [logIn](#login) - log in or sign up to stamp with an external auth provider
* [refreshToken](#refreshtoken) - exchange token in header for a new one

## logIn

log in or sign up to stamp with an external auth provider, returns a jwt for accessing stamp api.

### Example Usage

```typescript
import { StampApi } from "StampApi";
import { LogInResponse } from "StampApi/dist/sdk/models/operations";

const sdk = new StampApi();

sdk.auth.logIn({
  accessToken: "distinctio",
  authProvider: "quibusdam",
}).then((res: LogInResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## refreshToken

exchange token in header for a new one

### Example Usage

```typescript
import { StampApi } from "StampApi";
import { RefreshTokenResponse } from "StampApi/dist/sdk/models/operations";

const sdk = new StampApi();

sdk.auth.refreshToken({
  jwt: "YOUR_BEARER_TOKEN_HERE",
}).then((res: RefreshTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
