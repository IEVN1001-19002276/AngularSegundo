import { Component, OnInit } from '@angular/core';
import {MessageserviceService} from '../messageservice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ListMessageComponent } from "../list-message/list-message.component";

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule, ListMessageComponent],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent{
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }
  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
    });
  }
  constructor(public messageService: MessageserviceService, private readonly fb: FormBuilder) {}
  alumno: string = "";
  addAlumno(){
    let {nombre} = this.formGroup.value;
    this.messageService.add(nombre)
    this.formGroup.get('nombre')?.setValue('');
  }
}

