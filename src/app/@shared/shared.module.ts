import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const DIRECTIVES = [

];

const COMPONENTS = [
  LoadingComponent,
  NavComponent,
  SideNavComponent
];

const PIPES = [

];

const PROVIDERS = [

];

@NgModule({
imports: [
  CommonModule
],
exports: [
  ...COMPONENTS,
  ...PIPES,
  ...DIRECTIVES
],
declarations: [
  ...COMPONENTS,
  ...PIPES,
  ...DIRECTIVES,
],
entryComponents: [
]
})
export class SharedModule {
static foorRoot(): ModuleWithProviders {
  return <ModuleWithProviders>{
    ngModule: SharedModule,
    exports: [
      ...COMPONENTS,
      ...PIPES,
      ...DIRECTIVES
    ],
    declarations: [
      ...COMPONENTS
    ],
    providers: [
      ...PROVIDERS
    ]
  };
}
}
