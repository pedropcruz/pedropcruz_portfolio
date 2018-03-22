import React, {Component} from "react";
import BackgroundAnimatedCSS from "./BackgroundAnimated.css";

const solidType = ["hexagon", "triangle", "cross", "square"];
const num = 50,
    minSize = 20, maxSize = 60;

function RandomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

export default class BackgroundAnimated extends Component {
    constructor() {
        super();

        this.LetSolidDance = this.LetSolidDance.bind(this);
        this.LoadSolidTypes = this.LoadSolidTypes.bind(this);
        this.startLoop = this.startLoop.bind(this);
        this.loop = this.loop.bind(this);
        this.stopLoop = this.stopLoop.bind(this);
    }

    componentDidMount() {
        this.LoadSolidTypes();
        this.startLoop();
    }

    startLoop(){
        if(!this.frameId){
            this.timer = setTimeout(() => {
                this.loop();
            }, 1);
            this.timerInterval = setInterval(() => {
                this.loop();
            }, 5000);
        }
    }

    loop(){
        this.frameId = window.requestAnimationFrame(this.LetSolidDance);
    }

    stopLoop(){
        window.cancelAnimationFrame(this.frameId);
    }

    componentWillUnmount() {
        this.stopLoop();
    }

    LoadSolidTypes() {
        for (let i = 0; i < num; i++) {
            let type = solidType[RandomNumber(0, solidType.length)];

            let wh = RandomNumber(minSize, maxSize) + 'px';

            let style = {
                top: RandomNumber(100, window.innerHeight - 100) + "px",
                left: RandomNumber(100, window.innerWidth - 100) + "px",
                transform: "rotate(" + RandomNumber(0, 360) + "deg",
                width: wh,
                height: wh
            };

            let div = document.createElement("div");
            div.className += type + " outer";
            div.setAttribute("data-idx", i);
            document.querySelector(".backgroundAnimated").append(div);

            let $el = document.querySelector('div.outer[data-idx="' + i + '"]');
            Object.assign($el.style, style);
        }
    }

    LetSolidDance() {
        for (let i = 0; i < num; i++) {
            let div = document.querySelector('div.outer[data-idx="' + i + '"]');
            Object.assign(div.style, {
                transform:
                "translate(" +
                RandomNumber(-1000, 3000) +
                "px, " +
                RandomNumber(-1000, 3000) +
                "px) rotate(" +
                RandomNumber(0, 3000) +
                "deg)"
            });
        }
    }

    render() {
        return (
            <BackgroundAnimatedCSS className="absolute top-0 bottom-0 right-0 left-0 backgroundAnimated"/>
        );
    }
}
