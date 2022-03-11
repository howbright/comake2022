import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import styles from "./signpad.module.css";
import { MouseEvent } from "react";

//simple draw component made in react

const DrawApp: NextPage = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null;
  const [pen, setPen] = useState("up");
  const [mode, setMode] = useState("draw");
  const [lineWidth, setLineWidth] = useState(10);
  const [penColor, setPenColor] = useState("black");
  const [penCoords, setPenCoords] = useState({ offsetX: 666, offsetY: 13 });

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    //clears it to all white, resets state to original

    if (canvas.current) {
      ctx = canvas.current.getContext("2d");
      ctx!.fillStyle = "white";
      ctx!.fillRect(0, 0, 800, 600);
      ctx!.lineWidth = 10;
    }
  };

  const drawing = (e: MouseEvent<HTMLCanvasElement>) => {
    //if the pen is down in the canvas, draw/erase

    if(!ctx) {
        return;
    }

    if (pen === "down") {
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";

      if (mode === "draw") {
        ctx.strokeStyle = penColor;
      }

      if (mode === "erase") {
        ctx.strokeStyle = "#ffffff";
      }

      ctx.moveTo(penCoords.offsetX, penCoords.offsetY); //move to old position
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //draw to new position
      ctx.stroke();

      setPenCoords({
        //save new position
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      });
    }
  };

  const penDown = (e: MouseEvent<HTMLCanvasElement>) => {
    //mouse is down on the canvas
    setPen("down");
    setPenCoords({
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
    });
  };

  const penUp = (e: MouseEvent<HTMLCanvasElement>) => {
    //mouse is up on the canvas
    setPen("up");
  };

  return (
    <div >
      <h3>Super Simple React Drawing Component</h3>
      <h4>Pen by Jason.lough@gmail.com</h4>
      <canvas
        ref={canvas}
        width="800px"
        height="600px"
        style={{border: "1px"}}
        onMouseMove={drawing}
        onMouseDown={penDown}
        onMouseUp={penUp}
      ></canvas>
    </div>
  );
};

export default DrawApp;

// class DrawApp extends React.Component {

//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         this.reset()
//     }

//     draw(e) { //response to Draw button click
//         this.setState({
//             mode:'draw'
//         })
//     }

//     erase() { //response to Erase button click
//         this.setState({
//             mode:'erase'
//         })
//     }

//     drawing(e) { //if the pen is down in the canvas, draw/erase

//         if(this.state.pen === 'down') {

//             this. ctx!.beginPath()
//             this. ctx!.lineWidth = this.state.lineWidth
//             this. ctx!.lineCap = 'round';

//             if(this.state.mode === 'draw') {
//                 this. ctx!.strokeStyle = this.state.penColor
//             }

//             if(this.state.mode === 'erase') {
//                 this. ctx!.strokeStyle = '#ffffff'
//             }

//             this. ctx!.moveTo(this.state.penCoords[0], this.state.penCoords[1]) //move to old position
//             this. ctx!.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY) //draw to new position
//             this. ctx!.stroke();

//             this.setState({ //save new position
//                 penCoords:[e.nativeEvent.offsetX, e.nativeEvent.offsetY]
//             })
//         }
//     }

//     penDown(e) { //mouse is down on the canvas
//         this.setState({
//             pen:'down',
//             penCoords:[e.nativeEvent.offsetX, e.nativeEvent.offsetY]
//         })
//     }

//     penUp() { //mouse is up on the canvas
//         this.setState({
//             pen:'up'
//         })
//     }

//     penSizeUp(){ //increase pen size button clicked
//         this.setState({
//             lineWidth: this.state.lineWidth += 5
//         })
//     }

//     penSizeDown() {//decrease pen size button clicked
//         this.setState({
//             lineWidth: this.state.lineWidth -= 5
//         })
//     }

//     setColor(c){ //a color button was clicked
//         this.setState({
//             penColor : c
//         })
//     }

//     reset() { //clears it to all white, resets state to original
//         this.setState({
//             mode: 'draw',
//             pen : 'up',
//             lineWidth : 10,
//             penColor : 'black'
//         })

//         this.ctx = this.refs.canvas.getContext('2d')
//         this. ctx!.fillStyle="white"
//         this. ctx!.fillRect(0,0,800,600)
//         this. ctx!.lineWidth = 10
//     }

//     render() {
//         return (
//             <div style={styles.maindiv}>
//                 <h3>Super Simple React Drawing Component</h3>
//                 <h4>Pen by Jason.lough@gmail.com</h4>
//                 <canvas ref="canvas" width="800px" height="600px" style={styles.canvas}
//                     onMouseMove={(e)=>this.drawing(e)}
//                     onMouseDown={(e)=>this.penDown(e)}
//                     onMouseUp={(e)=>this.penUp(e)}>
//                 </canvas>
//                 <div>
//                     <button onClick={(e)=>this.draw(e)} style={styles.btn, styles.button}>Draw</button>
//                     <button onClick={(e)=>this.erase(e)} style={styles.btn, styles.button}>Erase</button>
//                     <button onClick={(e)=>this.penSizeUp()} style={styles.btn, styles.button}>Pen Size +</button>
//                     <button onClick={(e)=>this.penSizeDown()} style={styles.btn, styles.button}>Pen Size -</button>
//                     <button onClick={()=>this.reset()} style={styles.btn, styles.button}>Reset</button>
//                 </div>
//                 <div>
//                     <button style={Object.assign({}, styles.colorSwatches.red, styles.button)} onClick={()=>this.setColor('red')}>Red</button>
//                     <button style={Object.assign({}, styles.colorSwatches.orange, styles.button)} onClick={()=>this.setColor('orange')}>Orange</button>
//                     <button style={Object.assign({}, styles.colorSwatches.yellow, styles.button)} onClick={()=>this.setColor('yellow')}>Yellow</button>
//                     <button style={Object.assign({}, styles.colorSwatches.green, styles.button)} onClick={()=>this.setColor('green')}>Green</button>
//                     <button style={Object.assign({}, styles.colorSwatches.blue, styles.button)} onClick={()=>this.setColor('blue')}>Blue</button>
//                     <button style={Object.assign({}, styles.colorSwatches.purple, styles.button)} onClick={()=>this.setColor('purple')}>Purple</button>
//                     <button style={Object.assign({}, styles.colorSwatches.black, styles.button)} onClick={()=>this.setColor('black')}>Black</button>
//                 </div>
//             </div>
//         )
//     }
// }

//ReactDOM.render(<DrawApp />, document.getElementById('da'))
