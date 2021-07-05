import React , {Component} from "react";
import Airtable from 'airtable-node'

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

class RateButton extends Component {
    promote = () => {
        Log.update(this.props.id, {"T Well Spent?": this.props.val}).then(resp => {
            console.log("Rating " + this.props.id + "with " + this.props.val)
            console.log(resp)
        })
    }

    /* let atHref = "https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg" + this.props.id; */

    openInAt = () => {
        console.log("Opening in Airtable")
        window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/" + this.props.id)
    }
    
    render() {
        return (
        <div>
            <button onClick={() => this.promote()}
                    className={"w-full px-1 py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b " + (this.props.rating === this.props.val ? "font-bold text-black" : "text-gray-400") + " " + this.props.style}
                >
                    {this.props.val}
            </button>
        </div>
        );
    }
}

export default RateButton