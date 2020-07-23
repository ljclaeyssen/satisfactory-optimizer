import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Component_Insert_Input, InsertComponentGQL} from "../../../generated/graphql";

@Component({
  selector: 'app-component-admin',
  templateUrl: './component-admin.component.html',
  styleUrls: ['./component-admin.component.scss']
})
export class ComponentAdminComponent implements OnInit {

  public newComponentForm;

  constructor(private formBuilder: FormBuilder,
              private insertComponentGQL: InsertComponentGQL) {
    this.newComponentForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      sink_value: ['', [Validators.required]],
      stack_size: ['', [Validators.required, Validators.min(1)]],
    })
  }

  ngOnInit(): void {
  }

  public submitNewComponent(form: Component_Insert_Input) {
    console.log(form);
    this.insertComponentGQL.mutate({object: form}).subscribe(result => {
      console.log(result);
      this.newComponentForm.reset();
    },
      error => console.error);
  }

}
