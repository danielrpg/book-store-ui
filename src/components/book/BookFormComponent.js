import React, { useState, useEffect } from 'react';
import {
    Form, Button, TextArea, Select
} from 'semantic-ui-react';
import { getListAuthors } from '../../services/AuthorService';
import { saveBook } from '../../services/BookService';

export const BookFormComponent = () => {
    const [options, setOptions] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState(null);
    const [imageUrl, setImage] = useState('');

    useEffect(() => {
         const fetchData = async () => {
            const response = await getListAuthors();
            let newAuthorsList = response.data.map((author) => {
                const newText = author.name + ' ' + author.lastName;
                const newValue = author.name + ' ' + author.lastName;
                return  {
                    key: author.id,
                    text: newText,
                    value: newValue,
                }
            });
            setOptions(newAuthorsList);
        }
        fetchData();
    }, []);

    const saveNewBook = async () => {
        const book = {title, description, price, author, imageUrl};
        const result = await saveBook(book);
        console.log(result);    
    }

    return (
        <Form>
            <Form.Field>
                <label>Title</label>
                <input 
                    placeholder='Title for Book'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <TextArea 
                    placeholder='Short description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Price</label>
                <input 
                    placeholder='price' type="Number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Image</label>
                <input 
                    placeholder='Image'
                    value={imageUrl}
                    onChange={(e) => setImage(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Author</label>
                <select onChange={(e) => setAuthor(e.target.value)}> 
                    {
                        options.map((option) => 
                            <option 
                                value={option.key} 
                                key={option.key}> 
                            {option.text} 
                            </option>
                        )
                    }
                </select>
            </Form.Field>
            <Button type='submit' onClick={() => saveNewBook()}>Save</Button>
        </Form>
    )
}