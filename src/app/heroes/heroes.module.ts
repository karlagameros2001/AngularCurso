import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { ContadorComponent } from '../contador/contador/contador.component';

@NgModule ({
    declarations: [
        AppComponent,
        ContadorComponent
    ],
    imports: [
        BrowserModule,
        HeroesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class HeroesModule {}