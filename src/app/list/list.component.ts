import { Component, OnInit } from '@angular/core';
import{ServicebService} from '../serviceb.service'
import { Http, Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  n:any
  list2:any
  list: any;
  
  beer: any = {};
  vec:any;
  aux:any;
  closeResult: string;
  constructor(private  serv:ServicebService,private http: Http
    ,private modalService: NgbModal,) { }

  ngOnInit() {
   this.getlistbeers()
   
  }
  getlistbeers(){
    this.serv.getBeers().subscribe(data => {
      this.list = data;
      console.log(data)
  });
  }

  
  
  open(content,ids) {
   
    let index = ids;
    
    this.serv.getBeersbyid(ids).subscribe(data => {
        this.beer= data;
        
       
           
               
    });
    
    
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })

    
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
}
  

}
