import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'log-input-search',
  styleUrl: 'log-input-search.scss',
  shadow: true,
})
export class LogInputSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}