import { ModuleWithProviders, NgModule } from '@angular/core';
import { DadataModuleConfig } from './interfaces/dadata-module-config';
import { EVO_DADATA_PROXY_BASE_URL } from './tokens/evo-dadata-proxy-base-url';
import { EvoDadataService } from './evo-dadata.service';

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
})
export class EvoDadataModule {
    static forRoot(config: DadataModuleConfig): ModuleWithProviders<EvoDadataModule> {
        return {
            ngModule: EvoDadataModule,
            providers: [
                EvoDadataService,
                {
                    provide: EVO_DADATA_PROXY_BASE_URL,
                    useValue: config.proxyBaseUrl,
                },
            ],
        };
    }
}
