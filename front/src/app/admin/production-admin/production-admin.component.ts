import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {InsertProductionStructureGQL, Production_Structure_Insert_Input} from "../../../generated/graphql";

@Component({
  selector: 'app-production-admin',
  templateUrl: './production-admin.component.html',
  styleUrls: ['./production-admin.component.scss']
})
export class ProductionAdminComponent implements OnInit {

  public newProductionForm;

  constructor(private formBuilder: FormBuilder,
              private insertProductionStructureGQL: InsertProductionStructureGQL) {
    this.newProductionForm = this.formBuilder.group({
      liquid_input: ['', [Validators.required, Validators.max(4), Validators.min(0)]],
      liquid_output: ['', [Validators.required, Validators.max(4), Validators.min(0)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      solid_input: ['', [Validators.required, Validators.max(4), Validators.min(0)]],
      solid_output: ['', [Validators.required, Validators.max(4), Validators.min(0)]],
      subcategory: ['', [Validators.required]],
      energy_consumption: ['', [Validators.required, Validators.min(1)]],
    });
  }

  submitNewProduction(form: Production_Structure_Insert_Input) {
    this.insertProductionStructureGQL.mutate({object: form}).subscribe(data => {
        this.newProductionForm.reset();
    },
      error => console.error);
    this.newProductionForm.reset();
  }

  ngOnInit(): void {
  }

}
