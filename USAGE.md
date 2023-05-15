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