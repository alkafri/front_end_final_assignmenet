<template>
    <div class="list-book-admin">
        <table>
            <thead>
            <tr>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Availability</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in books" :key="book.id" :class="getRowClass(book)">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.quantity }}</td>
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
        fetchBooks() {
        
        fetch('http://localhost:3000/library/books')
            .then(response => response.json())
            .then(data => {
            
            this.books = data.books;
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
}

.even-row {
    background-color: #d9d9d9;
}

.odd-row {
    background-color: white;
}
</style>