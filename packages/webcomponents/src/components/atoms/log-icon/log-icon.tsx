import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'log-icon',
  styleUrl: 'log-icon.scss',
  shadow: true,
})
export class LogIcon {
 
  @Prop() name?= "airplane";
  @Prop() color?= 'primary'

  render() {
    const classes = {
      [this.color]: !!this.color,
      [`icon-${this.name}`]: !!this.name
    }

    return (
      <Host>
        <i class={classes}></i>
      </Host>
    );
  }
}
