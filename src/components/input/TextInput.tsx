import { useState } from 'react';

const TextInput = () => {
    const [text, setText] = useState<string>('');

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter text"
                className="border-2 border-gray-300 rounded-md p-2"
            />
            <p>{text}</p>
        </div>
    );
};

export default TextInput;
