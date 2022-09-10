import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoRoutingModule } from './demo.routing.module';
import { ActionStreamsComponent } from './samples/action-streams/action-streams.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { ControlValueAccessorComponent } from './samples/control-value-accessor/control-value-accessor.component';
import { NumberPickerComponent } from './samples/control-value-accessor/number-picker/number-picker.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormsBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { GetRawValueComponent } from './samples/get-raw-value/get-raw-value.component';
import { NgxFormlyComponent } from './samples/ngx-formly/ngx-formly.component';
import { ReactiveCascadeComponent } from './samples/reactive-cascade/reactive-cascade.component';
import { ReactiveExplicitTypedExternalComponent } from './samples/reactive-explicit-typed-external/reactive-explicit-typed-external.component';
import { ReactiveExplicitTypedComponent } from './samples/reactive-explicit-typed/reactive-explicit-typed.component';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { ReactiveNestedComponent } from './samples/reactive-nested/reactive-nested.component';
import { ReactiveTypedComponent } from './samples/reactive-typed/reactive-typed.component';
import { ReactiveValidationComponent } from './samples/reactive-validation/reactive-validation.component';
import { TypedNonnullableComponent } from './samples/typed-nonnullable/typed-nonnullable.component';
import { MdRendererModule } from '../shared/markdown-renderer/md-renderer.module';
import { BootstrapStandaloneComponent } from './samples/bootstrap-standalone/bootstrap-standalone.component';
import { HostBindingListenerComponent } from './samples/host-binding-listener/host-binding-listener.component';
import { TemplateVsContainerComponent } from './samples/template-vs-container/template-vs-container.component';
import { ViewChildComponent } from './samples/view-child/view-child.component';
import { ContentChildComponent } from './samples/content-child/content-child.component';
import { ExpanderComponent } from './samples/template-vs-container/expander-content/expander.component';
import { ClockComponent } from './samples/template-vs-container/clock/clock.component';
import { ExpanderTemplateComponent } from './samples/template-vs-container/expander-template/expander-template.component';
import { BindingComponent } from './samples/host-binding-listener/binding/binding.component';
import { HoverListenerDirective } from './samples/host-binding-listener/hover-listener.directive';
import { ProjectorComponent } from './samples/content-child/projector/projector.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'standard',
};

@NgModule({
  declarations: [
    DemoContainerComponent,
    ReactiveFormsComponent,
    FormsBuilderComponent,
    FormControlComponent,
    FormArrayComponent,
    ReactiveValidationComponent,
    ReactiveCascadeComponent,
    NgxFormlyComponent,
    AsyncPipeComponent,
    ActionStreamsComponent,
    ReactiveNestedComponent,
    ControlValueAccessorComponent,
    NumberPickerComponent,
    ReactiveTypedComponent,
    TypedNonnullableComponent,
    ReactiveExplicitTypedComponent,
    GetRawValueComponent,
    ReactiveExplicitTypedExternalComponent,
    BootstrapStandaloneComponent,
    HostBindingListenerComponent,
    TemplateVsContainerComponent,
    ViewChildComponent,
    ContentChildComponent,
    ExpanderComponent,
    ClockComponent,
    ExpanderTemplateComponent,
    BindingComponent,
    HoverListenerDirective,
    ProjectorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MdRendererModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ],
})
export class DemosModule {}