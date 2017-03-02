import { Component, OnInit } from '@angular/core';
import { JournalserviceService } from "./../services/journalservice.service";
// import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],

  providers: [JournalserviceService]
})

export class EntryListComponent implements OnInit {

  journals;

 constructor(private journal: JournalserviceService) { }

 ngOnInit() {
   this.journal.getList()
     .subscribe((journals) => {
       this.journals = journals;
     });
 }
}
