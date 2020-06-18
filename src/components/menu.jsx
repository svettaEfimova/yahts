import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
         Кораблики для рыбалки
        </Menu.Item>
{/* 
        <Menu.Item
          name='submit'
          active={activeItem === 'submit'}
          onClick={this.handleItemClick}
        >
          
        </Menu.Item> */}

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
           Итого: &nbsp; <b>0</b>&nbsp; руб
          </Menu.Item>

          <Menu.Item   name='help'  active={activeItem === 'help'}
            onClick={this.handleItemClick}
          >
           Корзина
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}