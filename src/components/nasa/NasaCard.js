import React from "react";
import { Card} from 'semantic-ui-react'

const NasaCard = (props) => {
    return (
        
        <Card className="nasa-card">
          <Card.Content header={props.title} />
          <Card.Content date={props.date} />
          <Card.Content description={props.explanation} />
          <img className="nasa-image" alt="outer space according to NASA" src={props.url} />
          {/* <Card.Content className="nasa-image" alt="space image" src={props.url} > */}
        </Card>
    );
};

export default NasaCard;