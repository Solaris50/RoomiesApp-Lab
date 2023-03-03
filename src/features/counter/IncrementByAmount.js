import { incrementByAmount } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

export default function IncrementByAmount() {

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const [num, setNum] = useState(0);

    const onSubmit = () => {
        dispatch(incrementByAmount(parseInt(num)));
    }

    return (
        <div>

            <h1>incrementByAmount</h1>

            <span>count: {count}</span>

            <br />

            <label for="number">Increment the counter state by:</label>
            <input type="number" id="number" name="number" onChange={(e) => { setNum(e.target.value) }} />
            <button onClick={onSubmit}>Submit</button>

        </div>
    );
}
