import {Component} from "react";
import React from "react";

class Klasowepodejscie extends Component
{
    b = "jestem wlasciwoscia klasy!! tak jak w javie";
    constructor(props) {
        super(props);
        this.a = "ZADEKLAROWALES WLASNIE ZMIENNA w konstruktorze";
    }

    render()
    {
        return (
            <div className="JestemZKlasowegoPodejscia">
                <p>
                    {this.a} oraz {this.b}
                </p>
            </div>
        );
    }
    //tutaj konczy sie klasa
}

export default Klasowepodejscie;