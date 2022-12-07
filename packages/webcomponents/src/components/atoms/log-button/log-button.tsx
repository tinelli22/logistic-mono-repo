import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'log-button',
  styleUrl: 'log-button.scss',
  shadow: true,
})
export class LogButton {
 
  @Prop() backgroundColor?: string = 'primary'
  @Prop() textColor?: string = 'light'
  
  @Prop({ reflect: true }) disable? = false;

  @Event() clickButton: EventEmitter;

  render() {
    const classes = {
     [`bg-${this.backgroundColor}`]: !!this.backgroundColor,
     [`text-${this.textColor}`]: !!this.textColor
    };

    return (
      <Host>
        <button class={classes} disabled={this.disable} onClick={() => this.clickButton.emit()}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
