import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModulesComponent } from './forms-modules/forms-modules.component';
import { NgModelGroupFormComponent } from './ng-model-group-form/ng-model-group-form.component';
import { NormalHtmlFormComponent } from './normal-html-form/normal-html-form.component';
import { BindingFormUsingInterpolationtoTsFileComponent } from './binding-form-using-interpolationto-ts-file/binding-form-using-interpolationto-ts-file.component';
import { TouchedPristinValidComponent } from './touched-pristin-valid/touched-pristin-valid.component';
import { ValidationWithRedBorderComponent } from './validation-with-red-border/validation-with-red-border.component';
import { ValidationWithMessageComponent } from './validation-with-message/validation-with-message.component';
import { ValidationWithIfConditionComponent } from './validation-with-if-condition/validation-with-if-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsModulesComponent,
    NgModelGroupFormComponent,
    NormalHtmlFormComponent,
    BindingFormUsingInterpolationtoTsFileComponent,
    TouchedPristinValidComponent,
    ValidationWithRedBorderComponent,
    ValidationWithMessageComponent,
    ValidationWithIfConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
