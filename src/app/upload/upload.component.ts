import { Component, OnInit } from '@angular/core';
import { DocumentC, Image } from '../allinterface';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass']
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  public formdata = new FormData();
  public imagearr: Image[] = [];
  public postImages = new DocumentC()

  constructor(private service: AppServiceService) {
  }

  ngOnInit(): void {
  }
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  save() {
    this.uploadedFiles.forEach(res => this.formdata.append('file', res))
    this.service.postImages(this.formdata).subscribe(res=>{
      this.imagearr = res.file
      console.log(this.imagearr)
    })
  }
  saveConverted(){
    this.postImages.images = this.imagearr
    this.service.saveImages(this.postImages).subscribe(res=>{
      console.log(res)
    })
  }
}
