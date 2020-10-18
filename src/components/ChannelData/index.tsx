import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        const div = messageRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);

    return (
        <Container>
            <Messages ref={messageRef}>
                {Array(20).fill(0).map((...args) => <ChannelMessage
                    key={args[1]}
                    author="Tetemio"
                    date="02/09/2020"
                    content="Dale dale!!"
                />)}

                <ChannelMessage
                    author="Bot maneiro"
                    date="02/09/2020"
                    content={
                        <>
                            <Mention>@ShyGaba</Mention> seu otário!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;