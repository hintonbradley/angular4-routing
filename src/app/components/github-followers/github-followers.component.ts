import { GithubFollowersService } from './../../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Step 10.12: Subscribing to two observable into one. Adding rxjs imports.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  // Step 10.10: Adding ActivatedRoute to grab query params
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // Step 10.11: Adding ActivatedRoute to grab query params by subscribing to queryParams
    this.route.queryParams.subscribe(params => {
      let order = params['order'];
      let page = params['page'];
      console.log(order, page); // Print the parameter to the console. 
    });

    // Step 10.13: Combining two observables into one:
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        this.service.getAll()
          .subscribe(followers => this.followers = followers);
      })
  }
}
