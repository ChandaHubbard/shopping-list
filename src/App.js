import React from 'react';
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

export default class App extends React.Component {
    state = {
        shoppingItems: [
            { name: 'apples', checked: false },
            { name: 'orange', checked: true },
            { name: 'bread', checked: false },
        ]
    };

    handleDeleteItem = (item) => {
        const newItems = this.state.shoppingItems.filter(itm => itm !== item)
        this.setState({
            shoppingItems: newItems
        })
    }

    handleCheckItem = (item) => {
        const newItems = this.state.shoppingItems.map(itm => {
            if (item === item) {
                itm.checked = !itm.checked
            }
            return itm
        })
        this.setState({
            shoppingItems: newItems
        })
    }

    handleAddItem = (itemName) => {
        const newItems = [
            ...this.state.shoppingItems,
            { name: itemName, checked: false }
        ]
        this.setState({
            shoppingItems: newItems
        })
      }
      render() {
        return (
          <section>
            <AddItemForm
              onAddItem={this.handleAddItem}
            />
          </section>
        )
      }

    render () {
        return (
            <>
            <header>
                <h1>Shopping List</h1>
            </header>
            <main>
                <section>
                    <AddItemForm />
                </section>
                <section>
                    <ShoppingList 
                    items={this.state.shoppingItems} 
                    // {/* add the two callback props here*/}
                    onDeleteItem={this.handleDeleteItem}
                    onCheckItem={this.handleCheckItem}
                    />
                </section>
            </main>
            </>
        )
    }
}