import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  // Step 10.7: In order to get access to route parameters, we need to inject ActivatedRoute class in our constructor.
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    // Step 10.8: Getting access to all the parameters in this route using paramMap (an Observable). Note: using + to change string to a number.
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log(id)
      });
  }

}
