import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  public formdata = new FormData()
  demo: any;
  
  constructor(private service: AppServiceService) { 
  }

  ngOnInit(): void {
  }
  onUpload(event: any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
save(){
  this.formdata.append('images', this.demo)
  this.service.postImages(this.formdata).subscribe(res=>{
    console.log(res)
  })
}
}
