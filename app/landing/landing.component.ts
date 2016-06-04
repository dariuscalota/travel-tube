import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl:'app/landing/landing.component.html'
})

export class LandingComponent implements OnInit{
    ngOnInit() {
        $(".bg").interactive_bg({
            strength: 30,
            scale: 1.1,
            animationSpeed: "300ms",
            contain: true,
            wrapContent: true
        });
        
        // change background size on window resize
        $(window).resize(function() {
            $(".bg > .ibg-bg").css({
                width: $(window).outerWidth(),
                height: $(window).outerHeight()
            })
        });
    }
}