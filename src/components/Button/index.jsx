import { Component } from "react"
import "./styles.css"

export default class Button extends Component {
    render() {
        const { text, event, disabled } = this.props
        return (
            <button disabled={disabled} className="button" onClick={event}>{text}</button>
        )
    }
}