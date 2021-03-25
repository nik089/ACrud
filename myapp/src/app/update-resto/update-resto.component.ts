import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import {FormGroup,  FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private router:ActivatedRoute,private resto:RestoService) { }
  alert:boolean=false
  editResto =new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })


  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result);
      //fill the data in edit forms
      this.editResto =new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    })
  }
 updateCollection()
 {
 console.warn(this.editResto.value);
 this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
   console.warn(result);
   this.alert=true
 })

 }
 closeAlert()
 {
   this.alert=false;
 }

}
