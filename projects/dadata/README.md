# @evo/dadata

[Dadata](https://dadata.ru) API wrapper.

## Functionality

For now this library provides an opportunity to work with basic DaData suggestions API:


## Usage

Import `EvoDadataModule` in your project as following:

```angular2html
{
    imports: [
        EvoDadataModule.forRoot({
            proxyBaseUrl: '<your DaData proxy URL>',
        }),
    ],
}
```

> Notice, that your proxy server for DaData should proxy full URLs for DaData, including api version, service name (`) `EvoDadataService` uses DaData proxy URL like this: `${proxyBaseUrl}/suggestions/api/4_1/rs/suggest`
