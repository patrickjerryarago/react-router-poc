import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Profiles = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Profile Page</h2>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>Profile 1</ListGroup.Item>
                            <ListGroup.Item>Profile 2</ListGroup.Item>
                            <ListGroup.Item>Profile 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }

export default Profiles;