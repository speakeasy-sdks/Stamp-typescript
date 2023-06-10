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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.LogInRequest](../../models/shared/loginrequest.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.LogInResponse](../../models/operations/loginresponse.md)>**


## refreshToken

exchange token in header for a new one

### Example Usage

```typescript
import { StampApi } from "StampApi";
import { RefreshTokenResponse } from "StampApi/dist/sdk/models/operations";

const sdk = new StampApi();

sdk.auth.refreshToken({
  jwt: "",
}).then((res: RefreshTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `security`                                                                         | [operations.RefreshTokenSecurity](../../models/operations/refreshtokensecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RefreshTokenResponse](../../models/operations/refreshtokenresponse.md)>**

