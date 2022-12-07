import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'log-icon',
  styleUrl: 'log-icon.scss',
  shadow: true,
})
export class LogIcon {
 
  @Prop() name?= "airplane";

  render() {
   
    return (
      <Host>
        <i class={`icon-${this.name}`}></i>
      </Host>
    );
  }
}
