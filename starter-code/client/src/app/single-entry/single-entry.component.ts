import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalserviceService } from "./../services/journalservice.service";


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {
    journal: any;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalserviceService
  ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }




  getJournalDetails(id) {
    this.journalService.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }
}
