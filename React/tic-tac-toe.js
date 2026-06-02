<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>React Tic Tac Toe</title>

    <!-- React CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Babel CDN -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial, sans-serif;
        }

        body{
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(to right,#4facfe,#00f2fe);
        }

        .container{
            background:white;
            padding:30px;
            border-radius:20px;
            box-shadow:0 0 20px rgba(0,0,0,0.2);
            display:flex;
            gap:50px;
            align-items:flex-start;
        }

        .left{
            text-align:center;
        }

        h1{
            color:#333;
            margin-bottom:20px;
            font-size:40px;
        }

        .status{
            font-size:24px;
            font-weight:bold;
            margin-bottom:20px;
            color:#444;
        }

        .board{
            display:grid;
            grid-template-columns:repeat(3,100px);
            grid-template-rows:repeat(3,100px);
        }

        .cell{
            border:2px solid #333;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:50px;
            font-weight:bold;
            cursor:pointer;
            background:white;
            transition:0.3s;
        }

        .cell:hover{
            background:#dff9fb;
            transform:scale(1.05);
        }

        .x{
            color:red;
        }

        .o{
            color:blue;
        }

        .restart{
            margin-top:20px;
            padding:12px 25px;
            border:none;
            border-radius:10px;
            background:#00b894;
            color:white;
            font-size:18px;
            cursor:pointer;
            transition:0.3s;
        }

        .restart:hover{
            background:#019870;
        }

        .history{
            min-width:220px;
        }

        .history h2{
            margin-bottom:15px;
            color:#333;
        }

        .history button{
            width:100%;
            padding:10px;
            margin-bottom:10px;
            border:none;
            border-radius:8px;
            background:#4facfe;
            color:white;
            font-size:16px;
            cursor:pointer;
            transition:0.3s;
        }

        .history button:hover{
            background:#008cff;
        }

    </style>

</head>

<body>

<div id="root"></div>

<script type="text/babel">

function TicTacToe(){

    const [history,setHistory] = React.useState([Array(9).fill("")]);

    const [stepNumber,setStepNumber] = React.useState(0);

    const [xIsNext,setXIsNext] = React.useState(true);

    const currentBoard = history[stepNumber];

    const winner = calculateWinner(currentBoard);

    function handleClick(index){

        if(currentBoard[index] || winner){
            return;
        }

        const newBoard = currentBoard.slice();

        newBoard[index] = xIsNext ? "X" : "O";

        const newHistory = history.slice(0,stepNumber + 1);

        setHistory([...newHistory,newBoard]);

        setStepNumber(newHistory.length);

        setXIsNext(!xIsNext);
    }

    function jumpTo(step){

        setStepNumber(step);

        setXIsNext(step % 2 === 0);
    }

    function restartGame(){

        setHistory([Array(9).fill("")]);

        setStepNumber(0);

        setXIsNext(true);
    }

    let status;

    if(winner){

        status = "Winner : " + winner;

    }
    else if(!currentBoard.includes("")){

        status = "Match Draw!";

    }
    else{

        status = "Next Player : " + (xIsNext ? "X" : "O");

    }

    const moves = history.map((step,move)=>{

        const description = move ?
        "Go to move #" + move :
        "Go to game start";

        return(

            <button key={move} onClick={()=>jumpTo(move)}>

                {description}

            </button>
        );

    });

    return(

        <div className="container">

            <div className="left">

                <h1>Tic Tac Toe</h1>

                <div className="status">

                    {status}

                </div>

                <div className="board">

                    {currentBoard.map((cell,index)=>(

                        <div
                            key={index}
                            className={`cell ${cell === "X" ? "x" : "o"}`}
                            onClick={()=>handleClick(index)}
                        >

                            {cell}

                        </div>

                    ))}

                </div>

                <button
                    className="restart"
                    onClick={restartGame}
                >

                    Restart Game

                </button>

            </div>

            <div className="history">

                <h2>Move History</h2>

                {moves}

            </div>

        </div>

    );
}

function calculateWinner(board){

    const lines = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    for(let line of lines){

        const [a,b,c] = line;

        if(
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ){

            return board[a];

        }
    }

    return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(<TicTacToe />);

</script>

</body>

</html>
