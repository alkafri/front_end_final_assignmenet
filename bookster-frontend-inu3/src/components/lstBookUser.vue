<template>
    <div class="list-book-admin">
        <table>
            <thead>
            <tr>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Availability</th>
                <th>Order</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in books" :key="book.id" :class="getRowClass(book)">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.quantity }}</td>
                <td>
                    <span
                        @click="book.quantity > 0 ? decrementOrder(book) : null"
                        class="signOrder"
                        :class="{ 'disabled': book.quantity <= 0 }"
                        >
                        -
                    </span>
                    
                    <span class="qtyOrder">{{ book.order }}</span>
                    
                    <span
                        @click="book.quantity > 0 && book.order < book.quantity ? incrementOrder(book) : null"
                        class="signOrder"
                        :class="{ 'disabled': book.quantity <= 0 }"
                        >
                        +
                    </span>
                    
                    <button
                        @click="placeOrder(book)"
                        :class="[book.quantity > 0 ? 'order-button' : 'order-button-dis']"
                        :disabled="book.quantity <= 0"
                        >
                        Order
                    </button>
                </td>
            </tr>
            </tbody>
    </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            books: []
            };
        },
        created() {
            this.fetchBooks();
        },

        methods: {
            incrementOrder(book) {
                book.order++;
            },

            decrementOrder(book) {
                if (book.order > 0) {
                    book.order--;
                }
            },

            placeOrder(book) {
                // Implement the logic for placing an order here
                // This function will be executed when the "Order" button is clicked
            },

            fetchBooks() {
        
            fetch('http://localhost:3000/library/books')
                .then(response => response.json())
                .then(data => {
                    this.books = data.books.map((book) => {
                    book.order = 0;
                    return book;
                });
                })
                .catch(error => {
                console.error('Error fetching books:', error);
                });
            },
            getRowClass(book) {
            return book.id % 2 === 0 ? 'even-row' : 'odd-row';
            }
        }
    };
</script>

<style scoped>
.list-book-admin {
    width: 90%;
    margin: 0 auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background-color: #7c7c7c;
    color: white;
    font-size: 16px;
    height: 45px;
    text-align: center;
    border: white solid 2px;
}

td {
    background-color: #d9d9d9;
    color: black;
    font-size: 14px;
    padding: 8px;
    height: 45px;
    text-align: center;
    border: white solid 2px;
    align-content: center;
    vertical-align: middle;
}

.even-row {
    background-color: #d9d9d9;
}

.odd-row {
    background-color: white;
}

.signOrder{
    font-size: 36px;
    color: #5c5c5c;
    margin: 10px;
}

.qtyOrder{
    font-size: 36px;
    color: #5c5c5c;
    margin: 2px;
    background-color: white;
}

.order-button {
    background-color: #5c5c5c;
    color: #ffffff;
    width: 75px;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 25px;
    cursor: pointer;
    font-weight: bold;
}

.order-button-dis {
    background-color: #acacac;
    color: #ffffff;
    width: 75px;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 25px;
    font-weight: bold;
}
</style>