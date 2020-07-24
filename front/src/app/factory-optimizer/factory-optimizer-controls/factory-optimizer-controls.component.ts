import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  GetFactoryLineListGQL,
  GetFactoryLineListQuery,
  InsertFactoryLineGQL,
  InsertProductionStructureGQL
} from "../../../generated/graphql";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-factory-optimizer-controls',
  templateUrl: './factory-optimizer-controls.component.html',
  styleUrls: ['./factory-optimizer-controls.component.scss']
})
export class FactoryOptimizerControlsComponent implements OnInit {

  @Output()
  newSelectedFactoryLine = new EventEmitter();

  factoryLineList: GetFactoryLineListQuery;
  selectedList: any;
  newFactoryLineForm;

  constructor(private getFactoryLineListGQL: GetFactoryLineListGQL,
              private insertFactoryLineGQL: InsertFactoryLineGQL,
              private formBuilder: FormBuilder) {
    this.newFactoryLineForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.getFactoryLineList();
  }

  getFactoryLineList() {
    this.getFactoryLineListGQL.watch().valueChanges.subscribe(result => {
      this.factoryLineList = result.data;
    });
  }

  onNewSelection(event) {
    this.newSelectedFactoryLine.emit(event.value);
  }

  submitNewFactoryLine(form){
    this.insertFactoryLineGQL.mutate({object: form}).subscribe(result => {
      console.log(result);
      this.newFactoryLineForm.reset();
    });
  }
}
