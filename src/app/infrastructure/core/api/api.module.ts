import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [
        ApiService,
        // ******Provide each Feature Service here********
        //     {
        //     provide : HTTP_INTERCEPTORS,
        //     useClass: AuthInterceptor,
        //     multi   : true,
        // },
    ],
})
export class ApiModule { }
