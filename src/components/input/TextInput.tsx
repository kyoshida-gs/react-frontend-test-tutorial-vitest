import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const TextInput = () => {
    const [text, setText] = useState<string>('');

    return (
        <>
            <div className="flex flex-row gap-1 items-center">
                {/* <input
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder="Enter text"
                    className="border-2 border-gray-300 rounded-md p-2"
                /> */}
                <Input
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder="Enter text"
                />

                {<Button>Click me</Button>}
            </div>
            <p>{text}</p>
        </>
    );
};

export default TextInput;
