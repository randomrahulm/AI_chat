import type { RequestHandler } from './$types';
import {OpenAIStream,StreamingTextResponse} from 'ai'
import { Configuration,OpenAIApi } from 'openai-edge';
import {OPENAI_API} from '$env/static/private'

const config = new Configuration({
    apiKey:OPENAI_API
});

const openai = new OpenAIApi(config);

export const POST: RequestHandler = async ({request}) => {
    
    const {messages}= await request.json(); 

    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        stream:true,
        messages
    });

    const stream=OpenAIStream(response)

    return new StreamingTextResponse(stream);

}; 