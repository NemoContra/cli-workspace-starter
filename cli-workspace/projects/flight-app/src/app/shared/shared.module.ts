import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {CityPipe} from './pipes/city.pipe';
import { LoggerModule } from 'logger-lib';
import { CustomLogFormatterService } from './logging/custom-log-formatter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
  ],
  exports: [
    CityPipe,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
