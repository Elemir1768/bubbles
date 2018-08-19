import { Component } from '@angular/core';

@Component({
    selector: 'target',
    templateUrl: './target.component.html'
})
export class TargetComponent {
    public targetList: Array<object> = [
        // {
        //     name: "Main Theory",
        //     currentValue: 34,
        //     maxValue: 576
        // },
        // {
        //     name: "Java Script",
        //     currentValue: 314,
        //     maxValue: 576
        // }
    ];

    public positionClass = "center";
}