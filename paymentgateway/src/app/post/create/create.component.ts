import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
form! : FormGroup;

constructor(public postService : PostService, private router : Router) {}

ngOnInit():void{
  this.form = new FormGroup({
    customerName : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required]),
    amount : new FormControl('',[Validators.required])
    
  })
}
get f (){
 return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.postService.create(this.form.value).subscribe((res : any)=>{
    alert("record is successfully submitted");
  })
}

}
