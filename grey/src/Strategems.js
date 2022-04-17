import React from 'react';
import Card from 'react-bootstrap/Card';

class Strategems extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Phase: {this.props.phase}</Card.Text>
                    <Card.Text>Quick Reference: {this.props.quickRef}</Card.Text>
                    <Card.Text>{this.props.strat}</Card.Text>
                    <Card.Text>Cost: {this.props.costs}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Strategems;