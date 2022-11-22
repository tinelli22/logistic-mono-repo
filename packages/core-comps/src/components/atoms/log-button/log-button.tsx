import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'log-button',
  styleUrl: 'log-button.scss',
  shadow: true,
})
export class LogButton {
 
  @Prop() backgroundColor?: string = 'primary'
  @Prop() textColor?: string = 'light'
  
  @Prop({ reflect: true }) disable? = false;

  render() {
    const classes = {
     [`bg-${this.backgroundColor}`]: !!this.backgroundColor,
     [`text-${this.textColor}`]: !!this.textColor
    };

    return (
      <Host>
        <button class={classes} disabled={this.disable}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
