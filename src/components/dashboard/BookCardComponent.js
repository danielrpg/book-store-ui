import React from 'react';
import { Card, Image, Button, Label, Icon } from 'semantic-ui-react';

export const BookCardComponent = ({image, title, price, description, author}) => {    

    return (
        <Card>
            <Image src='http://placeimg.com/1500/500/nature' width={380} height={200} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                <Label.Group tag>
                    <Label as='a' color='orange'>${price}</Label>
                </Label.Group>    
                </Card.Meta>
                <Card.Description>
                    {description}
                    <hr />
                    <p>Author Name: {author.name} {author.lastName}</p>
                    <p>From: {author.nacionality}</p>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            <Icon name="shopping cart" size="large" />
                            Buy
                        </Button>
                        </div>
                    </Card.Content>
                </Card.Description>
            </Card.Content> 
        </Card>
    );
}