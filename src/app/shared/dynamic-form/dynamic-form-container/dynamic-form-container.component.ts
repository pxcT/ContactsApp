import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-dynamic-form-container',
	templateUrl: './dynamic-form-container.component.html',
	styleUrls: ['./dynamic-form-container.component.scss']
})
export class DynamicFormContainerComponent implements OnInit {
	@Input() configuration;
	
	public dynamicForm = this.formBuilder.group({});

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
	}

}
