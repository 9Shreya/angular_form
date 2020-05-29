import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModulesComponent } from './forms-modules/forms-modules.component';
import { NormalHtmlFormComponent } from './normal-html-form/normal-html-form.component';
import { NgModelGroupFormComponent } from './ng-model-group-form/ng-model-group-form.component';
import { BindingFormUsingInterpolationtoTsFileComponent } from './binding-form-using-interpolationto-ts-file/binding-form-using-interpolationto-ts-file.component';
import { TouchedPristinValidComponent } from './touched-pristin-valid/touched-pristin-valid.component';
import { ValidationWithRedBorderComponent } from './validation-with-red-border/validation-with-red-border.component';
import { ValidationWithMessageComponent } from './validation-with-message/validation-with-message.component';
import { ValidationWithIfConditionComponent } from './validation-with-if-condition/validation-with-if-condition.component';


const routes: Routes = [
 {
  path:"normal",component:NormalHtmlFormComponent
 },
 {
  path:"forms",component:FormsModulesComponent
},

  {
    path:"modelGroup",component:NgModelGroupFormComponent
  }
,
{
  path:"bindingFormTotsFile",component:BindingFormUsingInterpolationtoTsFileComponent
},
{
  path:'TouchedPristinValidComponent',component:TouchedPristinValidComponent
},

{
  path:'validation',component:ValidationWithRedBorderComponent
},
{
  path:'validationWith-Msg',component:ValidationWithMessageComponent
},

        {
          path:"IfConditionValidation",component:ValidationWithIfConditionComponent
        }
       ,


    
    
    {
      path:'normal',children:[
        {
          path:"",component:NormalHtmlFormComponent
        },
        {
          path:'forms',children:[
            {
              path:"",component:FormsModulesComponent
            },
            {
              path:'modelGroup',children:[
                {
                  path:'', component:NgModelGroupFormComponent
                },
                {
                  path:'bindingFormTotsFile',children:[
                    {
                      path:"",    component:BindingFormUsingInterpolationtoTsFileComponent
                    },
                    {
                     path:'TouchedPristinValidComponent',children:[
                      {
                        path:"", component:TouchedPristinValidComponent
                      },
                      {
                        path:'validation',children:[
                          {
                            path:'',component:ValidationWithRedBorderComponent
                          },
                          {
                            path:'validationWith-Msg',children:[
                              {
                                path:"",component:ValidationWithMessageComponent
                              },
                              {
                                path:"IfConditionValidation",component:ValidationWithIfConditionComponent
                              }
                             
                            ]
                          }
                        ]
                      }
                    ]
                    }
                  ]
                }
              ]
            }
          ]
          
        }
      ]
      
    },
     
    
    {
      path:'validation',component:ValidationWithRedBorderComponent
    },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
