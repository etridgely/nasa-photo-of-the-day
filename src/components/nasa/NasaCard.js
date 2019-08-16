import React from "react";
import { Card} from 'semantic-ui-react'

const NasaCard = (props) => {
    return (
        <div className="nasa-card">
        <Card >
          <Card.Content header={props.title} />
          <Card.Content description={props.date} />
          <Card.Content description={props.explanation} />
          <img className="nasa-image" alt="outer space according to NASA" src={props.url} />
          {/* <Card.Content className="nasa-image" alt="space image" src={props.url} > */}
        </Card>
        </div>
    );
};

export default NasaCard;