<template>
    <div class="list-book-admin">
        <table>
            <thead>
            <tr>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Availability</th>
                <th>Order</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in books" :key="book.id" :class="getRowClass(book)">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.availability }}</td>
                <td>{{ book.order }}</td>
                <td>{{ book.action }}</td>
            </tr>
            </tbody>
    </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                books: [
                { id: 1, title: 'Book 1', author: 'Author 1', availability: 'Available', order: 'Order 1', action: 'Action 1' },
                { id: 2, title: 'Book 2', author: 'Author 2', availability: 'Not Available', order: 'Order 2', action: 'Action 2' },
                { id: 3, title: 'Book 3', author: 'Author 3', availability: 'Available', order: 'Order 3', action: 'Action 3' },
                { id: 4, title: 'Book 4', author: 'Author 4', availability: 'Not Available', order: 'Order 4', action: 'Action 4' },
                { id: 5, title: 'Book 5', author: 'Author 5', availability: 'Available', order: 'Order 5', action: 'Action 5' }
                ]
            };
        },
        methods: {
            getRowClass(book) {
                return book.id % 2 === 0 ? 'even-row' : 'odd-row';
            }
        }
    };
</script>

<style scoped>
.list-book-admin {
    width: 95%;
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
}

td {
    background-color: #d9d9d9;
    color: black;
    font-size: 14px;
    padding: 8px;
}

.even-row {
    background-color: #d9d9d9;
}

.odd-row {
    background-color: white;
}
</style>