import React from 'react'
import { Card, Icon, Image} from 'semantic-ui-react'

const YahtCard= ({title, price, image, deskription }) => (
  <Card>
    <Image src={image} />
    <Card.Content>
<Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Description>
       {deskription}
      </Card.Description>
      <Card.Description>
       {deskription}
      </Card.Description>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
       {price}
      </a>
    </Card.Content>
  </Card>
)
export default YahtCard