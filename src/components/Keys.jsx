import React from "react";
import Key from './Key';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

export class Keys extends React.Component {
   stickers;
   stickers1;
   stickers2;

  constructor(props) {
    super(props);
    
    this.stickers1 = [
        [{ stick: 'q', scan: 'q', span: 0 }, { stick: 'w', scan: 'w', span: 0 }, { stick: 'e', scan: 'e', span: 0 }, { stick: 'r', scan: 'r', span: 0 },
      { stick: 't', scan: 't', span: 0 }, { stick: 'y', scan: 'y', span: 0 }, { stick: 'u', scan: 'u', span: 0 }, { stick: 'i', scan: 'i', span: 0 },
      { stick: 'o', scan: 'o', span: 0 }, { stick: 'p', scan: 'p', span: 0 } ],
        [{ stick: 'a', scan: 'a', span: 0 }, { stick: 's', scan: 's', span: 0 }, { stick: 'd', scan: 'd', span: 0 }, { stick: 'f', scan: 'f', span: 0 },
      { stick: 'g', scan: 'g', span: 0 }, { stick: 'h', scan: 'h', span: 0 }, { stick: 'j', scan: 'j', span: 0 }, { stick: 'k', scan: 'k', span: 0 },
      { stick: 'l', scan: 'l', span: 0 }],
        [{ stick: 'z', scan: 'z', span: 0 }, { stick: 'x', scan: 'x', span: 0 }, { stick: 'c', scan: 'c', span: 0 }, { stick: 'v', scan: 'v', span: 0 },
      { stick: 'b', scan: 'b', span: 0 }, { stick: 'n', scan: 'n', span: 0 }, { stick: 'm', scan: 'm', span: 0 }, { stick: 'Del', scan: 'dl', span: 0 } ],
        [{ stick: 'Schift', scan: 'sh', span: 0 }, { stick: ',', scan: ',', span: 0 }, { stick: 'Space', scan: ' ', span: 10 }, { stick: '.', scan: '.', span: 0 } ]
    ];
    this.stickers2= [
      [{ stick: '1', scan: '1', span: 0 }, { stick: '2', scan: '2', span: 0 }, { stick: '3', scan: '3', span: 0 }, { stick: '4', scan: '4', span: 0 },
    { stick: '5', scan: '5', span: 0 }, { stick: '6', scan: '6', span: 0 }, { stick: '7', scan: '7', span: 0 }, { stick: '8', scan: '8', span: 0 },
    { stick: '9', scan: '9', span: 0 }, { stick: '0', scan: '0', span: 0 } ],
      [{ stick: '@', scan: '@', span: 0 }, { stick: '#', scan: '#', span: 0 }, { stick: '_', scan: '_', span: 0 }, { stick: '&', scan: '&', span: 0 },
    { stick: '-', scan: '-', span: 0 }, { stick: '+', scan: '+', span: 0 }, { stick: '(', scan: '(', span: 0 }, { stick: ')', scan: ')', span: 0 },
    { stick: '/', scan: '/', span: 0 }],
      [{ stick: '*', scan: '*', span: 0 }, { stick: '"', scan: '"', span: 0 }, { stick: '\'', scan: '\'', span: 0 }, { stick: ':', scan: ':', span: 0 },
    { stick: ';', scan: ';', span: 0 }, { stick: '!', scan: '!', span: 0 }, { stick: '?', scan: '?', span: 0 }, { stick: 'Del', scan: 'dl', span: 0 }  ],
      [{ stick: 'Schift', scan: 'sh', span: 0 }, { stick: ',', scan: ',', span: 0 }, { stick: 'Space', scan: ' ', span: 10 }, { stick: '.', scan: '.', span: 0 } ]
  ];
  }

  formRow(row) {
    let _row = [];
    let maxCol = this.stickers[row].length;
    let item;
    for (let col = 0; col < maxCol; col++) {
      item =  this.stickers[row][col];
      if (item.span > 0){
        _row.push(<Col md={{ span: item.span}} style={{ paddingLeft: "2px", paddingRight: "2px", paddingBottom: "2px" }} key={row * 10 + col}><Key scanCode={item.scan} stick={item.stick} /></Col>);
      } else {
        _row.push(<Col style={{ paddingLeft: "2px", paddingRight: "2px", paddingBottom: "2px" }} key={row * 10 + col}><Key scanCode={item.scan} stick={item.stick} /></Col>);
      }
      
    }
    return _row;
  }

  render() {
    this.view = [];
    console.log(this.props.shift);
    if (this.props.shift) {
      this.stickers =  this.stickers1;
    } else {
      this.stickers =  this.stickers2;
    }
    const maxRow = this.stickers.length;
    for (let row = 0; row < maxRow; row++) {
      this.view.push(<Row className="justify-content-md-center" key={'row' + row}>{this.formRow(row)}</Row>);
    }
    return (
      <Container >
        {this.view}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    shift : state.list.shift,
  }
}
  


export default connect( mapStateToProps)(Keys);


