import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Timer } from "../../services/timer";

@Injectable({providedIn: 'root'})
export class Navigation{
    private router = inject(Router);
    private timer = inject(Timer);

    goHome(){
        this.timer.reset();
        this.router.navigate(['']);
    }
}