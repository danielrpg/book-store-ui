import React, { useEffect, useState } from 'react';
import { getListBooks } from '../../services/BookService';
import { Container, Grid } from 'semantic-ui-react';
import { BookCardComponent } from './BookCardComponent';


export const ListBooksComponent = () => {
    const [datas, setListBooks] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const response = await getListBooks();
            setListBooks(response.data);
        }
        fetchData();
    }, []);


    return (
        <Grid stackable columns={2}> 
        { 
            datas ?
            datas.map((book) => (
                    <Grid.Column key={book.id}>
                        <BookCardComponent 
                            title={book.title}
                            description={book.description}
                            image={book.imageUrl}
                            price={book.price}
                            author={book.author} />
                    </Grid.Column>
            ))
            : <h1> No data </h1>
        }
        </Grid> 
    );
}